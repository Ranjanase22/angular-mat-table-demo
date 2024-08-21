import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SearchComponent } from './search/search.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [SearchComponent, TableComponent],
  imports: [CommonModule, FormsModule, MatTableModule, MatPaginatorModule],
  exports: [SearchComponent, TableComponent],
})
export class SharedModule {}
