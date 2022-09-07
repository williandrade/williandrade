import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import recomendationsData from '../../../assets/data/recomendations.json';

@Component({
  selector: 'wills-recomendations',
  templateUrl: './recomendations.component.html',
  styleUrls: ['./recomendations.component.scss'],
})
export class RecomendationsComponent implements OnInit {
  recomendations: any[] = recomendationsData;
  lastScrollVal = 0;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    this.scroolElements(window.pageYOffset);
  }

  ngOnInit(): void {}

  gettArraySorted(number: number) {
    return this.recomendations.sort(() => -number);
  }

  scroolElements(val: number) {
    let num = 4;

    if (val <= this.lastScrollVal) {
      num = -num;
    }

    const children = this.document.querySelector(
      '#recomendations-rows'
    )?.children;
    if (children) {
      for (let i = 0; i < children.length; i++) {
        const each = children[i];
        each.scrollLeft += num + i;
      }
    }

    this.lastScrollVal = val;
  }
}
