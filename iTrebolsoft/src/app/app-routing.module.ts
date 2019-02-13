import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'',
    loadChildren: './layout/layout.module#LayoutModule'
  },
  {
    path:'admin',
    loadChildren: './admin/admin.module#AdminModule'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'blog',
    loadChildren: './blog/blog.module#BlogModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
