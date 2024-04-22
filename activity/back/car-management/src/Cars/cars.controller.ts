import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from "@nestjs/common";
import { CreateCarDTO } from "./dto/create-cars.dto";
import { UpdateCarDTO } from "./dto/update-car.dto";
import { UpdatePatchCarDTO } from "./dto/update-patch-car.dto";
import { CarsService } from "./cars.service";

@Controller('cars')
export class CarsController {
    constructor(private readonly carsService: CarsService) {

    }
    
    @Post()
    async create(@Body() data: CreateCarDTO) {
        return this.carsService.create(data)
    }

    @Get()
    async read() {
        return this.carsService.list()
    }

    @Get(':id')
    async readOne(@Param('id', ParseIntPipe) id: number) {
        return this.carsService.show(id)
    }

    @Put(':id')
    async update(@Body() data: UpdateCarDTO, @Param('id', ParseIntPipe) id: number) {
        return this.carsService.update(id, data)
    }

    @Patch(':id')
    async updatePartial(@Body() data: UpdatePatchCarDTO, @Param('id', ParseIntPipe) id: number) {
        return this.carsService.updatePartial(id, data)
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return this.carsService.delete(id)
    }
}