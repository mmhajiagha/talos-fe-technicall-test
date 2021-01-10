import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'talos-posts-add',
  templateUrl: './posts-detail.component.html',
  styleUrls: ['./posts-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsDetailComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
