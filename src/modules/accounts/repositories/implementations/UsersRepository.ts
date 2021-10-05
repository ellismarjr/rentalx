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
    name,
    email,
    driver_license,
    password,
  }: ICreateUserDTO): Promise<void> {
    const users = this.repostiory.create({
      name,
      email,
      driver_license,
      password,
    });

    await this.repostiory.save(users);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repostiory.findOne({ where: { email } });
    return user;
  }
}

export { UsersRepository };
