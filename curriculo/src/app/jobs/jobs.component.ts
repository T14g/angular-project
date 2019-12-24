import { Component, OnInit } from '@angular/core';
import { JobService } from './job.service';
import { Job } from './job.model';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
  providers: [JobService]
})
export class JobsComponent implements OnInit {
  selectedJob: Job;
  constructor() { }

  ngOnInit() {
    // console.log(this.selectedJob);
  }

}
