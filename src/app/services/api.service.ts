import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Api } from '../entities/api';
import { Observable } from 'rxjs';
import { ApiDto } from '../entities/apiDto';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http : HttpClient) {

  }
  public addApi(data : Api):Observable<any>{
    return this.http.post(`${this.apiServerUrl}/api/add`,data);}

  public getApis(): Observable<ApiDto[]>{
      return this.http.get<ApiDto[]>(`${this.apiServerUrl}/api/findAll`); }

  public deleteApi(id : number):Observable<any>{
    return this.http.delete(`${this.apiServerUrl}/api/delete/${id}`);
  }
  public updateApi(data : Api):Observable<any>{
    return this.http.put(`${this.apiServerUrl}/api/update/${data}`,data);}

    public getApi(id : number): Observable<any>{
      return this.http.get<ApiDto>(`${this.apiServerUrl}/api/find/${id}`); }
      public getApisByCategory(id :number): Observable<ApiDto[]>{
        return this.http.get<ApiDto[]>(`${this.apiServerUrl}/api/findByCategory/${id}`); }
}
