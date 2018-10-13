import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {


  userId$: string;
  user$: User = {
    id: 0,
    name: '',
    username: '',
    email: '',
    phone: '',
    website: ''
  };

  constructor(private dataService: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.userId$ = params.id );
  }

  ngOnInit() {
    this.dataService.getUser(this.userId$).subscribe(data => this.user$ = data);
  }

}
