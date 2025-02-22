import { Component } from '@angular/core';
import { Post } from './posts/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'full-stack';
  storedPosts: Post[] = [];

  onPostAdded (post: any) {
    this.storedPosts.push(post);
  }
}

