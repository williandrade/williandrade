import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'wills-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss'],
})
export class ExperienceCardComponent implements OnInit {
  @Input() job: any;

  constructor() {}

  ngOnInit(): void {}
}
