import { Module } from '@nestjs/common';
<<<<<<< HEAD
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './entities/message.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Message]), UsersModule],
  controllers: [MessagesController],
  providers: [MessagesService],
=======
import { MessageProviderTsService } from './providers/message-provider.ts.service';

@Module({
  providers: [MessageProviderTsService]
>>>>>>> main
})
export class MessagesModule {}
