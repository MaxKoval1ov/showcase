import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Update } from '@ngrx/entity';
import { Store } from '@ngrx/store';
import { Task } from 'src/app/models/task';
import { State } from '../../store';
import {
  deleteTodoRequest,
  updateTodoRequest,
} from '../../store/actions/todo-ui.actions';
import { TodoValidator } from '../../utils/todo.validators';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  task: Task | undefined;

  @Input()
  set todo(todo: Task) {
    this.task = todo;
    this.checkedField.setValue(todo.completed);
    this.textField.setValue(todo.title);
    this.checkedField.valueChanges.subscribe(state => {
      const update = {
        id:this.task!._id,
        changes:{
          completed:state
        }
      }
      this.store.dispatch(updateTodoRequest({newTask:update}));
    })
  }

  @Output() update: EventEmitter<Update<Task>> = new EventEmitter();

  @Output() delete: EventEmitter<string> = new EventEmitter();

  textField: FormControl;
  checkedField: FormControl;

  isEditMode: boolean = false;

  constructor(private store: Store<State>) {
    this.textField = new FormControl('', [
      Validators.required,
      TodoValidator.isBlank,
    ]);
    this.checkedField = new FormControl(false);
  }

  ngOnInit(): void {}

  editModeToggle(): void {
    this.isEditMode = !this.isEditMode;
  }

  deleteTask(id: string) {
    this.store.dispatch(deleteTodoRequest({ id }));
  }

  updateText() {
    if (this.textField.valid) {
      const update = {
        id: this.task!._id,
        changes: {
          title: this.textField.value,
        },
      };
      this.store.dispatch(updateTodoRequest({newTask:update}))
    }
  }
}
