import { Component, OnInit, Input } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() id;
  post:Post;
  unableToGetPost:boolean=false;
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getPost();
  }
  getPost(){
    this.postService.getOne(this.id).then((value:Post)=>{
      this.post=value;
    }).catch((error)=>{
      this.unableToGetPost=true;
    });
  }

  onLovePost(){
  	this.postService.love(this.id);
  }
  onDontLovePost(){
  	this.postService.dontLove(this.id);
  }
  onRemovePost(){
  	this.postService.removePost(this.id);
  }
}
