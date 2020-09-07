import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './common/signin/signin.component';
import { SignupComponent } from './common/signup/signup.component';
import { UploadComponent } from './admin/upload/upload.component';
import { ManageCompanyComponent } from './admin/manage-company/manage-company.component';
import { NewCompanyComponent } from './admin/manage-company/new-company/new-company.component';
import { ErrorComponent } from './common/error/error.component';

const routes: Routes = [ 
  {path:'',component:ErrorComponent},
  {path:'signin',component:SigninComponent},
  {path:'signin/signup',component:SignupComponent},
  {path:'upload',component:UploadComponent},
  {path:'manage-company',component:ManageCompanyComponent},
  {path:'manage-company/new-company',component:NewCompanyComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
