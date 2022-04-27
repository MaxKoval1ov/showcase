/// <reference types="mongoose/types/PipelineStage" />
/// <reference types="mongoose/types/Error" />
import { Document } from 'mongoose';
export declare type ToDoDocument = ToDo & Document;
export declare class ToDo {
    userId: string;
    title: string;
    completed: boolean;
}
export declare const ToDoSchema: import("mongoose").Schema<Document<ToDo, any, any>, import("mongoose").Model<Document<ToDo, any, any>, any, any, any>, any, any>;
