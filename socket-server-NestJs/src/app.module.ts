import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { config } from './orm.config';
import { AppService } from './app.service';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [UsersModule, MessagesModule],
  controllers: [
    AppController,
    // JwtAuthGuard,
    // {
    //   provide: APP_PIPE,
    //   useValue: new ValidationPipe({
    //     whitelist: true,
    //   }),
    // },
  ],
  providers: [AppService],
})
export class AppModule {}
