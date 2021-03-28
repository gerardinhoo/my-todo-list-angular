import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  name: string
  constructor() { }

  @Output() addUser: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
  }

  onSubmit() {
    const user = {
      name: this.name,
      isCompleted: false
    }
  this.addUser.emit(user)
  }
}
