import { Routes } from '@angular/router';
import { HomeComponent } from "app/home/home.component";
import { ContactComponent } from "app/contact/contact.component";
import { PortfolioComponent } from "app/portfolio/portfolio.component";

export const routes:Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'home', component : HomeComponent },
    ];