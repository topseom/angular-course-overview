import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyloadComponent } from './lazyload.component';
import { RouterModule,Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { HomeComponent } from './home/home.component';

const routes:Routes = [
  { 
    path:"",component:LazyloadComponent,
    children:[
      { path:"",component:HomeComponent},
      { path:"page1",component:Page1Component}
    ]
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LazyloadComponent, Page1Component, HomeComponent]
})
export class LazyloadModule { }
