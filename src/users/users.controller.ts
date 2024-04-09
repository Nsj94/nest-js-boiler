import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './users.dto';
import { UserEntity } from './users.entity';
import { UserService } from './users.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() user: CreateUserDto): Promise<CreateUserDto> {
    return await this.userService.createUser(user);
  }

  @Get()
  async getAllUsers(): Promise<UserEntity[]> {
    return await this.userService.getAllUsers();
  }
}
