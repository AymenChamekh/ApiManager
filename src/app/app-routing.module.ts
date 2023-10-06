import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryComponent } from './pages/category/category.component';
import { CategoryServiceService } from './services/category-service.service';

const routes: Routes = [
  {path : "category" , component :CategoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[CategoryServiceService]
})
export class AppRoutingModule { }
