import { Injectable } from '@angular/core';
import { Subject} from 'rxjs/Subject';
import { Post } from '../models/post.model';

import * as firebase from 'firebase';
import Datasnapshot = firebase.database.DataSnapshot;

@Injectable({
  providedIn: 'root'
})
export class PostService {
	private posts: Post[] =[];
  postsSubject= new Subject<Post[]>();
  
  
  constructor() { this.getPosts(); }

  
  emitPosts(){
    this.posts.sort((a:Post, b:Post)=>{ if(a.create_at < b.create_at)return 1})
  	this.postsSubject.next(this.posts.slice());
  }
  addNewPost(post: Post){
    const almostUniqueFileName= Date.now();
    post.create_at= Date.now().toString();
    post.id=almostUniqueFileName;
  	this.posts.push(post);
    this.savePosts();
  	this.emitPosts();
  }
  
  removePost(id: number){
  	const postIndex=this.posts.findIndex(
  		(posts:Post)=>{
	  		if(posts.id===id)
	  			return true;
	  	});
  	this.posts.splice(postIndex,1);
    this.savePosts();
  	this.emitPosts;
  }
  love(id: number){
  	const postIndex=this.posts.findIndex(
      (posts:Post)=>{
        if(posts.id===id)
          return true;
      });
  	this.posts[postIndex].loveIts=1;
    this.savePosts();
  	this.emitPosts;
  }
  dontLove(id: number){
  	const postIndex=this.posts.findIndex(
      (posts:Post)=>{
        if(posts.id===id)
          return true;
      });
  	this.posts[postIndex].loveIts=-1;
    this.savePosts();
  	this.emitPosts;

 }
  savePosts(){
    firebase.database().ref('/posts').set(this.posts);
  }

  getPosts(){
    firebase.database().ref('/posts').on('value', (data: Datasnapshot)=>{

      this.posts= data.val() ? data.val():[];
      
      this.emitPosts();
    });

   
  }
  getOne(id):Promise<any>{
    return new Promise((resolve,reject)=>{
      const postIndex=this.posts.findIndex(
        (posts:Post)=>{
          if(posts.id===id)
            return true;
        });
        if(postIndex>-1)
         resolve(this.posts[postIndex]);
        else
          firebase.database().ref("/posts/" + id).once('value').then(
            (data: Datasnapshot)=>{
              resolve(data.val());
            }
          ).catch(
            (error)=>{
              reject(error);
            }
          );
    });
  }
  

}

