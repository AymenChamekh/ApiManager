import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../entities/category';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http : HttpClient) { }

  public addCategory(data : Category){
    this.http.post(`${this.apiServerUrl}/Category/add`,data);
  }
}
