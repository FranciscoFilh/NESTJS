import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateControlProductionDTO } from "./dto/create-control_production.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { UpdateControlProductionDTP } from "./dto/update-control_production.dto";
import { UpdatePatchControlProductionDTP } from "./dto/update-patch-control_production";

@Injectable()
export class ControlProductionService {
    constructor(private readonly prisma: PrismaService) {

    }

    async create({ name, brand, date_manufacturing, validity }: CreateControlProductionDTO) {
        return this.prisma.production.create ({
            data: {
                name,
                brand,
                date_manufacturing,
                validity,
            }
        })
    }

    async list() {
        return this.prisma.production.findMany()
    }
    
    async show(id: number) {
        return this.prisma.production.findUnique({
            where: {
                id,
            }
        }) 
    }
    
    async update(id: number, data: UpdateControlProductionDTP) {
        if (!(await this.show(id))) {
            throw new NotFoundException(`Usuário ${id} não encontrado!`)
        }
        return this.prisma.production.update({
            data,
            where: {
                id,
            }
        })
    }
    
    async updatePartial(id: number, data: UpdatePatchControlProductionDTP) {
        if (!(await this.show(id))) {
            throw new NotFoundException(`Produto ${id} não encontrado!`)
        }
        return this.prisma.production.update({
                data,
                where: {
                    id
                }
            })
        }
    
    async delete(id: number) {
        if (!(await this.show(id))) {
            throw new NotFoundException(`Produto ${id} não encontrado!`)
        }
        return this.prisma.production.delete({
            where: {
                id,
            }
        })
    }
}