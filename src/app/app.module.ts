import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ActivityCreateComponent } from './components/activityCreate/activityCreate.component';
import { ActivityEditComponent } from './components/activityEdit/activityEdit.component';
import { ActivityDeleteComponent } from './components/ActivityDelete/activityDelete.component';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { ActService } from './services/act.service';
import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'activityCreate', component: ActivityCreateComponent},
  { path: 'activityEdit/:id', component: ActivityEditComponent},
  { path: 'activityDelete/:id', component: ActivityDeleteComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    ProfileComponent,
    RegisterComponent,
    NotFoundComponent,
    ActivityCreateComponent,
    ActivityEditComponent,
    ActivityDeleteComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    ValidateService,
    AuthService,
    AuthGuard,
    ActService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
