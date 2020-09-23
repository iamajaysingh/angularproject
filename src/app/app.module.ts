import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule } from '@angular/common/http';
import { TodoComponent } from './todo/todo.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MyDayComponent } from './list/my-day/my-day.component';
import { RegisterationComponent } from './registeration/registeration.component';
import {HashLocationStrategy,LocationStrategy} from '@angular/common'
import { LoginGuard } from './validation/login-guard';
import { UnsavedChangesGuard } from './validation/unsaved-changes-guard';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodoComponent,
    LoginComponent,
    MyDayComponent,
    RegisterationComponent,
    
  ],
  imports: [
    BrowserModule,
     AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    
  ],
  providers: [{provide:LocationStrategy,useClass:HashLocationStrategy},LoginGuard,UnsavedChangesGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
