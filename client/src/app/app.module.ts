import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './userModule/login/login.component';
import { RegistrationComponent } from './userModule/registration/registration.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AddMeetingModalComponent } from './calendar/add-meeting-modal/add-meeting-modal.component';
import { UpdateMeetingModalComponent } from './calendar/update-meeting-modal/update-meeting-modal.component';
import { AddUserComponent } from './calendar/add-user/add-user.component';
import { TimePickerComponent } from './calendar/time-picker/time-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegistrationComponent,
    CalendarComponent,
    AddMeetingModalComponent,
    UpdateMeetingModalComponent,
    AddUserComponent,
    TimePickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
