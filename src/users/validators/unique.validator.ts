import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from "class-validator";
import { Injectable } from "@nestjs/common";
import { UserRepository } from "../user.repository";

@ValidatorConstraint({ name: 'IsUnique', async: true })
@Injectable()
export class IsUniqueValidator implements ValidatorConstraintInterface {
    constructor (private readonly userRepository: UserRepository) {}

    async validate(value: any, args: ValidationArguments): Promise<boolean> {
        const [attribute] = args.constraints;
        const user = await this.userRepository.findAttribute(attribute, value);
        return !user;
    }

    defaultMessage(args: ValidationArguments): string {
        return `The ${args.property} must be unique.`;
    }
}
