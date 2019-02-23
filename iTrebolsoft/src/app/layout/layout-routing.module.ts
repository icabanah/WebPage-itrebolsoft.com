import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
// import { LoginComponent } from '../blog/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '', redirectTo: '/blog', pathMatch: 'full'
      },
      {
        path: 'blog',
        loadChildren: '../blog/blog.module#BlogModule'
      },
      {
        path: 'portafolio',
        loadChildren: '../portafolio/portafolio.module#PortafolioModule'
      },
      {
        path: 'perfil',
        loadChildren: '../perfil/perfil.module#PerfilModule'
      },
      {
        path: 'contacto',
        loadChildren: '../contacto/contacto.module#ContactoModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
