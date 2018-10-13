import { Component, OnInit } from '@angular/core';
import { DataService } from './../services/data.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$: User[] = [
    {
      id: 0,
      name: '',
      username: '',
      email: '',
      phone: '',
      website: ''
    }
  ];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getUsers().subscribe(
      data => this.users$ = data
    );
  }

}
