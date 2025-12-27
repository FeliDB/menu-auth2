import { LoginDto } from "../dtos/login.dto";
import { User } from "../user.entity";

export class LoginMapper{
    static toEntity(loginDTO: LoginDto): User{
        const user = new User();
        user.email = loginDTO.email;
        user.password = loginDTO.password;
        return user;
    }
}