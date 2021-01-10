import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {PostsService} from '@angular-test/app-services/posts';
import {PostModel} from '@angular-test/app-models/posts';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'talos-posts-add',
  templateUrl: './posts-detail.component.html',
  styleUrls: ['./posts-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsDetailComponent implements OnInit, OnDestroy {
  post: PostModel = new PostModel();
  subscription: Subscription = new Subscription();
  postId: string;

  constructor(
    private postsService: PostsService,
    private cdr: ChangeDetectorRef,
    private activatedRoute: ActivatedRoute
  ) {
    this.postId = this.activatedRoute.snapshot.params['postId'];
  }

  ngOnInit(): void {
    this.listPosts();
  }

  private listPosts() {
    this.subscription.add(this.postsService.getPostById(this.postId).subscribe(res => {
      this.post = res;
      this.cdr.detectChanges();
    }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
