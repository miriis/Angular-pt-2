import { Component, OnInit } from '@angular/core';
import { UserDetailComponent } from 'src/app/components/user-detail/user-detail.component';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {
  userDetail!: UserDetailComponent;
  hide= true;

  constructor() { }

  ngOnInit(): void {
  }

  showDetails(value:any) {
    this.userDetail= value;
    this.hide=false;
  }

  closeDetails(value:boolean) {
    this.hide= value;
  }

}
