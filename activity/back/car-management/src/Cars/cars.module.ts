import { Module } from "@nestjs/common";
import { CarsController } from "./cars.controller";
import { PrimaModule } from "src/prisma/prima.module";
import { CarsService } from "./cars.service";

@Module({
  imports: [PrimaModule],
  controllers: [CarsController],
  providers: [CarsService],
  exports: [],
})

export class CarsModule {

}