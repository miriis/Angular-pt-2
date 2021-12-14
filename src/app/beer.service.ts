import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { PRODUCTS } from './shared/mock-data';
import { IProduct } from './shared/product';
import { find } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BeerService {
  private products: IProduct[] = PRODUCTS;
  private beers$: Observable<IProduct> = from(this.products);
  public error = '';

  constructor() { }

  getBeers() : Observable<IProduct> {
    return this.beers$;
  }

  getBeerById(id: number) {
    let myBeer: IProduct | undefined;
    this.getBeers()
      .pipe(find(product => product.id === id))
      .subscribe((beer) => myBeer = beer);
    return myBeer;
    }

  getErr(): string {
    return (this.error='Error: this beer is not available');
  }

  //all'inizio non riuscivo a stamparmi il result in console quindi smanettando un pò ero arrivata a questo sotto,
  //quindi te lo lascio però era merito di vsc :)

  /* private products$: Observable<IProduct[]> = of(PRODUCTS);
  beer$: IProduct | undefined;

  constructor() { }

  getBeers() {
    return this.products$;
  }

  getBeerById(id: number) {
    this.getBeers().subscribe(products => this.beer$ = products.find( product => product.id === id)); //vsc suggerisce ed importa automaticamente beer$
    return this.beer$;
  } */
  }
