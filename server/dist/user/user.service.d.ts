import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { IUser } from './interfaces/user.interface';
export declare class UserService {
    private readonly userModel;
    private readonly saltRounds;
    constructor(userModel: Model<IUser>);
    hashPassword(password: string): Promise<string>;
    create(createUserDto: CreateUserDto): Promise<IUser>;
    find(id: string): Promise<IUser>;
    update(id: string, payload: Partial<IUser>): Promise<import("mongodb").UpdateResult>;
    findByName(name: string): Promise<IUser>;
}
