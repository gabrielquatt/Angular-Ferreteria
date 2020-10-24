import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FerreteriaAboutComponent } from './ferreteria-about/ferreteria-about.component';
import { FerreteriaHomeComponent } from './ferreteria-home/ferreteria-home.component';
import { FerreteriaToolsComponent } from './ferreteria-tools/ferreteria-tools.component';

const routes: Routes = [{
  path:'',
  redirectTo:'home',
  pathMatch:'full'
},{
path:"home",
component:FerreteriaHomeComponent
},{
  path:'tools',
  component: FerreteriaToolsComponent
},{
  path:'about',
  component: FerreteriaAboutComponent
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
