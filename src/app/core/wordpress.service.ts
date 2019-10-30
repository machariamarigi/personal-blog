import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { Post } from '../post.model';
import { environment } from '../../environments/environment';

const POSTS_URL = 'posts';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {
  posts: Post[];
  post$: Subject<Post> = new Subject();

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    if (this.posts) {
      return of(this.posts);
    }

    return this.http.get<Post[]>(`${environment.WORDPRESS_REST_URL}${POSTS_URL}`).pipe(
      tap(posts => this.posts = posts)
    );
  }

  getPost(id: number) {
    if (this.posts) {
      const post = this.posts.find(p => p.id === id);
      if (post) {
        this.post$.next(post);
      }
    }

    this.http.get<Post>(`${environment.WORDPRESS_REST_URL}${POSTS_URL}/${id}`).subscribe(
      post => this.post$.next(post)
    );
  }
}
