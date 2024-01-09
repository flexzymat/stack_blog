import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';


@Injectable({
  providedIn: 'root'
})
export class BlogService {
  
  url = environment.url

  constructor(
    private http: HttpClient
  ) { }

  postBlog(data:any): Observable<any> {    
    const apiUrl = `${this.url}`;
    return this.http.post<any>(apiUrl, data);
  }
  getBlogById(id:any): Observable<any> {    
    const apiUrl = `${this.url}/${id}`;
    return this.http.get<any>(apiUrl);
  }
  editBlog(data: any,id:any): Observable<any> {    
    const apiUrl = `${this.url}/${id}`;
    return this.http.patch<any>(apiUrl,data);
  }
  deleteBlog(id:any): Observable<any> {    
    const apiUrl = `${this.url}/${id}`;
    return this.http.delete<any>(apiUrl);
  }
  getBlog(): Observable<any> {    
    const apiUrl =` ${this.url}`;
    return this.http.get<any>(apiUrl);
  }
}
