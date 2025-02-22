import { Component, Output } from '@angular/core';
import { Post } from '../post.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent {
  enteredContent = '';
  enteredTitle = '';

  @Output() postCreated = new EventEmitter();

  onAddPost(){
    const posts: Post = {
      title: this.enteredTitle,
      content: this.enteredContent,
    };
    this.postCreated.emit(posts);
  }
}
