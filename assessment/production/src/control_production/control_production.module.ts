import { Module } from "@nestjs/common";
import { ControlProductionController } from "./control_production.controller";
import { ControlProductionService } from "./control_production.service";
import { PrimaModule } from "src/prisma/prima.module";

@Module({
    imports:[PrimaModule],
    controllers:[ControlProductionController],
    providers:[ControlProductionService],    
    exports: [],
})
export class ControlProductionModule {

}