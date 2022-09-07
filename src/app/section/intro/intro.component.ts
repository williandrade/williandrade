import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'wills-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {
  bottomCityOptions: AnimationOptions = {
    path: '/assets/lootie/city/data.json',
  };
  willOptions: AnimationOptions = {
    path: '/assets/lootie/will/data.json',
    loop: false,
  };

  constructor() {}

  ngOnInit(): void {}
}
