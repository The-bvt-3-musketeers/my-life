import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  posts = [];
  calendarOptions: CalendarOptions;
  constructor(private http: HttpClient) { }
  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  }
  ngOnInit() {
    setTimeout(() => {
      //Api call to get data from php file
      return this.http.get('http://localhost/mypage.php').subscribe(data => {
        this.posts.push(data);
        console.log(this.posts);
      });
    }, 2000);
    setTimeout(() => {
      this.calendarOptions = {
        initialView: 'dayGridMonth',
        dateClick: this.handleDateClick.bind(this), // bind is important!
        events: this.posts
      };
    }, 3000);

  }
}
