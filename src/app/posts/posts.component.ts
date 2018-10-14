import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { anime as a } from './../animations';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  animations: [a.eclipse]
})
export class PostsComponent implements OnInit {

  posts$: Post[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getPosts().subscribe(
      data => {
        if (data) {
          data.forEach((item, i) => {
            if (item.title && item.body) {
              setTimeout(() => {
                this.posts$.push(item);
              }, 25 * i);
            }
          });
        }
      }
    );
  }

  onclick(id: number) {
    this.posts$.splice(id, 1);
  }

}
