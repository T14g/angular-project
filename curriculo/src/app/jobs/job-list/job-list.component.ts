import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Job } from '../job.model';
import { JobService } from '../job.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
@Output() jobWasSelected = new EventEmitter<Job>();

jobs: Job[];

  constructor(private jobService: JobService) { }

  ngOnInit() {
    this.jobs = this.jobService.getJobs();
  }

  onJobSelected(job: Job) {
    this.jobWasSelected.emit(job);
  }

}
