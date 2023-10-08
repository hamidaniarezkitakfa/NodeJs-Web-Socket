import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './entities/message.entity';
export declare class MessagesService {
    messages: Message[];
    client: {};
    create(createMessageDto: CreateMessageDto): number;
    findAll(): Message[];
    findOne(id: number): string;
    join(message: string, senderID: string): unknown[];
    getClientName(senderID: string): any;
}
