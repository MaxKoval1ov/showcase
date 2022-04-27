/// <reference types="mongoose/types/PipelineStage" />
/// <reference types="mongoose/types/Error" />
import { Model } from 'mongoose';
import { CreateUserTokenDto } from './dto/create-user-token.dto';
import { IUserToken } from './interfaces/user-token.interface';
export declare class TokenService {
    private readonly tokenModel;
    constructor(tokenModel: Model<IUserToken>);
    create(CreateUserTokenDto: CreateUserTokenDto): Promise<IUserToken>;
    delete(uId: string, token: string): Promise<{
        acknowledged?: boolean;
        deletedCount?: number;
    }>;
    deleteAll(uId: string): Promise<{
        acknowledged?: boolean;
        deletedCount?: number;
    }>;
    exists(uId: string, token: string): Promise<Pick<import("mongoose").Document<IUserToken, any, any>, "_id">>;
}
