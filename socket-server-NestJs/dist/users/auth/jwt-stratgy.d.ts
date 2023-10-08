import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
declare const JwtCustomStrategy_base: new (...args: any[]) => any;
export declare class JwtCustomStrategy extends JwtCustomStrategy_base {
    private repo;
    constructor(repo: Repository<User>);
    validate(payload: {
        id: number;
    }): Promise<User[]>;
}
export {};
