import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
// import { NavComponent } from './nav/nav.component';
// import { DatahighchartComponent } from './datahighchart/datahighchart.component';
import { DialogboxeditComponent } from './dialogboxedit/dialogboxedit.component';
import { DatagridComponent } from './datagrid/datagrid.component';

const routes: Routes = [
  // {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'home',component:HomeComponent},
  // {path:'nav',component:NavComponent},
  {path:'datagrid',component:DatagridComponent},
  // {path:'datahighchart',component:DatahighchartComponent},
  // {path:'',component:},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
