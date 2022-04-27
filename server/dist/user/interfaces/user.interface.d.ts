import { Document } from 'mongoose';
export declare class IUser extends Document {
    readonly name: string;
    readonly password: string;
}
