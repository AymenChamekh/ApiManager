import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiDto } from 'src/app/entities/apiDto';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-list-api-by-category',
  templateUrl: './list-api-by-category.component.html',
  styleUrls: ['./list-api-by-category.component.css']
})
export class ListApiByCategoryComponent {
  id: number;
  apis: ApiDto[] = [];
  api: ApiDto = new ApiDto();
  searchKey: string;
  displayedColumns = [ 'nameApi', 'State', 'Type', 'Version', 'Name Provider', 'actions'];

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  datasource: MatTableDataSource<any>;

  constructor(private apiService: ApiService, private router: Router,private activatedRoute:ActivatedRoute) {}

  ngOnInit() {

    this.getApisByCategory();
  }
     getApisByCategory(){
      this.id = this.activatedRoute.snapshot.params['id'];
      this.apiService.getApisByCategory(this.id).subscribe((response: any) => {
      this.datasource = new MatTableDataSource(response);
      this.datasource.paginator = this.paginator;
      this.datasource.sort = this.matSort;
      console.log(this.datasource);
    });}

  deleteApi(id: number) {
    let conf = confirm("Etes-vous sur?");
    if (conf) {
      this.apiService.deleteApi(id).subscribe(() => {
        alert("Api deleted");
        this.apis = this.apis.filter(api => api.idApi !== id);
        this.datasource.data = this.datasource.data.filter(api => api.idApi !== id);
      });
    }
  }

  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }

  applyFilter() {
    this.datasource.filter = this.searchKey.trim().toLowerCase();
  }

}
