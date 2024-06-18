import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { QueryComponent } from './query/query.component';
import { ReviewComponent } from './review/review.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent,QueryComponent, ReviewComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
