import { Component } from '@angular/core';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
constructor(){}
posts:Post[]=[];

ngOnInit(){
this.getPosts();
}
getPosts(){

}
delete(){

}


}
