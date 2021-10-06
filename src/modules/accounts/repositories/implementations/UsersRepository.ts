import { getRepository, Repository } from 'typeorm';

import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';

class UsersRepository implements IUsersRepository {
  private repostiory: Repository<User>;

  constructor() {
    this.repostiory = getRepository(User);
  }

  async create({
    id,
    name,
    email,
    driver_license,
    password,
    avatar,
  }: ICreateUserDTO): Promise<void> {
    const users = this.repostiory.create({
      id,
      name,
      email,
      driver_license,
      password,
      avatar,
    });

    await this.repostiory.save(users);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repostiory.findOne({ where: { email } });
    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repostiory.findOne(id);
    return user;
  }
}

export { UsersRepository };
