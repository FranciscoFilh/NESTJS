import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from "@nestjs/common";
import { CreateControlProductionDTO } from "./dto/create-control_production.dto";
import { ControlProductionService } from "./control_production.service";
import { UpdateControlProductionDTP } from "./dto/update-control_production.dto";
import { UpdatePatchControlProductionDTP } from "./dto/update-patch-control_production";

@Controller('production')
export class ControlProductionController {
    constructor(private readonly productionService: ControlProductionService ) {
    
    }
        
    @Post()
    async create(@Body() data: CreateControlProductionDTO) {
        return this.productionService.create(data)
    }

    @Get()
    async read() {
        return this.productionService.list()
    }

    @Get(':id')
    async readOne(@Param('id', ParseIntPipe) id: number) {
        return this.productionService.show(id)
    }

    @Put(':id')
    async update(@Body() data: UpdateControlProductionDTP, @Param('id', ParseIntPipe) id: number) {
        return this.productionService.update(id, data)
    }

    @Patch(':id')
    async updatePartial(@Body() data: UpdatePatchControlProductionDTP, @Param('id', ParseIntPipe) id: number) {
        return this.productionService.updatePartial(id, data)
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return this.productionService.delete(id)
    }
}
