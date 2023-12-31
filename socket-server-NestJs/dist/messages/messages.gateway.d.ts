import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { Server, Socket } from 'socket.io';
export declare class MessagesGateway {
    private readonly messagesService;
    server: Server;
    constructor(messagesService: MessagesService);
    create(createMessageDto: CreateMessageDto): Promise<number>;
    findAll(): import("./entities/message.entity").Message[];
    joinRoom(message: string, client: Socket): unknown[];
    typing(isTyping: boolean, client: Socket): Promise<void>;
}
