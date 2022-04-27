import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ToDo, ToDoSchema } from 'src/schemas/todo.schema';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ToDo.name, schema: ToDoSchema }]),
  ],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
