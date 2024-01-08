import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EditPostComponent } from '../edit-post/edit-post.component';
import { AddEditPostComponent } from '../add-edit-post/add-edit-post.component';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
  blogData: any;
  id: any
  constructor(private _dialog: MatDialog, private route: ActivatedRoute, private bs : BlogService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      console.log(params)
      this.id=params.params.id
    })
    this.viewBlog();
  }
   
  viewBlog() {  
    this.bs.getBlogById(this.id).subscribe({
      next: (res:any)=> {
        console.log(res);
        this.blogData = res
      },
      error: (err:any)=> {
        console.log(err);
      }
    })
  }
  EditPost(){
    const dialogRef = this._dialog.open(AddEditPostComponent, {
      width: '500px',
      data: this.blogData
    });
  
    dialogRef.afterClosed().subscribe(result => {
    });
   
  }
}
