import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PackageComponent } from './pages/package/package.component';
import { NavComponent } from './pages/nav/nav.component';
import { InvoiceComponent } from './pages/invoice/invoice.component';
import { HeaderComponent } from './pages/header/header.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { PaperInvoiceComponent } from './pages/paper-invoice/paper-invoice.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PackageComponent,
    NavComponent,
    InvoiceComponent,
    HeaderComponent,
    CustomerComponent,
    PaperInvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
