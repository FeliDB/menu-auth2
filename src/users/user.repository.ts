import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./user.entity";

@Injectable()
export class UserRepository{
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>){}

    async findAttribute(attribute: string, value: any): Promise<User | null>{
        const user = await this.userRepository.findOne({ where: { [attribute]: value } });
        return user;
    }
}