import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DatePipeComponent } from './date-pipe/date-pipe.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationComponent } from './notification/notification.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { NotepadComponent } from './notepad/notepad.component';
import { CalendarComponent } from './calendar/calendar.component';

import { HttpClientModule } from '@angular/common/http';
import { FullCalendarModule } from '@fullcalendar/angular';
import { MatSidenavModule } from '@angular/material/sidenav';


import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DatePipeComponent,
    NotificationComponent,
    NotepadComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    FullCalendarModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
