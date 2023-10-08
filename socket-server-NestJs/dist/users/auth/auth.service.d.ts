import { LogginDto } from '../dto/login-user.dto';
import { UsersService } from '../users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entities/user.entity';
export declare class AuthService {
    private readonly userService;
    private jwt;
    constructor(userService: UsersService, jwt: JwtService);
    register(createUserDto: CreateUserDto): Promise<User>;
    login(loginDto: LogginDto): Promise<string>;
}
