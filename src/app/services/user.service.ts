import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from 'rxjs';
import {User} from "../models/User";


const httpOptions = {
  headers: new HttpHeaders(
    {
      "Content-Type": "application/json"
    }
  )
}

@Injectable({
  providedIn: 'root'
})

export class UserService {
  userUrl: string = 'https://jsonplaceholder.typicode.com/users';
  userLimit = '?_limit=5';

  constructor(private http: HttpClient) { }

  // Get Users
  getUsers():Observable<User[]> {
   return this.http.get<User[]>(`${this.userUrl}${this.userLimit}`);
  }

  // Users Completed
  toggleCompleted(user: User):Observable<any> {
    const url = `${this.userUrl}/${user.id}`
    return this.http.put(url, user, httpOptions)
  }

  // Delete users
  deleteThisUser(user: User):Observable<any> {
    const url = `${this.userUrl}/${user.id}`;
    return this.http.delete<User>(url, httpOptions);
  }


  // Add new users
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.userUrl, user, httpOptions);
  }

  // userDeleted(user: User) {}
}
