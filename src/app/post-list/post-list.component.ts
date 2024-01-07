import { Component, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
[x: string]: any;
searchTitle:any;
  blogPost=[
    {title: 'About food', content: 'i love food that is tasty ...', date: '1/02/2021' },
    {title: 'Programming', content: 'programming is awesome ...', date: '2/03/2022' },
    {title: 'Lovely profession', content: 'i am a proud teacher ...', date: '3/04/2023' },
    {title: 'Magnificient God', content: 'i cant love God less ...', date: '4/05/2024' },
  ]
  
  constructor(private router: Router) { }
  
  ngOnInit(): void {
   
  }
  
  viewPost(){
  this.router.navigate(['/view-post'])
  }

 

}


