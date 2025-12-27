import { registerDecorator, ValidationOptions } from 'class-validator';
import { IsUniqueValidator } from '../validators/unique.validator';

export function IsUnique(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [propertyName],
      validator: IsUniqueValidator,
    });
  };
}