import { Injectable, NotFoundException } from "@nestjs/common"
import { PrimaService } from "src/prisma/prisma.service"
import { CreateCarDTO } from "./dto/create-cars.dto"
import { UpdateCarDTO } from "./dto/update-car.dto"
import { UpdatePatchCarDTO } from "./dto/update-patch-car.dto"

@Injectable()
export class CarsService {
  constructor(private readonly prisma: PrimaService) {

  }

  async create({ brand, model, year, km, price, description, urlImage }: CreateCarDTO) {
    return this.prisma.car.create({
      data: {
        brand,
        model,
        year,
        km,
        price,
        description,
        urlImage
      }
    })
  }

  async list() {
    return this.prisma.car.findMany()
  }

  async show(id: number) {
    return this.prisma.car.findUnique({
      where: {
        id,
      }
    }) 
  }

  async update(id: number, data: UpdateCarDTO) {
    if (!(await this.show(id))) {
      throw new NotFoundException(`Carro ${id} não encontrado!`)
    }
    return this.prisma.car.update({
      data,
      where: {
        id,
      }
    })
  }

  async updatePartial(id: number, data: UpdatePatchCarDTO) {
    if (!(await this.show(id))) {
      throw new NotFoundException(`Carro ${id} não encontrado!`)
    }
    return this.prisma.car.update({
      data,
      where: {
        id
      }
    })
  }

  async delete(id: number) {
    if (!(await this.show(id))) {
      throw new NotFoundException(`Carro ${id} não encontrado!`)
    }
    return this.prisma.car.delete({
      where: {
        id,
      }
    })
  }
}