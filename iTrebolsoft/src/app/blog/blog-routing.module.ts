import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog.component';
import { BlogEntryComponent } from './blog-entry/blog-entry.component';
import { BlogMainComponent } from './blog-main/blog-main.component';

const routes: Routes = [
  {
    path:'',
    component:BlogComponent,
    children:[
      // {
      //   path:'', redirectTo: '/blog', pathMatch: 'full'
      // },
      {
        path:'',
        component: BlogMainComponent
      },
      {
        path:':id',
        component:BlogEntryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
