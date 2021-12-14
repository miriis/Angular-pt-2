import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/product';

@Component({
  selector: 'app-card-beer',
  templateUrl: './card-beer.component.html',
  styleUrls: ['./card-beer.component.css']
})
export class CardBeerComponent implements OnInit {
  @Input() products!: IProduct;

  constructor() { }

  ngOnInit(): void {
  }

}
