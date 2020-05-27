import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './views/home/home.component';
import { EventsComponent } from './views/events/events.component';
import { PrayerComponent } from './views/prayer/prayer.component';
import { ProfileComponent } from './views/profile/profile.component';
import { AuthGuard } from './auth/auth.guard';
import { EventCreateComponent } from './views/event-create/event-create.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'events', component: EventsComponent },
  { path: 'prayer', component: PrayerComponent },
  { path: 'profile', component: ProfileComponent , canActivate: [AuthGuard]},
  { path: 'profile', component: ProfileComponent},
  // temporarily added this route so I can test it
  { path: 'new-event', component: EventCreateComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
