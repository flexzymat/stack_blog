import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PostListComponent } from './post-list/post-list.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { AddEditPostComponent } from './add-edit-post/add-edit-post.component';
import { MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule} from 'ngx-pagination';
import { EditPostComponent } from './edit-post/edit-post.component'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PostListComponent,
    ViewPostComponent,
    AddEditPostComponent,
    FilterPipe,
    EditPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
