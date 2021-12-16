import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [SearchPipe],
  imports: [CommonModule, FormsModule, MaterialModule, ReactiveFormsModule],
  exports: [FormsModule, MaterialModule, ReactiveFormsModule, SearchPipe],
})
export class SharedModule {}
