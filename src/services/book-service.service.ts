import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  bookList = [
    {
      name: 'Ikigai',
      price: 'Rs. 349.00',
      image: 'https://m.media-amazon.com/images/I/51T8OXMiB5L._SY445_SX342_.jpg',
      description: "It's the Japanese word for ‘a reason to live’ or ‘a reason to jump out of bed in the morning’ "
    },
    {
      name: 'New Moon',
      price: 'Rs. 1249.00',
      image: 'https://m.media-amazon.com/images/I/81KvBJj7cEL._SY385_.jpg',
      description: "I stuck my finger under the edge of the paper and jerked it under the tape. 'Shoot,' I muttered when ..."
    },
    {
      name: '8 RULES OF LOVE',
      price: 'Rs. 327.00',
      image: 'https://m.media-amazon.com/images/I/71jYBAFwMPL._SY385_.jpg',
      description: 'Nobody sits us down and teaches us how to love. So we’re often thrown into relationships with nothing but romance movies and pop culture to help us muddle through. Until now.'
    },
    {
      name: 'The Twilight Saga: The Official Illustrated Guide',
      price: 'Rs. 1549.00',
      image: 'https://m.media-amazon.com/images/I/71UxdywSLvL._SY385_.jpg',
      description: 'The Twilight Saga, provide readers with everything they need to further explore the unforgettable world Stephenie ...'
    }
  ]

  getBooksList(){
    return this.bookList;
  }
}
