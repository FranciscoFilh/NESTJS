import { Controller, Post, Body, Get, Param, Put, Patch, Delete, ParseIntPipe } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user-dto";
import { UpdateUserDTO } from "./dto/update-user-dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user-dto";
import { UsersService } from "./user.service";


@Controller('users')
export class UserController {
  constructor(private readonly userService: UsersService) {

  }

  @Post()
  async create(@Body() data: CreateUserDTO) {
    return this.userService.create(data);
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
}