import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {
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




}
