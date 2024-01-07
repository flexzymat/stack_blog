import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-post',
  templateUrl: './add-edit-post.component.html',
  styleUrls: ['./add-edit-post.component.css']
})
export class AddEditPostComponent {

  constructor(
    private dialogRef: MatDialogRef<AddEditPostComponent>,
    @Inject (MAT_DIALOG_DATA) public data:any
  ) {}

}
