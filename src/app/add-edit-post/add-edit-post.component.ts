import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BlogService } from '../blog.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-edit-post',
  templateUrl: './add-edit-post.component.html',
  styleUrls: ['./add-edit-post.component.css']
})
export class AddEditPostComponent {

  model: any = {}
  
  constructor(
    private bs: BlogService, private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddEditPostComponent>,
    @Inject (MAT_DIALOG_DATA) public data:any
  ) {
    console.log(this.data)
    this.model = this.data
  }

  createBlog(){ 
    this.model.date = new Date()
    this.bs.postBlog(this.model).subscribe({
      next: (res:any)=> {
        console.log(res);
      },
      error: (err:any)=> {
        console.log(err); 
      }
    })
  };
  editBlog(){ 
    this.model.date = new Date()
    this.bs.editBlog(this.model).subscribe({
      next: (res:any)=> {
        console.log(res);
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
