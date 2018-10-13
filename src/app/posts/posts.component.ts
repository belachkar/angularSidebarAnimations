import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts$: Post[] = [
    {
      userId: 0,
      id: 0,
      title: '',
      body: ''
    }
  ];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getPosts().subscribe(
      data => this.posts$ = data
    );
  }

}
