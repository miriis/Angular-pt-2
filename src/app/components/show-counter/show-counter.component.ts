import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CounterService } from 'src/app/shared/counter.service';

@Component({
  selector: 'app-show-counter',
  templateUrl: './show-counter.component.html',
  styleUrls: ['./show-counter.component.css']
})
export class ShowCounterComponent implements OnInit, OnDestroy {
  value : number = 1;
  subscription!: Subscription;

  constructor(public counterService: CounterService) { }

  ngOnInit(): void {
    this.subscription=this.counterService.getValue().subscribe()
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
