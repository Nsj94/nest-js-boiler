import { DataSource } from 'typeorm';
import { UserEntity } from './users.entity';
import { providers } from 'src/constants/providers';

export const usersProvider = [
  {
    provide: providers.User,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(UserEntity),
    inject: ['DATA_SOURCE'],
  },
];
