import { CreateUserDto } from './create-user.dto';
declare const LogginDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateUserDto>>;
export declare class LogginDto extends LogginDto_base {
    email: string;
    password: string;
}
export {};
