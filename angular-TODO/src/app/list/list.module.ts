import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { HoverDirective } from '../directives/hover.directive';
import { OrderByPipe } from '../pipes/order-by.pipe';
import { AddFromComponent } from './components/add-from/add-from.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoComponent } from './components/todo/todo.component';
import { reducers } from './store';
import { TodoEffect } from './store/effects/todo.effect';





@NgModule({
  declarations: [
    TodoListComponent,
    AddFromComponent,
    TodoComponent,
    HoverDirective,
    OrderByPipe,
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forFeature([TodoEffect]),
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
  ],
  exports:[
    TodoListComponent
  ]
})
export class ListModule { }
