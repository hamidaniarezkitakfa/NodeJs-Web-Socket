import { CreateUserDto } from './create-user.dto';
declare const SerializeLogginDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateUserDto>>;
export declare class SerializeLogginDto extends SerializeLogginDto_base {
    username: string;
    email: string;
}
export {};
