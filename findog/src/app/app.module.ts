import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { DogsLostComponent } from './dogs-lost/dogs-lost.component';
import { DogsFoundComponent } from './dogs-found/dogs-found.component';
import { DogsComponent } from './dogs/dogs.component';
import { DogsService } from './dogs/dogs.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DogsLostComponent,
    DogsFoundComponent,
    DogsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DogsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
