import { Component } from '@angular/core';
import { BeerService } from './beer.service';
import { IProduct } from './shared/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ex11.1';

  products!: IProduct[];

  constructor(public beerService: BeerService) { }

  ngOnInit() {
    console.log(this.beerService.getBeerById(3));
    }

}
