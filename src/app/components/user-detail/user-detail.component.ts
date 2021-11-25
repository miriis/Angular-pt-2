import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input() userDetail!: UserDetailComponent;
  @Output() closeDetails = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

}
