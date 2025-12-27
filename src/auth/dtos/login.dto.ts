import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class LoginDto{
    @IsString()
    @ApiProperty({ example: 'john@example.com', description: 'The email of the user' })
    email: string;

    @IsString()
    @ApiProperty({ example: 'StrongP@ssw0rd!', description: 'The password of the user' })
    password: string;
}