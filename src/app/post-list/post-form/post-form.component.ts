import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
	postForm : FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private postService: PostService) { }

  ngOnInit(): void {
  	this.initForm();
  }
  initForm(){
  	this.postForm=this.formBuilder.group({
  		title: ['', [Validators.required, Validators.pattern(/.{3,30}/)]],
  		content: ['',Validators.required]
  	});
  }
  onSubmit(){
  	const title=this.postForm.get('title').value;
  	const content=this.postForm.get('content').value;
  	const post=new Post(title, content);
  	this.postService.addNewPost(post);
  	this.router.navigate(['/posts']);
  }
}
