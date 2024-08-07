import { Injectable, Inject } from '@nestjs/common';
import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    await this.cacheManager.del('users'); // Invalidate cache
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    const cachedUsers = await this.cacheManager.get<User[]>('users');
    if (cachedUsers) {
      return cachedUsers;
    }

    const users = await this.userModel.find().exec();
    await this.cacheManager.set('users', users, 3600 );
    return users;
  }

  async findOne(id: string): Promise<User | null> {
    const cachedUser = await this.cacheManager.get<User>(`user:${id}`);
    if (cachedUser) {
      return cachedUser;
    }

    const user = await this.userModel.findById(id).exec();
    if (user) {
      await this.cacheManager.set(`user:${id}`, user,  3600 );
    }
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User | null> {
    const updatedUser = await this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();
    if (updatedUser) {
      await this.cacheManager.set(`user:${id}`, updatedUser, 3600 );
    }
    return updatedUser;
  }

  async remove(id: string): Promise<User | null> {
    const deletedUser = await this.userModel.findByIdAndDelete(id).exec();
    await this.cacheManager.del(`user:${id}`);
    return deletedUser;
  }
}
