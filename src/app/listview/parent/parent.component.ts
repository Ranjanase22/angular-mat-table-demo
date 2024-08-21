import { Component } from '@angular/core';
import { SearchComponent } from '../../shared/search/search.component';
import { TableComponent } from '../../shared/table/table.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [SearchComponent, TableComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
  searchText: string = '';

  updateSearchText(newSearchText: string) {
    this.searchText = newSearchText;
  }
}
