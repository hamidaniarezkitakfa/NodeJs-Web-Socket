import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Message } from './entities/message.entity';

@Injectable()
export class MessagesService {
  messages: Message[] = [
    { id: 1, message: 'hello', senderID: 1, receiverID: 1 },
  ];

  client = {};
  create(createMessageDto: CreateMessageDto) {
    return this.messages.push(createMessageDto);
  }

  findAll() {
    return this.messages;
  }

  findOne(id: number) {
    return `This action returns a #${id} message`;
  }

  join(message: string, senderID: string) {
    this.client[senderID] = message;

    return Object.values(this.client);
  }

  getClientName(senderID: string) {
    return this.client[senderID];
  }
}
