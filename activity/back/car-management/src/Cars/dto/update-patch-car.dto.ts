import { PartialType } from "@nestjs/mapped-types";
import { CreateCarDTO } from "./create-cars.dto";

export class UpdatePatchCarDTO extends PartialType (CreateCarDTO) {

}