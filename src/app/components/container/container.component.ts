import { ChangeDetectionStrategy, Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

import { UsersService } from 'src/app/services/users.service';
import { Users } from 'src/app/users';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  // template: `<div class="container">

  //   <h1>Hello</h1>
  // </div>`,
  styleUrls: ['./container.component.css']
})

export class ContainerComponent implements OnInit {
  public UsersList: Users[] = [];
  constructor(private usersService: UsersService) {
    this.getUsers();
  }

  ngOnInit() {
  }
  getUsers() {
    this.usersService.getUsersService().subscribe((res) => {
      console.log('res');
      console.log(res)
      if (!res) {
        // handle error
        console.log('error occured in COMPONENT')
      }
      else {
        this.UsersList = res.body['data'];
        console.log('this.UsersList');
        console.log(this.UsersList);
      }
    })
  }

  selectUserFunc(target){
    console.log('selectUser called');
    console.log(target);
  }
  selectUserFunc2(target){
    console.log('selectUser2 called');
    console.log(target);
  }
}
