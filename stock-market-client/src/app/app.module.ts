import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './common/signup/signup.component';
import { SigninComponent } from './common/signin/signin.component';
import { FooterComponent } from './common/footer/footer.component';
import {AdminComponent} from './admin/admin/admin.component';
import { UploadComponent } from './admin/upload/upload.component';
import { ManageCompanyComponent } from './admin/manage-company/manage-company.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CompanyComponent } from './admin/manage-company/company/company.component';
import { NewCompanyComponent } from './admin/manage-company/new-company/new-company.component';
import { ErrorComponent } from './common/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    FooterComponent,
    AdminComponent,
    UploadComponent,
    ManageCompanyComponent,
    CompanyComponent,
    NewCompanyComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
