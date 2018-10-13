import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>(`${this.url}/users`);
  }
  getUser(id) {
    return this.http.get<User>(`${this.url}/users/${id}`);
  }
  getPosts() {
    return this.http.get<Post[]>(`${this.url}/posts`);
  }

}
