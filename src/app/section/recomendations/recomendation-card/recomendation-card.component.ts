import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'wills-recomendation-card',
  templateUrl: './recomendation-card.component.html',
  styleUrls: ['./recomendation-card.component.scss'],
})
export class RecomendationCardComponent implements OnInit {
  @Input() recomendation: any;

  constructor() {}

  ngOnInit(): void {}
}
