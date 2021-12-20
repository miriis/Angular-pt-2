import { Component } from '@angular/core';
import { CovidService } from './shared/covid.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ex12';
  properties: any;
  selectedProperties: any;

  constructor (private covidService: CovidService) {}

  ngOnInit() : void {
    this.covidService.getProperties().subscribe(data => this.properties = Object.keys(data));
    this.covidService.getProperties().subscribe(data => this.selectedProperties = Object.values(data));
  }
}
