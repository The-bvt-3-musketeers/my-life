import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { NotepadComponent } from './notepad/notepad.component';
import { WeatherComponent } from './weather/weather.component';
import { HomeComponent } from './home/home.component';
import { LauraComponent } from './laura/laura.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'notepad', component: NotepadComponent },
  { path: 'weather', component: WeatherComponent },
  { path: 'lauras-component', component: LauraComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
