import {Component} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'talos-vertical-top-navigation',
  templateUrl: './vertical-top-navigation.component.html',
  styleUrls: ['./vertical-top-navigation.component.scss']
})
export class VerticalTopNavigationComponent {

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.scrollToTop();
      }
    });
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
