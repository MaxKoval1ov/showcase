import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ToDoDocument = ToDo & Document;

@Schema()
export class ToDo {
  @Prop()
  userId: string;

  @Prop()
  title: string;

  @Prop()
  completed: boolean;
}

export const ToDoSchema = SchemaFactory.createForClass(ToDo);
