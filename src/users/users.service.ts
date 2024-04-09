import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  Logger,
} from '@nestjs/common';
import { providers } from 'src/constants/providers';
import { Repository } from 'typeorm';
import { CreateUserDto } from './users.dto';
import { UserEntity } from './users.entity';

@Injectable()
export class UserService {
  private logger = new Logger('User Service');
  constructor(
    @Inject(providers.User)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async getAllUsers(): Promise<UserEntity[]> {
    this.logger.log('Fetching all users');
    try {
      return this.usersRepository.find();
    } catch (error) {
      throw new HttpException('Something went wrong', HttpStatus.BAD_REQUEST);
    }
  }

  async createUser(user: CreateUserDto): Promise<CreateUserDto> {
    this.logger.log('Creating a user');
    try {
      const newUser = this.usersRepository.create(user);
      return this.usersRepository.save(newUser);
    } catch (error) {
      this.logger.error(error.message);
      throw new HttpException('Something went wrong', HttpStatus.BAD_REQUEST);
    }
  }
}
