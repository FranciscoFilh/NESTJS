import { IsOptional, IsString } from "class-validator"

export class CreateControlProductionDTO {
    @IsString()
    name: string
    
    @IsString()
    @IsOptional()
    brand?: string
    
    @IsString()
    @IsOptional()
    date_manufacturing?: string
    
    @IsString()
    @IsOptional()
    validity?: string
}