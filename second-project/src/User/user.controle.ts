import { Controller, Post, Body, Get, Param, Put, Patch, Delete, ParseIntPipe } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user-dto";
import { UpdateUserDTO } from "./dto/update-user-dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user-dto";

@Controller('users')
export class UserController {
  @Post()
  async create(@Body() {name, cpf, email, contact, password}: CreateUserDTO) {
    return {name, cpf, email, contact, password}
  }

  @Get()
  async read() {
    return { users:[] }
  }

  @Get(':id')
  async readOne(@Param('id', ParseIntPipe) id: number) {
    return { user:{}, id }
  }

  @Put(':id')
  async update(@Body() {name, cpf, email, contact, password}: UpdateUserDTO, @Param('id', ParseIntPipe) id: number) {
    return {
      method: 'PUT',
      name, cpf, email, contact, password,
      id
    }
  }

  @Patch(':id')
  async updatePartial(@Body() {name, cpf, email, contact, password}: UpdatePatchUserDTO, @Param('id', ParseIntPipe) id: number) {
    return {
      method: 'PATCH',
      name, cpf, email, contact, password,
      id
    }
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return { id }
  }
}