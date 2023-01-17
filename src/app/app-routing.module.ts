import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APJComponent } from './apj/apj.component';
import { DhoniComponent } from './dhoni/dhoni.component';
import { HomepageComponent } from './homepage/homepage.component';
import { InfoComponent } from './info/info.component';
import { KohliComponent } from './kohli/kohli.component';
import { ModiComponent } from './modi/modi.component';
import { VijayComponent } from './vijay/vijay.component';

const routes: Routes = [
  {path:"",component:HomepageComponent},
  {path:"home",component:HomepageComponent},
  {path:"dhoni",component:DhoniComponent},
  {path:"kohli",component:KohliComponent},
  {path:"apj",component:APJComponent},
  {path:"modi",component:ModiComponent},
  {path:"vijay",component:VijayComponent},
  {path:"info",component:InfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
