import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dogs',
  template:  `
    <h2>{{title}}</h2>
    <ul>
      <li *ngFor="let item of lista">{{item}}</li>
    </ul>
  `
})
export class DogsComponent implements OnInit {
  title = 'Dogs component';
  lista = ['Cachorro 1', 'Cachorro 2', 'Cachorro3'];

  constructor() {

   }

  ngOnInit() {
  }

}
