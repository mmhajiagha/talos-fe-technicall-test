import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {PostsService} from '@angular-test/app-services/posts';
import {PostModel} from '@angular-test/app-models/posts';
import {Subscription} from 'rxjs';

@Component({
  selector: 'talos-posts-add',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsListComponent implements OnInit, OnDestroy {
  posts: PostModel[] = [];
  subscription: Subscription = new Subscription();

  constructor(private postsService: PostsService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.listPosts();
  }

  private listPosts() {
    this.subscription.add(this.postsService.listPosts().subscribe(res => {
      this.posts = res.items;
      this.cdr.detectChanges();
    }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
