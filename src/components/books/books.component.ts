import { CUSTOM_ELEMENTS_SCHEMA, Component, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { BookServiceService } from '../../services/book-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [MatButtonModule,MatCardModule, CommonModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BooksComponent {
booksService: BookServiceService = inject(BookServiceService);
bookList: any;
ngOnInit(){
    this.bookList = this.booksService.getBooksList();
}
}
