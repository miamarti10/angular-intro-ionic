import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {
  author: string;
  comment: string;

  constructor() { }

  comments = [
    {
      author: 'John',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, eius deserunt. Non pariatur iste nulla illo tenetur laborum placeat? Quas non ab ut doloremque distinctio. Minus modi at id nulla'
    },
    {
      author: 'Ringo',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, eius deserunt. Non pariatur iste nulla illo tenetur laborum placeat? Quas non ab ut doloremque distinctio. Minus modi at id nulla'
    },
    {
      author: 'Paul',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, eius deserunt. Non pariatur iste nulla illo tenetur laborum placeat? Quas non ab ut doloremque distinctio. Minus modi at id nulla'
    }
  ];


  ngOnInit() {
  }

  publish(){
    const commentary = {
      author: this.author,
      comment:this.comment
    };
      this.comments.push(commentary);

      this.author= '';
      this.comment= '';
  
  }

}
