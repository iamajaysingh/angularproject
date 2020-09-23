import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyDayComponent } from './list/my-day/my-day.component';
import { LoginComponent } from './login/login.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { LoginGuard } from './validation/login-guard';
import { UnsavedChangesGuard } from './validation/unsaved-changes-guard';


const routes: Routes = [
 {path:'',component:LoginComponent},
    // 
  {path:'login',component:LoginComponent
},
  {path:'welcome/:name',component:HomeComponent,canActivate:[LoginGuard],canDeactivate:[UnsavedChangesGuard]},
  {path:'register',component:RegisterationComponent},
  {path:'myday', component:MyDayComponent},
  {path:'**',component:LoginComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
