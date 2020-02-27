import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './userModule/login/login.component';
import { RegistrationComponent } from './userModule/registration/registration.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AddMeetingModalComponent } from './calendar/add-meeting-modal/add-meeting-modal.component';
import { UpdateMeetingModalComponent } from './calendar/update-meeting-modal/update-meeting-modal.component';


const routes: Routes = [
  {path:'' , redirectTo : '/login',pathMatch:'full'},
  {path:'login' , component: LoginComponent},
  {path:'register' , component: RegistrationComponent},
  {path:'calendar' , component: CalendarComponent,children:[
    { path: 'new',component:AddMeetingModalComponent},
    { path :':id/edit',component:UpdateMeetingModalComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
