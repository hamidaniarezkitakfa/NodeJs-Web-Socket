"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    type: 'postgres',
    username: 'postgres',
    host: '127.0.0.1',
    database: 'tiptop_db',
    password: 'root',
    port: 5432,
    synchronize: true,
    logging: true,
    entities: ['dist/**/*.entity{.ts,.js}'],
};
//# sourceMappingURL=orm.config.js.map