import { NotFoundComponent } from './app/not-found/not-found.component';
import { ProjectDetailComponent } from './app/project-detail/project-detail.component';
import { Routes } from '@angular/router';
import { HomeComponent } from "app/home/home.component";

export const routes:Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'home', component : HomeComponent },
    {path: 'project/:id', component : ProjectDetailComponent },
    {path: 'notfound', component: NotFoundComponent}
    ];