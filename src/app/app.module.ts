import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { ArchitectComponent } from './pages/aand-c/architect/architect.component';

//----------------------------------firestore----------------------------------------
import{AngularFireAuthModule} from '@angular/fire/auth';
import{AngularFirestoreModule}from '@angular/fire/firestore';
import{AngularFireModule} from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
//=-=====================================================================================
import{environment}from '../environments/environment';
import { ProfileupdateComponent } from './pages/aand-c/profileupdate/profileupdate.component';
import { EmailValidatorDirective } from './email-validator.directive';
import { TypeComponent } from './pages/type/type.component';
import { WaitingComponent } from './pages/aand-c/waiting/waiting.component';
import { ContractorComponent } from './pages/aand-c/contractor/contractor.component';
import { AandCComponent } from './pages/aand-c/aand-c.component';
import{ProfilemanagementComponent}from '../app/pages/aand-c/profilemanagement/profilemanagement.component';
import { ContComponent } from './pages/dashboard/cont/cont.component';
import { CustComponent } from './pages/dashboard/cust/cust.component';
import { ArchComponent } from './pages/dashboard/arch/arch.component';

import { AprovedComponent } from './pages/dashboard/aproved/aproved.component';
import { DisaproveComponent } from './pages/dashboard/disaprove/disaprove.component';
import { PendingComponent } from './pages/dashboard/pending/pending.component';
import { AddcontractorComponent } from './pages/dashboard/addcontractor/addcontractor.component';
import { AddprojectComponent } from './pages/aand-c/addproject/addproject.component';
import { ViewprofileComponent } from './pages/aand-c/viewprofile/viewprofile.component';
import { HomeComponent } from './pages/home/home.component';
import { AdddataComponent } from './pages/dashboard/adddata/adddata.component';
import { DealareaComponent } from './pages/aand-c/dealarea/dealarea.component';
import { ArchitectareaComponent } from './pages/aand-c/architectarea/architectarea.component';
import { StarReviewComponent } from './pages/star-review/star-review.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    CustomerComponent,
    ArchitectComponent,
   
    ProfileupdateComponent,
    EmailValidatorDirective,
    TypeComponent,
    WaitingComponent,
    ContractorComponent,
    ProfilemanagementComponent,
    AandCComponent,
    ContComponent,
    CustComponent,
    ArchComponent,
  
    AprovedComponent,
    DisaproveComponent,
    PendingComponent,
    AddcontractorComponent,
    AddprojectComponent,
    ViewprofileComponent,
    HomeComponent,
    AdddataComponent,
    DealareaComponent,
    ArchitectareaComponent,
    StarReviewComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.fireConfig),
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'',redirectTo:'login',pathMatch:'full'},
      {path:'login',component:LoginComponent},
      {path:'signup',component:SignupComponent},
      {path:'type',component:TypeComponent},
      {path:'home',component:HomeComponent},
      {path:'profileview/:id',component:ViewprofileComponent},
      {path:'aandc',component:AandCComponent},
        {path:'profileupdate',component:ProfileupdateComponent},
        {path:'waiting',component:WaitingComponent},
        {path:'architect',component:ArchitectComponent},
        {path:'star',component:StarReviewComponent},
        {path:'star/:id',component:StarReviewComponent},
        {path:'contractor',component:ContractorComponent},
        {path:'dealarea',component:DealareaComponent},
        {path:'architectarea',component:ArchitectareaComponent},
        {path:'addproject',component:AddprojectComponent},
      {path:'profilemanagement',component:ProfilemanagementComponent},
      {path:'customer',component:CustomerComponent},
      {path:'dashboard',component:DashboardComponent,children:[
        {path:'cust',component:CustComponent},
        {path:'arch',component:ArchComponent},
        {path:'adddata',component:AdddataComponent},
        {path:'cont',component:ContComponent},
        {path:'aproved',component:AprovedComponent},
        {path:'disaprove',component:DisaproveComponent},
        {path:'pending',component:PendingComponent},
        {path:'addcontractor',component:AddcontractorComponent}
      ]}
      

     
    ])],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
