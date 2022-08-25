import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './dto/users.dto';
import { User } from './entity/create.user';

@Injectable()
export class UsersService {
  private users: UserDto[] = [];

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  create(user: User) {
    this.usersRepository.create(user);
    this.usersRepository.insert(user);
  }

  async findAll(): Promise<User[]> {
    // buscará todos os elementos do bd
    return await this.usersRepository.find();
  }

  async findOne(id: string): Promise<User> {
    // const user = this.users.filter((value) => value.id === id);
    return await this.usersRepository.findOneBy({ id });
  }

  async remove(id: string) {
    // const users_remove = this.users.filter((value) => value.id !== id);
    // this.users = users_remove;
    return await this.usersRepository.delete(id);
  }

  //atualizar na lista
  async update(UserToUpdate: UserDto, id: string): Promise<User> {
    const user = await this.usersRepository.findOneBy({ id });
    const updated = Object.assign(UserToUpdate, user);

    return await this.usersRepository.save(updated);

  }
}
