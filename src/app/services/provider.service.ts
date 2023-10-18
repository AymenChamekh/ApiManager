import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Provider } from '../entities/provider';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http : HttpClient) { }

  public addProvider(data : Provider):Observable<any>{
    return this.http.post(`${this.apiServerUrl}/provider/add`,data);}

  public getProviders(): Observable<Provider[]>{
      return this.http.get<Provider[]>(`${this.apiServerUrl}/provider/findAll`); }

  public deleteProvider(id : number):Observable<any>{
    return this.http.delete(`${this.apiServerUrl}/provider/delete/${id}`);
  }
  public updateProvider(data : Provider):Observable<any>{
    return this.http.put(`${this.apiServerUrl}/provider/update/${data}`,data);}

    public getProvider(id : number): Observable<any>{
      return this.http.get<Provider>(`${this.apiServerUrl}/provider/find/${id}`); }
}
