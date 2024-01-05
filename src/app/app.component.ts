
import { Component } from '@angular/core';
import { AddEditPostComponent } from './add-edit-post/add-edit-post.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stack_blog';

// constructor(private _dialog: MatDialog) {}

// addEditPost(){
//   this._dialog.open(AddEditPostComponent)
// }

}
