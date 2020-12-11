import { Component, OnInit } from '@angular/core';
import { AserviceService } from '../../aservice.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users;
  constructor(private aserviceService: AserviceService) { }

  ngOnInit(): void {
    this.users = this.aserviceService.getUsers();
    this.aserviceService.getUsers()
    .subscribe(users => {
      console.log(users);
    });
  }

}
