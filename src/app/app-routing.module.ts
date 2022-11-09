import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PackageComponent } from './pages/package/package.component';
import { InvoiceComponent } from './pages/invoice/invoice.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { PaperInvoiceComponent } from './pages/paper-invoice/paper-invoice.component';


const routes: Routes = [
  {path:'home',component:HomeComponent} ,
  {path:'',redirectTo:'home' , pathMatch :'full'},
  {path: 'package', component: PackageComponent}, 
  {path: 'invoice', component: InvoiceComponent}, 
  {path: 'customer', component: CustomerComponent}, 
  {path: 'paper-invoice', component: PaperInvoiceComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
