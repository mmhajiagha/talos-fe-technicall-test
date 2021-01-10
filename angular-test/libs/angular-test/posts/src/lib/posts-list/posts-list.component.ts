import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'talos-posts-add',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsListComponent implements OnInit {
  posts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 3, 3, 3, 3, 3, 4, 5, 2, 45, 6, 7, 7];

  constructor() {
  }

  ngOnInit(): void {
  }

}
