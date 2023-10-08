"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesService = void 0;
const common_1 = require("@nestjs/common");
let MessagesService = class MessagesService {
    constructor() {
        this.messages = [
            { id: 1, message: 'hello', senderID: 1, receiverID: 1 },
        ];
        this.client = {};
    }
    create(createMessageDto) {
        return this.messages.push(createMessageDto);
    }
    findAll() {
        return this.messages;
    }
    findOne(id) {
        return `This action returns a #${id} message`;
    }
    join(message, senderID) {
        this.client[senderID] = message;
        return Object.values(this.client);
    }
    getClientName(senderID) {
        return this.client[senderID];
    }
};
MessagesService = __decorate([
    (0, common_1.Injectable)()
], MessagesService);
exports.MessagesService = MessagesService;
//# sourceMappingURL=messages.service.js.map