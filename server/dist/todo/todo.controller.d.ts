import { ToDo } from 'src/schemas/todo.schema';
import { TodoService } from './todo.service';
import { createToDoDto, updateToDoDto } from './toDoDto';
export declare class TodoController {
    private readonly appService;
    constructor(appService: TodoService);
    getById(id: string): Promise<ToDo>;
    getTodosById(id: string): Promise<ToDo[]>;
    getPage(page: any, limit: any): Promise<ToDo[]>;
    getAll(): Promise<ToDo[]>;
    create(createToDo: createToDoDto): Promise<ToDo>;
    remove(id: string): Promise<ToDo>;
    update(updateToDo: updateToDoDto, id: string): Promise<ToDo>;
    patch(post: updateToDoDto, id: string): Promise<ToDo>;
}
