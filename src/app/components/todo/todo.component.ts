import { Component, OnInit } from '@angular/core';
import {User} from "../../models/User";
import {UserService} from "../../services/user.service"

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  users: User[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(user => {
      this.users = user;
    });
  }

  deleteUser(user: User) {
    // Remove from UI
    this.users = this.users.filter(u => u.id !== user.id);

    // Remove from Server
    this.userService.deleteThisUser(user).subscribe();
  }

  addUser(user: User) {
    this.userService.addUser(user).subscribe(user => {
      this.users.push(user)
    })
  }
}
