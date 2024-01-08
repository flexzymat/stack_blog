import { Component, Inject } from '@angular/core';
import { BlogService } from '../blog.service';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddEditPostComponent } from '../add-edit-post/add-edit-post.component';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent {

  model:any = {};

  constructor(
    private bs: BlogService, private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddEditPostComponent>,
    @Inject (MAT_DIALOG_DATA) public data:any
  ) {
    this.model = this.data
    console.log(this.data)
  }


}
