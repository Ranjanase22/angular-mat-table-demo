import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from './listview/parent/parent.component';
import { TableComponent } from './shared/table/table.component';
import { SearchComponent } from './shared/search/search.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ParentComponent, TableComponent, SearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'table';
}
