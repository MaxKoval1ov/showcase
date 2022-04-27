/// <reference types="mongoose/types/PipelineStage" />
/// <reference types="mongoose/types/Error" />
import { Document } from 'mongoose';
export declare type UserDocument = User & Document;
export declare class User {
    name: string;
    pass: string;
}
export declare const ToDoSchema: import("mongoose").Schema<Document<User, any, any>, import("mongoose").Model<Document<User, any, any>, any, any, any>, any, any>;
