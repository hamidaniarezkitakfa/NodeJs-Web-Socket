import { OnGatewayDisconnect } from '@nestjs/websockets';
import { Server } from 'socket.io';
export declare class ChatGateway implements OnGatewayDisconnect {
    server: Server;
    users: any[];
    handleNewUser(data: any): void;
    handleMessage(data: any): void;
    handleDisconnect(client: any): void;
}
