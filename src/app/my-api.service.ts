import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyApiService {

  private baseURL = 'https://github.com/tomasscarpecci/backend-app.git'  //copio url del back

  constructor(private _httpClient: HttpClient) { }

  




}
