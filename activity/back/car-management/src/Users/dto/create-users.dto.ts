import { IsEmail, IsString, IsStrongPassword } from "class-validator";

export class CreateUserDTO {
    @IsString()
    name: string

    @IsEmail()
    email: string

    @IsStrongPassword({
        minLength: 6,
        minUppercase: 1,
        minSymbols: 0,
        minLowercase: 1,
        minNumbers: 0,
    }, {message: "A senha deve ter pelo menos 6 caracteres e conter uma letra maiuscula e uma letra minúscula"})
    password: string
}