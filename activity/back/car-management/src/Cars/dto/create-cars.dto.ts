import { IsString } from "class-validator";

export class CreateCarDTO {
    @IsString()
    brand: string

    @IsString()
    model: string

    @IsString()
    year: string

    @IsString()
    km: string

    @IsString()
    price: string

    @IsString()
    description: string

    @IsString()
    urlImage: string
}