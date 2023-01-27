import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';

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
import { UsageComponent } from './pages/usage/usage.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoginHistoryComponent } from './pages/login-history/login-history.component';
import { ReceiptComponent } from './pages/receipt/receipt.component';
import { PackageUpdateComponent } from './pages/package-update/package-update.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PackageComponent,
    NavComponent,
    InvoiceComponent,
    HeaderComponent,
    CustomerComponent,
    PaperInvoiceComponent,
    UsageComponent,
    FooterComponent,
    LoginHistoryComponent,
    ReceiptComponent,
    PackageUpdateComponent,
    LoginComponent
  ],
  imports: [
    NgxEchartsModule,

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
