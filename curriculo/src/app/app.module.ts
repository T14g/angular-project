import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './skills/skills.component';
import { JobsComponent } from './jobs/jobs.component';
import { VideosComponent } from './videos/videos.component';
import { SkillListComponent } from './skills/skill-list/skill-list.component';
import { SkillEditComponent } from './skills/skill-edit/skill-edit.component';
import { JobListComponent } from './jobs/job-list/job-list.component';
import { JobItemComponent } from './jobs/job-list/job-item/job-item.component';
import { SkillItemComponent } from './skills/skill-list/skill-item/skill-item.component';
import { JobDetailComponent } from './jobs/job-detail/job-detail.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { InvestimentoComponent } from './calculadora/investimento/investimento.component';
import { ControlesComponent } from './calculadora/controles/controles.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SkillsComponent,
    JobsComponent,
    VideosComponent,
    SkillListComponent,
    SkillEditComponent,
    JobListComponent,
    JobItemComponent,
    SkillItemComponent,
    JobDetailComponent,
    CalculadoraComponent,
    InvestimentoComponent,
    ControlesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
