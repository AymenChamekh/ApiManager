import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../entities/category';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root'})
export class CategoryServiceService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http : HttpClient) { }

  public addCategory(data : Category):Observable<any>{
    return this.http.post(`${this.apiServerUrl}/category/add`,data);
  }
  public getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(`${this.apiServerUrl}/category/findAll`);
  }
}
