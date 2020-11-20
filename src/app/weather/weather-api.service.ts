import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WeatherApiService {
  constructor(private http: HttpClient) {}

  getCurrentLocationData() {
    return this.http.get(
      'https://api.ipapi.com/api/161.185.160.93?access_key=807333ccddb7a7789bdf1406bab1be36'
    )
  }

  getWeatherData() {
    return this.http.get(
      'https://api.weather.gov/points/{latitude},{longitude}'
      )
  }


}
