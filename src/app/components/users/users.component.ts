import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Users } from 'src/app/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
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

}
