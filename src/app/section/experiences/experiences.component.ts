import { Component, OnInit } from '@angular/core';
import jobsData from '../../../assets/data/jobs.json';

@Component({
  selector: 'wills-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
})
export class ExperiencesComponent implements OnInit {
  jobExperiences = jobsData;

  constructor() {}

  ngOnInit(): void {}
}
