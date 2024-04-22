import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { PrimaModule } from "src/prisma/prima.module";
import { UsersService } from "./users.service";

@Module({
  imports: [PrimaModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [],
})

export class UsersModule {

}