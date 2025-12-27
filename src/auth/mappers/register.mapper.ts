import { CreateUserDto } from "../dtos/create-user.dto";
import { User } from "../user.entity";
import * as bcrypt from 'bcrypt';

export class RegisterMapper{
    static async toEntity(createUserDTO: CreateUserDto): Promise<User>{
        const user = new User();
        user.username = createUserDTO.username;
        user.email = createUserDTO.email;
        user.password = await bcrypt.hash(createUserDTO.password, 10);
        user.role = 'user';
        return user;
    }
}