import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CounterService } from 'src/app/shared/counter.service';

@Component({
  selector: 'app-edit-counter',
  templateUrl: './edit-counter.component.html',
  styleUrls: ['./edit-counter.component.css']
})
export class EditCounterComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  userNumber!: number;

  constructor(public counterService: CounterService) { }

  ngOnInit(): void {
  }

  numberValue(numberValue: any): number {
    this.userNumber = numberValue.target.value;
    return this.userNumber;
  }

  add() {
    this.counterService.addValue(this.userNumber);
  }

  sub() {
    this.counterService.subValue(this.userNumber);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
