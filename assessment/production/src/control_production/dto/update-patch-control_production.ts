import { PartialType } from "@nestjs/mapped-types";
import { CreateControlProductionDTO } from "./create-control_production.dto";

export class UpdatePatchControlProductionDTP extends PartialType (CreateControlProductionDTO) {

}