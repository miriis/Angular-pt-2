import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counter : number = 0;
  private error = '';

  constructor() { }

  getValue(){
    return this.counter;
  }

  addValue(value: any) {
    let number = parseInt(value);
    this.counter += number;
    console.log("Value:", this.counter);
  }

  subValue(value: any):any {
    if (value <= this.counter) {
      this.counter = +this.counter - +value;
    } else {
    this.error = 'Error: value cannot be negative';
  }
  }

  getErr(): string {
    return this.error;
  }
}
