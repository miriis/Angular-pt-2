import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  public counterSub = new BehaviorSubject(0);
  public counter!: number;
  private error = '';

  constructor() {
    this.getValue().subscribe((v) =>  this.counter = v);
    console.log( 'Value: ', this.counter);
  }

  getValue(): Observable<number> {
    return this.counterSub.asObservable();
  }

  /* addValue(value : number) {
    this.getValue().subscribe(() =>  this.counter = this.counter += value);
    console.log("Value: ", this.counter);
  } */

  addValue(value : any) {
    let number = parseInt(value);
    this.getValue().subscribe(() =>  this.counter = this.counter += number);
    console.log("Value: ", this.counter);
  }

  subValue(value : number) {
    if (value <= this.counter) {
      this.getValue().subscribe(() => this.counter = this.counter -= value);
      console.log("Value: ", this.counter);
    } else {
      this.error= 'Error: value cannot be negative';
    }
  }

  getErr(): string {
    return this.error;
  }
}
