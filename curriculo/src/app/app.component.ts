import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'curriculo';
  loadedFeature = 'skills';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
