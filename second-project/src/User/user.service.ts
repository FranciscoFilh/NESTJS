import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDTO } from "./dto/create-user-dto";
import { UpdateUserDTO } from "./dto/update-user-dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user-dto";

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {

  }

  async create({ name, email, cpf, password }: CreateUserDTO) {
    return this.prisma.user_login.create({
      data: {
        name,
        email,
        cpf,
        password
      }
    })
  }

  async list() {
    return this.prisma.user_login.findMany()
  }

  async show(id: number) {
    return this.prisma.user_login.findUnique({
      where: {
        id,
      }
    })
  }

  async update(id: number, data: UpdateUserDTO) {
    return this.prisma.user_login.update({
      data,
      where: {
        id,
      }
    })
  }

  async updatePartial(id: number, data: UpdatePatchUserDTO) {
    return this.prisma.user_login.update({
      data,
      where: {
        id
      }
    })
  }

  async delete(id: number) {
    return this.prisma.user_login.delete({
      where: {
        id,
      }
    })
  }
}