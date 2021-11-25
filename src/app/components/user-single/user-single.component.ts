import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserDetailComponent } from '../user-detail/user-detail.component';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {
  @Input() userDetail!: UserDetailComponent;
  @Output() showDetails = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

}
