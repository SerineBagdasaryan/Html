import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {ServicesComponent} from "./services/services.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {AdditionalComponent} from "./additional/additional.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'about',component: AboutUsComponent},
  {path: 'services',component: ServicesComponent},
  {path: 'portfolio',component: PortfolioComponent},
  {path: 'additional',component: AdditionalComponent},
  {path: 'contact',component: ContactComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
