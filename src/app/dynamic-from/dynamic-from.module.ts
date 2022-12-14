import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainformComponent } from './mainform/mainform.component';
import { ChildformComponent } from './childform/childform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: MainformComponent
  }
];
@NgModule({
  declarations: [
    MainformComponent,
    ChildformComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DynamicFromModule { }
