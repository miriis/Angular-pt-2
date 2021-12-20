import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private httpClient: HttpClient) { }

  getProperties() {
    return this.httpClient.get('https://api.covid19api.com/');
  }
}
