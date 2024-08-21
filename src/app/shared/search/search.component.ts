import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  searchText: string = '';
  @Output() searchTextChange = new EventEmitter<string>();

  onSearchTextChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    console.log('input val:', inputElement.value);
    this.searchTextChange.emit(inputElement.value);
  }
}
