import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticalAddComponent } from './artical-add/artical-add.component';
import { ArticalListComponent } from './artical-list/artical-list.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path:'list',component: ArticalListComponent},
  { path:'add',component:ArticalAddComponent},
  { path:'header',component: HeaderComponent},
  { path:'search/:searchart',component: ArticalAddComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ArticalListComponent,ArticalAddComponent,HeaderComponent]