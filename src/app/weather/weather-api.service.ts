import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WeatherApiService {
  constructor(private http: HttpClient) {}

  getCurrentLocationData() {
    return this.http.get(
      'https://ipinfo.io?token=eb1de81e1f98ea'
    )

  }

  getWeatherData(userLatitude, userLongitude) {
    return this.http.get(
      'https://api.weatherbit.io/v2.0/current?key=371f57e0032f45aa980f9ff8ee74498e&units=I&lat=' + userLatitude + '&lon=' + userLongitude
      )
  }


}
