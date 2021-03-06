import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { DataComponent } from './data/data.component';



const routes: Routes = [
  {
    path:'',
    component:FormComponent
  },
  {
    path:'datalink',
    component:DataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
