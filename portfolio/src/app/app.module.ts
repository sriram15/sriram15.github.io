import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from "@angular/router";
import {routes} from '../app.routes';
import { ProjectTileComponent } from './project-tile/project-tile.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectService } from "app/providers/project/project.service";
import { ProjtypfilterPipe } from "app/pipe/projtypfilter.pipe";
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ProjectTileComponent,
    PortfolioComponent,
    ProjtypfilterPipe,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CarouselModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
