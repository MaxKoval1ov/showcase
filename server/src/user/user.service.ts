import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { IUser } from './interfaces/user.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  private readonly saltRounds = 10;

  constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {}

  async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(this.saltRounds);
    return await bcrypt.hash(password, salt);
  }

  async create(createUserDto: CreateUserDto): Promise<IUser> {
    const hash = await this.hashPassword(createUserDto.password);
    const createdUser = new this.userModel(
      Object.assign(createUserDto, { password: hash }),
    );
    return await createdUser.save();
  }

  async find(id: string): Promise<IUser> {
    return await this.userModel.findById(id).exec();
  }

  async update(id: string, payload: Partial<IUser>) {
    return this.userModel.updateOne({ _id: id }, payload);
  }

  async findByName(name: string): Promise<IUser> {
    return await this.userModel.findOne({ name }).exec();
  }
}
