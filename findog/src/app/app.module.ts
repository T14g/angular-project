import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { DogsLostComponent } from './dogs-lost/dogs-lost.component';
import { DogsFoundComponent } from './dogs-found/dogs-found.component';
import { DogsComponent } from './dogs/dogs.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
