import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  public counterSubject = new BehaviorSubject<number>(0);
  public counter!: number;
  public error = '';

  constructor() {
    this.getValue().subscribe((v) =>  this.counter = v);
    console.log( 'Value: ', this.counter);
  }

  getValue(): Observable<number> {
    return this.counterSubject.asObservable();
  }

  /* addValue(value : number) {
    this.getValue().subscribe(() =>  this.counter = this.counter += value);
    console.log("Value: ", this.counter);
  } */

  addValue(value : number = 1) {
    this.counterSubject.next(this.counter += value);
    console.log("Value: ", this.counter);
  }

  subValue(value : number) {
    if (value <= this.counter) {
      this.counterSubject.next(this.counter -= value);
      console.log("Value: ", this.counter);
    } else {
      this.error= 'Error: value cannot be negative';
    }
  }

  getErr(): string {
    return this.error;
  }
}
