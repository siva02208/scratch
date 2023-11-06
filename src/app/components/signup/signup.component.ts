import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user = {
    name: '',
    email: '',
    password: '',
    roles:''
  }

  constructor(private userdata: UserService,
    private router : Router) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.userdata.create(this.user).subscribe(
      (Response)=>{
        console.log(this.user);
        this.router.navigate([''])
      }
    )
  }
  

  

}

