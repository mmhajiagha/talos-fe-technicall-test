import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'talos-posts-add',
  templateUrl: './posts-add.component.html',
  styleUrls: ['./posts-add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsAddComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
