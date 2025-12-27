import { IsArray, IsEmail, IsString, IsStrongPassword, minLength, MinLength } from "class-validator";
import { IsUnique } from "../decorators/unique.decorator";

export class CreateUserDto {
    @IsString()
    @IsUnique()
    @MinLength(4)
    username: string;

    
    @IsEmail()
    @IsUnique()
    email: string;

    @IsString()
    @IsStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
    })
    password: string;
}