import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserDetailComponent } from '../user-detail/user-detail.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() userDetail!: UserDetailComponent;
  @Output() showDetails= new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  details(details: boolean) {
    this.showDetails.emit(details);
  }

}
