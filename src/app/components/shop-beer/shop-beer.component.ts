import { Component, OnInit } from '@angular/core';
import { BeerService } from 'src/app/beer.service';
import { PRODUCTS } from 'src/app/shared/mock-data';
import { IProduct } from 'src/app/shared/product';

@Component({
  selector: 'app-shop-beer',
  templateUrl: './shop-beer.component.html',
  styleUrls: ['./shop-beer.component.css']
})
export class ShopBeerComponent implements OnInit {
  products: IProduct[] = PRODUCTS;
  beerName: any;
  beerType: any;
  product: any;
  selectedBeer: IProduct | undefined;

  constructor(private beerService: BeerService) { }

  ngOnInit(): void {this.getAllBeers()}

  getBeerByName(event: any) :any {
    this.beerName = event.target.value;
    return this.beerName;
  }

  getBeerByType(event: any) :any{
    this.beerType = event.target.value;
    return this.beerType;
  }

  getAllBeers() {
    this.beerService.getBeers().subscribe(products => this.product = products);
  }

  selectBeer() {
    this.selectedBeer = this.products.find(product => product.name === this.beerName && product.type === this.beerType)
  }

}
