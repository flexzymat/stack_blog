import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddEditPostComponent } from '../add-edit-post/add-edit-post.component';
import { Dialog } from '@angular/cdk/dialog';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(private _dialog: MatDialog, private router: Router) {}
 
 

  addEditPost(){
    const dialogRef = this._dialog.open(AddEditPostComponent, {
      width: '500px'
    });
  
    dialogRef.afterClosed().subscribe(result => {
    });
   
  }
  


  clickBadge(){
   this.router.navigate(['/post-list'])
  }
}
