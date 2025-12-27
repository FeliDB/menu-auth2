import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./user.entity";
import { CreateUserDto } from "./dtos/create-user.dto";
import { RegisterMapper } from "./mappers/register.mapper";

@Injectable()
export class UserRepository{
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>){}

    async findAttribute(attribute: string, value: any): Promise<User | null>{
        const user = await this.userRepository.findOne({ where: { [attribute]: value } });
        return user;
    }

    async registerRepository(createUserDTO: CreateUserDto): Promise<User>{
        const user = await RegisterMapper.toEntity(createUserDTO);
        return this.userRepository.save(user);
    }
}