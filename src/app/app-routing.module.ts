import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { ViewPostComponent } from './view-post/view-post.component';

const routes: Routes = [ 
  {path: 'post-list', component: PostListComponent},
  {path:'', redirectTo: '/post-list', pathMatch: 'full'},
  {path: 'view-post', component: ViewPostComponent},
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
