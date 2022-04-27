import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

const modules: any = [
  MatAutocompleteModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatLabel,
  MatCheckboxModule,
  FormsModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatButtonToggleModule,
];

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules],
})
export class MaterialModuleModule {}
