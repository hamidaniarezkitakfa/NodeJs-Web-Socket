"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users.service");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const user_entity_1 = require("../entities/user.entity");
let AuthService = class AuthService {
    constructor(userService, jwt) {
        this.userService = userService;
        this.jwt = jwt;
    }
    async register(createUserDto) {
        const { username, email, password } = createUserDto;
        console.log(createUserDto);
        const exists = await this.userService.findOneByEmail(email);
        console.log(exists);
        if (exists) {
            throw new common_1.UnauthorizedException('User alredy exist');
        }
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(password, salt);
        const user = new user_entity_1.User();
        user.username = username;
        user.password = hash;
        user.email = email;
        return this.userService.create(user);
    }
    async login(loginDto) {
        const { email, password } = loginDto;
        const user = await this.userService.findOneByEmail(email);
        if (!user) {
            throw new common_1.NotFoundException('User ont found');
        }
        const { id } = user;
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            const jwtPayload = { id };
            const jwtToken = await this.jwt.signAsync(jwtPayload, {
                expiresIn: '1d',
                algorithm: 'HS512',
            });
            return jwtToken;
        }
        else {
            throw new common_1.UnauthorizedException('error credential');
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map