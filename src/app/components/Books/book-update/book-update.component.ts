import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent {
  books=  {
    bookId:0,
    title: '',
    author: '',
    isbn: '',
    genre: '',
    publicationYear:'',
    publisher: '',
    totalCopies: ''
  }
  Id?:number 
constructor(private route: ActivatedRoute,
  private bookdata:BookService,private router:Router) {
    this.route.params.subscribe(params => {
      this.Id = +params['bookId']; 
    });
  }
    
  onSubmit(){
    console.log(this.Id)
    if(this.Id)
    this.books.bookId = this.Id;
    if(this.Id)
    this.bookdata.update(this.books,this.Id).subscribe(
      (Response)=>
      {
        console.log(this.books)
        this.router.navigate(['admin-dashboard'])
      }
    )
  }
}
