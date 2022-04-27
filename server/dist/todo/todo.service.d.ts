import { ToDo, ToDoDocument } from 'src/schemas/todo.schema';
import { Model } from 'mongoose';
import { createToDoDto, updateToDoDto } from './toDoDto';
export declare class TodoService {
    private toDoModel;
    constructor(toDoModel: Model<ToDoDocument>);
    getAll(): Promise<ToDo[]>;
    getPage(page: number, limit: number): Promise<ToDo[]>;
    getByUserId(userId: string): Promise<ToDo[]>;
    getById(id: string): Promise<ToDo>;
    remove(id: string): Promise<ToDo>;
    update(id: string, toDoDto: updateToDoDto): Promise<ToDo>;
    create(toDoDto: createToDoDto): Promise<ToDo>;
}
