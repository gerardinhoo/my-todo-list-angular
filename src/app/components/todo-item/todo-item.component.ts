import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "src/app/models/User";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  constructor(private userService: UserService) { }

  @Input() user: User
  @Output() deleteUser: EventEmitter<User> = new EventEmitter();

  ngOnInit() {
  }

  setClasses() {
    let classes = {
      userStyle: true,
      "is-complete": this.user.isCompleted
    }
    return classes;
  }

  onToggle(user: any) {
    // Toggle in UI
    user.isCompleted = !user.isCompleted;

     // Toggle on server
     this.userService.toggleCompleted(user).subscribe(user => console.log(user));
  }

  onDelete(user: any) {
    this.deleteUser.emit(user)
  }

}
