import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {

  books?:any[];
  userId:any;

  constructor(private router:Router,private bookdata:BookService) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');
    console.log(this.userId);
    
    // Initialize an array to store the filtered tasks
    
    this.bookdata.getall().subscribe(
      (response: any) => {
        this.books = response;
        console.log(this.books);
      }
    );
    }

    onUpdate(bookId:number){
      this.router.navigate(['book-update',bookId])
    }
    onDelete(bookid:number){
      if(bookid)
      this.bookdata.delete(bookid).subscribe(
      (Response)=>
      console.log("book deleted")
    )
    }
}
