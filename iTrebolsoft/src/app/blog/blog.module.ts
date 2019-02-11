import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogContentComponent } from './blog-content/blog-content.component';
import { BlogSidebarComponent } from './blog-sidebar/blog-sidebar.component';
import { BlogComponent } from './blog.component';

@NgModule({
  declarations: [BlogContentComponent, BlogSidebarComponent, BlogComponent],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
