import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
page: any = 1;
pageSize: any = 5;
count: any;
[x: string]: any;
searchTitle:any;
  blogPost=[];
  
  constructor(private router: Router,private bs: BlogService) { }
  
  ngOnInit(): void {
   this.getBlog()
   let a = 'abcdefghiklmnop'
   console.log(a.substring(0,10))
  }
  
  viewPost(id:any){
    this.router.navigate([`/view-post/${id}`])
  }

  getBlog() {  
    this.bs.getBlog().subscribe({
      next: (res:any)=> {
        console.log(res);
        this.blogPost = res
      },
      error: (err:any)=> {
        console.log(err); 
      }
    })
  }
 
  removeBlog(id: any) {
    this.bs.deleteBlog(id).subscribe({
      next: (res:any)=> {
        console.log(res);
        this.getBlog()
      },
      error: (err:any)=> {
        console.log(err); 
      }
    })
  }
  changePage(page:any){
    this.page = page
    this.getBlog()
   }
}


