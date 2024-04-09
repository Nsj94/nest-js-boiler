import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { UserService } from './users.service';
import { UserController } from './users.controller';
import { usersProvider } from './users.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [...usersProvider, UserService],
})
export class UserModule {}
