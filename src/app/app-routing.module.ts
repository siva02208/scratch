import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminDashboardComponent } from './components/dashboard/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './components/dashboard/user-dashboard/user-dashboard.component';
import { BookCreateComponent } from './components/Books/book-create/book-create.component';
import { BookUpdateComponent } from './components/Books/book-update/book-update.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'admin-dashboard',component:AdminDashboardComponent},
  {path:'user-dashboard',component:UserDashboardComponent},
  {path:'book-create',component:BookCreateComponent},
  {path:'book-update/:bookId',component:BookUpdateComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
