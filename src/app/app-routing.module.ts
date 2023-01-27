import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PackageComponent } from './pages/package/package.component';
import { InvoiceComponent } from './pages/invoice/invoice.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { PaperInvoiceComponent } from './pages/paper-invoice/paper-invoice.component';
import { UsageComponent } from './pages/usage/usage.component';
import { LoginHistoryComponent } from './pages/login-history/login-history.component';
import { ReceiptComponent } from './pages/receipt/receipt.component';
import { PackageUpdateComponent } from './pages/package-update/package-update.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
  {path:'login',component:LoginComponent} ,
  {path:'home',component:HomeComponent} ,
  {path: 'package', component: PackageComponent}, 
  {path: 'package-update', component: PackageUpdateComponent}, 
  {path: 'invoice', component: InvoiceComponent}, 
  {path: 'receipt', component: ReceiptComponent}, 
  {path: 'customer', component: CustomerComponent}, 
  {path: 'paper-invoice', component: PaperInvoiceComponent}, 
  {path: 'usage', component: UsageComponent}, 
  {path: 'login-history', component: LoginHistoryComponent}, 

  {path:'',redirectTo:'login' , pathMatch :'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
