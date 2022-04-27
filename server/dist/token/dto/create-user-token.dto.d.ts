import * as mongoose from 'mongoose';
export declare class CreateUserTokenDto {
    token: string;
    uId: mongoose.Types.ObjectId;
    expireAt: string;
}
