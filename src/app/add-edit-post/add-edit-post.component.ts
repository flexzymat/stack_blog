import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BlogService } from '../blog.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-post',
  templateUrl: './add-edit-post.component.html',
  styleUrls: ['./add-edit-post.component.css']
})
export class AddEditPostComponent implements OnInit {

  model: any = {}
  
  constructor(
    private route : Router,
    private bs: BlogService, private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddEditPostComponent>,
    @Inject (MAT_DIALOG_DATA) public data:any
  ) {
  }

  ngOnInit(): void {
    console.log(this.data)
    if(this.data!==null) {
      this.model = this.data
    }
  }

  createBlog(){ 
    this.model.date = new Date()
    this.bs.postBlog(this.model).subscribe({
      next: (res:any)=> {
        console.log(res);
        this.onClose();
        alert('Post has been added successfully');
        this.route.navigate(['/post-list'])
      },
      error: (err:any)=> {
        console.log(err); 
      }
    })
  };
  editBlog(){ 
    
    let payload = {
      title: this.model.title,
      comment: this.model.comment,
      date: new Date()
    }
    // this.model.date = new Date()
    console.log(payload);
    
    this.bs.editBlog(payload, this.model._id).subscribe({
      next: (res:any)=> {
        console.log(res);
        this.onClose();
        alert('Update successful');
        this.route.navigate(['/post-list'])
      },
      error: (err:any)=> {
        console.log(err); 
      }
    })
  };
  submit() {
    if(this.data == null) {
      this.createBlog()
    }else {
      this.editBlog()
    }
  }
  onClose(){
    this.dialogRef.close();
  };
 
}
