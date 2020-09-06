import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './common/signin/signin.component';
import { SignupComponent } from './common/signup/signup.component';
import { UploadComponent } from './admin/upload/upload.component';
import { ManageCompanyComponent } from './admin/manage-company/manage-company.component';

const routes: Routes = [
  {path:'',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'upload',component:UploadComponent},
  {path:'manage-company',component:ManageCompanyComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
