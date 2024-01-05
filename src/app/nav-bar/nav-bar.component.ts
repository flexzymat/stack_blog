import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddEditPostComponent } from '../add-edit-post/add-edit-post.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(private router: Router,private _dialog: MatDialog ) {}
 

  addEditPost(){
    this._dialog.open(AddEditPostComponent)
  }
  


  clickBadge(){
   this.router.navigate(['/post-list'])
  }
}
