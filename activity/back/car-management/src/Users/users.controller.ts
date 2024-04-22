import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-users.dto";
import { UpdateUserDTO } from "./dto/update-user.dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user.dto";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {

    }
    
    @Post()
    async create(@Body() data: CreateUserDTO) {
        return this.userService.create(data)
    }

    @Get()
    async read() {
        return this.userService.list()
    }

    @Get(':id')
    async readOne(@Param('id', ParseIntPipe) id: number) {
        return this.userService.show(id)
    }

    @Put(':id')
    async update(@Body() data: UpdateUserDTO, @Param('id', ParseIntPipe) id: number) {
        return this.userService.update(id, data)
    }

    @Patch(':id')
    async updatePartial(@Body() data: UpdatePatchUserDTO, @Param('id', ParseIntPipe) id: number) {
        return this.userService.updatePartial(id, data)
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return this.userService.delete(id)
    }

    @Get(':userId/favorite')
    async listFavoriteCar(@Param('userId', ParseIntPipe) userId: number) {
        return this.userService.listFavorite(userId);
    }

    @Post(':userId/favorite/:carId')
    async addFavoriteCar(@Param('userId', ParseIntPipe) id: number, @Param('carId', ParseIntPipe) carId: number) {
        return this.userService.addFavoriteCar(id, carId);
    }

    @Delete(':userId/favorite/:carId')
    async removeFavoriteCar(@Param('userId', ParseIntPipe) userId: number, @Param('carId', ParseIntPipe) carId: number) {
        return this.userService.removeFavoriteCar(userId, carId);
    }
}