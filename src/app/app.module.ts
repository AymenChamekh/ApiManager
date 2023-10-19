import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { ListApisComponent } from './pages/list-apis/list-apis.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { SidenavComponent } from './pages/sidenav/sidenav.component';
import { ListApiByCategoryComponent } from './pages/list-api-by-category/list-api-by-category.component';
import { CreationComponent } from './pages/creation/creation.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { AddProviderComponent } from './pages/add-provider/add-provider.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryComponent,
    ListApisComponent,
    SidenavComponent,
    ListApiByCategoryComponent,
    CreationComponent,
    AddProviderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatDividerModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule

  ],
  providers: [provideAnimations()],
  bootstrap: [AppComponent]
})
export class AppModule { }
