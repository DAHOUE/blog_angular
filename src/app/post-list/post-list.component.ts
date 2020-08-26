import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from '../services/post.service';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit,OnDestroy {
	posts: Post[]=[];
	postsSubscription: Subscription;
  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
  	this.postsSubscription=this.postService.postsSubject.subscribe((posts : Post[])=>{
      this.posts=posts;
      console.log('post liste : ', this.posts);
  	});
  	this.postService.emitPosts();
  }

  onPostView(id:Number){
  	this.router.navigate(['/posts','view', id]);
  }
  ngOndestroy(){
  	this.postService.postsSubject.unsubscribe();
  }
 

  ngOnDestroy() {
    if(this.postsSubscription)
      this.postsSubscription.unsubscribe();
  }

}
