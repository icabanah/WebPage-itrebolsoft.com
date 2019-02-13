import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogSidebarComponent } from './blog-sidebar/blog-sidebar.component';
import { BlogComponent } from './blog.component';
import { BlogEntryComponent } from './blog-entry/blog-entry.component';
import { BlogMainComponent } from './blog-main/blog-main.component';
import { BlogContaintComponent } from './blog-containt.component';

@NgModule({
  declarations: [BlogSidebarComponent, BlogComponent, BlogEntryComponent, BlogMainComponent, BlogContaintComponent],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
