import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule  } from '@angular/router';
import { FormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { SetpassComponent } from './setpass/setpass.component';
import { AdminComponent } from './admin/admin.component';
import { GetuserComponent } from './admin/getuser/getuser.component';
import { BookingComponent } from './booking/booking.component';
import { BookedslotsComponent } from './admin/bookedslots/bookedslots.component';
import { GetbookedlistComponent } from './getbookedlist/getbookedlist.component';
import { GetlistComponent } from './admin/getlist/getlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,

    LoginComponent,
    SignupComponent,
    ProfileComponent,
    UserdashboardComponent,
    ForgetpassComponent,
    SetpassComponent,
    AdminComponent,
    GetuserComponent,
    BookingComponent,
    BookedslotsComponent,
    GetbookedlistComponent,
    GetlistComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'home',component:HomeComponent },
     
      {path:'forgot',component:ForgetpassComponent},
      {path:'setpass',component:SetpassComponent},
      {path: 'about',component:AboutComponent },
      {path: 'contact',component:ContactComponent },
      {path: 'login',component:LoginComponent},
      {path: 'register',component:SignupComponent},
      {path: 'profile',component:ProfileComponent},
      {path: 'userdashboard',component:UserdashboardComponent},
      {path: 'admin',component:AdminComponent},
      {path: 'admin/getuser',component:GetuserComponent},
      {path: 'admin/bookedslots',component:BookedslotsComponent},
      {path: 'admin/getlist',component:GetlistComponent},
      {path: 'booking',component:BookingComponent},
      {path: 'getbookedlist',component:GetbookedlistComponent}

    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


