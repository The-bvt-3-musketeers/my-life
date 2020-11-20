import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from './weather-api.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  lat;
  lng;
  locationData;

  constructor(private weatherService: WeatherApiService) { }

  ngOnInit() {
  }

  sendToIpapi() {
    this.weatherService.getCurrentLocationData()
      .subscribe(data => {
        this.locationData = data;
        console.log(this.locationData);
      })
  }

}
