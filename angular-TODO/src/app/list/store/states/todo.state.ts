import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Task } from 'src/app/models/task';

export interface TodoListState extends EntityState<Task> {}

export const todosAdapter: EntityAdapter<Task> = createEntityAdapter<Task>({
  selectId: (task: Task) => task._id,
  sortComparer: false,
});
