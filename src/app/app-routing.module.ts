import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryComponent } from './pages/category/category.component';
import { CategoryServiceService } from './services/category-service.service';
import { ListApisComponent } from './pages/list-apis/list-apis.component';
import { ListApiByCategoryComponent } from './pages/list-api-by-category/list-api-by-category.component';

const routes: Routes = [
  {path : "category" , component :CategoryComponent },
  {path : "listApis" , component :ListApisComponent },
  {path : "listApisByCategory/:id" , component :ListApiByCategoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[CategoryServiceService]
})
export class AppRoutingModule { }
