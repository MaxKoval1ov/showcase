import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserTokenDto } from './dto/create-user-token.dto';
import { IUserToken } from './interfaces/user-token.interface';

@Injectable()
export class TokenService {
  constructor(
    @InjectModel('Token') private readonly tokenModel: Model<IUserToken>,
  ) {}

  async create(CreateUserTokenDto: CreateUserTokenDto): Promise<IUserToken> {
    const userToken = new this.tokenModel(CreateUserTokenDto);
    return await userToken.save();
  }

  async delete(
    uId: string,
    token: string,
  ): Promise<{ acknowledged?: boolean; deletedCount?: number }> {
    return await this.tokenModel.deleteOne({ uId, token });
  }

  async deleteAll(
    uId: string,
  ): Promise<{ acknowledged?: boolean; deletedCount?: number }> {
    return await this.tokenModel.deleteMany({ uId });
  }

  async exists(uId: string, token: string) {
    return await this.tokenModel.exists({ uId, token });
  }
}
