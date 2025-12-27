import { Body, Controller, Param, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dtos/create-user.dto";
import { LoginDto } from "./dtos/login.dto";
import { IdPipe } from "./pipes/id.pipe";

@Controller('auth')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('register')
    async register(@Body() createUserDTO: CreateUserDto) {
        return this.userService.registerService(createUserDTO);
    }

    @Post('login')
    async login(@Body() loginDTO: LoginDto) {
        return this.userService.loginService(loginDTO);
    }

    @Post('logoff/:userId')
    async logOff(@Param('userId', IdPipe) userId: number) {
        return this.userService.logOffService(userId);
    }
}