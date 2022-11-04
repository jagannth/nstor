import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { LoginComponent } from './components/login/login.component';
import { RentalComponent } from './components/rental/rental.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path: '',   redirectTo: '/laptops', pathMatch: 'full' },
  {path:'login', component:LoginComponent},
  {path:'laptops', component:HomeComponent},
  {path:'users', component:UsersComponent},
  {path:'rental', component:RentalComponent},
  {path:'invoice', component:InvoiceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
