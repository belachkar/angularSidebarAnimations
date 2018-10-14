import { Component, OnInit } from '@angular/core';
import { DataService } from './../services/data.service';
import { User } from '../models/user.model';
import { anime as a } from './../animations';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [
    a.fade
  ]
})
export class UsersComponent implements OnInit {

  users$: User[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getUsers().subscribe(
      data => this.users$ = data
    );
  }

  onclick(id: number) {
    this.users$.splice(id, 1);
  }

}
