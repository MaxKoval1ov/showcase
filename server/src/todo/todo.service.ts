import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ToDo, ToDoDocument } from 'src/schemas/todo.schema';
import { Model } from 'mongoose';
import { createToDoDto, updateToDoDto } from './toDoDto';

@Injectable()
export class TodoService {
  constructor(@InjectModel(ToDo.name) private toDoModel: Model<ToDoDocument>) {}

  async getAll(): Promise<ToDo[]> {
    return this.toDoModel.find().exec();
  }

  async getPage(page: number, limit: number): Promise<ToDo[]> {
    return this.toDoModel
      .find()
      .skip((page - 1) * limit)
      .limit(limit);
  }

  async getByUserId(userId: string): Promise<ToDo[]> {
    console.log(userId, typeof userId);
    return this.toDoModel.find({ completed: false });
  }

  async getById(id: string): Promise<ToDo> {
    return this.toDoModel.findById(id);
  }

  async remove(id: string): Promise<ToDo> {
    return this.toDoModel.findByIdAndRemove(id);
  }

  async update(id: string, toDoDto: updateToDoDto): Promise<ToDo> {
    return this.toDoModel.findByIdAndUpdate(id, toDoDto, { new: true });
  }

  async create(toDoDto: createToDoDto): Promise<ToDo> {
    console.log(toDoDto);
    const newToDo = new this.toDoModel(toDoDto);
    return newToDo.save();
  }
}
