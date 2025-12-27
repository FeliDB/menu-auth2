import { Injectable } from "@nestjs/common";

@Injectable()
export class IdPipe {
    transform(value: any) {
        const id = parseInt(value, 10);
        if (isNaN(id) || id <= 0) {
            throw new Error('Invalid ID format');
        }
        return id;
    }
}