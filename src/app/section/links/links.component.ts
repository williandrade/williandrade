import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wills-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss'],
})
export class LinksComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  openLinkedin() {
    window.open('https://www.linkedin.com/in/williandrade/', '_blank');
  }

  openGit() {
    window.open('https://github.com/williandrade', '_blank');
  }

  openInsta() {
    window.open('https://www.instagram.com/andradde_will/', '_blank');
  }

}
