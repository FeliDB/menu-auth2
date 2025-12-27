import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from "class-validator";
import { Injectable } from "@nestjs/common";
import { AuthRepository } from "../auth.repository";

@ValidatorConstraint({ name: 'IsUnique', async: true })
@Injectable()
export class IsUniqueValidator implements ValidatorConstraintInterface {
    constructor (private readonly authRepository: AuthRepository) {}

    async validate(value: any, args: ValidationArguments): Promise<boolean> {
        const [attribute] = args.constraints;
        const user = await this.authRepository.findAttribute(attribute, value);
        return !user;
    }

    defaultMessage(args: ValidationArguments): string {
        return `The ${args.property} must be unique.`;
    }
}
