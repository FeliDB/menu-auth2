import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthRepository } from "./auth.repository";
import { CreateUserDto } from "./dtos/create-user.dto";
import { User } from "./user.entity";
import { LoginDto } from "./dtos/login.dto";
import { JwtService } from "@nestjs/jwt";
import { TokenHelper } from "./helpers/token.helper";

@Injectable()
export class AuthService {
    constructor(
        private readonly authRepository: AuthRepository,
        private readonly jwtService: JwtService,
        private readonly tokenHelper: TokenHelper
    ) {}

    async registerService(createUserDTO: CreateUserDto): Promise<any> {
        try {
            const user = await this.authRepository.registerRepository(createUserDTO);
            return await this.tokenHelper.generateToken(user);
        } catch (error) {
            throw new Error('Error registering user: ' + error.message);
        }
    }

    async loginService(loginDTO: LoginDto): Promise<any> {
        const user = await this.authRepository.loginRepository(loginDTO);
        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }
        return await this.tokenHelper.generateToken(user);
    }

    async logOffService(userId: number): Promise<void> {
        try {
            await this.authRepository.logOffRepository(userId);
        } catch (error) {
            throw new Error('Error logging off user: ' + error.message);
        }
    }
}