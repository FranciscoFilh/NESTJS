import { Injectable, NotFoundException } from "@nestjs/common";
import { PrimaService } from "src/prisma/prisma.service";
import { CreateUserDTO } from "./dto/create-users.dto";
import { UpdateUserDTO } from "./dto/update-user.dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user.dto";

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrimaService) {

  }

  async create({ name, email, password }: CreateUserDTO) {
    return this.prisma.login.create({
      data: {
        name,
        email,
        password
      }
    })
  }

  async list() {
    return this.prisma.login.findMany()
  }

  async show(id: number) {
    return this.prisma.login.findUnique({
      where: {
        id,
      }
    }) 
  }

  async update(id: number, data: UpdateUserDTO) {
    if (!(await this.show(id))) {
      throw new NotFoundException(`Usuário ${id} não encontrado!`)
    }
    return this.prisma.login.update({
      data,
      where: {
        id,
      }
    })
  }

  async updatePartial(id: number, data: UpdatePatchUserDTO) {
    if (!(await this.show(id))) {
      throw new NotFoundException(`Usuário ${id} não encontrado!`)
    }
    return this.prisma.login.update({
      data,
      where: {
        id
      }
    })
  }

  async delete(id: number) {
    if (!(await this.show(id))) {
      throw new NotFoundException(`Usuário ${id} não encontrado!`)
    }
    return this.prisma.login.delete({
      where: {
        id,
      }
    })
  }

  async listFavorite(userId: number) {
    return this.prisma.login.findUnique({
        where: {
            id: userId,
        },
        include: {
            favoriteCars: true,
        },
    });
  }

  async addFavoriteCar(userId: number, carId: number) {
    const user = await this.show(userId);
    await this.prisma.login.update({
      where: { id: userId },
      data: { favoriteCars: { connect: { id: carId } } },
    });
  }
  async removeFavoriteCar(userId: number, carId: number){
    const user = await this.show(userId);
    await this.prisma.login.update({
      where: { id: userId },
      data: { favoriteCars: { disconnect: { id: carId } } },
    });
  }
}