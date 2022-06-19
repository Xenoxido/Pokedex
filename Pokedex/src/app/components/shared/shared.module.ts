import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './paginator/paginator.component';
import { ConvertTypesPipe } from './convert-types.pipe';



@NgModule({
  declarations: [PaginatorComponent, ConvertTypesPipe],
  imports: [
    CommonModule
  ],
  exports: [PaginatorComponent, ConvertTypesPipe]
})
export class SharedModule { }
