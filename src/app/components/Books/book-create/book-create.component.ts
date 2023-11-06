import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent {
  books=  {
    title: '',
    author: '',
    isbn: '',
    genre: '',
    publicationYear:'',
    publisher: '',
    totalCopies: ''
  }
  constructor(private bookdata: BookService,
    private router : Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.bookdata.create(this.books).subscribe(
      (Response)=>
      {
        console.log(this.books)
        this.router.navigate(['admin-dashboard'])
      }
    )
  }

}
