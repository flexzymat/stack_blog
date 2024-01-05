import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
[x: string]: any;

  blogPost=[
    {title: 'title1', content: 'first content ...', date: '2/12/2024' },
    {title: 'title2', content: 'first content ...', date: '2/12/2024' },
    {title: 'title3', content: 'first content ...', date: '2/12/2024' },
    {title: 'title4', content: 'first content ...', date: '2/12/2024' },
  ]
  
  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  viewPost(){
  this.router.navigate(['/view-post'])
  }
}
