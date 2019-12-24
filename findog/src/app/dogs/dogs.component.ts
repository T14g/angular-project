import { Component, OnInit } from '@angular/core';
import { DogsService } from './dogs.service';

@Component({
  selector: 'app-dogs',
  template:  `
    <h2>{{title}}</h2>
    <ul>
      <li *ngFor="let item of dogs">{{item}}</li>
    </ul>
  `
})
export class DogsComponent implements OnInit {
  title = 'Dogs component';
  dogs;

  constructor(service: DogsService) {
    this.dogs = service.getDogs();
   }

  ngOnInit() {
  }

}
