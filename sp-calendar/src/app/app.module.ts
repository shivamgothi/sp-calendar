import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import resourceTimeGridPlugin from '@fullcalendar/resource-timeline'
import resourceTimeGridDay from '@fullcalendar/resource-timeline'
import { CalendarComponent } from './components/calendar/calendar';

FullCalendarModule.registerPlugins([
  resourceTimeGridPlugin,
  resourceTimeGridDay,
]);

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
