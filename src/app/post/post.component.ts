import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { WordpressService } from '../core/wordpress.service';
import { Post } from '../post.model';

@Component({
  selector: 'pb-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post: Post;

  constructor(
    private route: ActivatedRoute,
    private wordpressService: WordpressService
  ) {
    this.wordpressService.post$.subscribe(data => this.post = data);
  }

  ngOnInit() {
    this.route.params.subscribe(params => this.wordpressService.getPost(params.id));
  }

}
