import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'wills-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  mailMe() {
    window.location.href = `mailto:williandrade@me.com+?subject=${encodeURI(
      'WebSite Contact'
    )}&body=${encodeURI('Hello 😄')}`;
  }

  callMe(number: string) {
    window.location.href = `tel:${number}`;
  }
}
