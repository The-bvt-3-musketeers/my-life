import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from './weather-api.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  locationData;
  weatherData;

  userLatitude;
  userLongitude;

  constructor(private weatherService: WeatherApiService) { }

  ngOnInit() {
  }

  sendToWeatherAPI(userLatitude, userLongitude) {
    this.weatherService.getWeatherData(this.userLatitude, this.userLongitude)
      .subscribe(data => {
        this.weatherData = data;
        console.log(this.weatherData);
      })
  }

  sendToIpInfo() {
    this.weatherService.getCurrentLocationData()
    .subscribe(data => {
      this.locationData = data;
      console.log(this.locationData.loc.split(',').map(string=>+string));
      this.userLatitude = this.locationData.loc.split(',').map(n=>+n)[0];
      this.userLongitude = this.locationData.loc.split(',').map(n=>+n)[1];
      this.sendToWeatherAPI(this.userLongitude, this.userLongitude)
    })
  }


}
