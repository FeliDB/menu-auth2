import { IsArray, IsEmail, IsString, IsStrongPassword, minLength, MinLength } from "class-validator";
import { IsUnique } from "../decorators/unique.decorator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @IsString()
    @IsUnique()
    @MinLength(4)
    @ApiProperty({ example: 'john_doe', description: 'The username of the user' })
    username: string;

    
    @IsEmail()
    @IsUnique()
    @ApiProperty({ example: 'john@example.com', description: 'The email of the user' })
    email: string;

    @IsString()
    @ApiProperty({ example: 'StrongP@ssw0rd!', description: 'The password of the user' })
    @IsStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
    })
    password: string;
}