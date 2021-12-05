import { Component } from '@angular/core';
import { CounterService } from './shared/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ex 9.2';

  constructor(private counterService: CounterService) {}

}
