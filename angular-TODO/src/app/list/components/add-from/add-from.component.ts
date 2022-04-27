import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Task } from 'src/app/models/task';

import { State } from '../../store';
import { addTodoRequest } from '../../store/actions/todo-ui.actions';
import { TodoValidator } from '../../utils/todo.validators';

@Component({
  selector: 'app-add-from',
  templateUrl: './add-from.component.html',
  styleUrls: ['./add-from.component.scss'],
})
export class AddFromComponent implements OnInit {
  text: FormControl;

  constructor(private store: Store<State>) {
    this.text = new FormControl('TASK', [
      Validators.required,
      TodoValidator.isBlank,
    ]);
  }

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem() {
    if(this.text.valid)
    {
      const newTask = new Task(1, this.text.value, false);
      this.store.dispatch(addTodoRequest({ todo: newTask }));
    }
  }

  ngOnInit(): void {}
}
