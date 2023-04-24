import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable()
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  public get(url: string, options?: any) {
    return this.httpClient.get<Employee[]>(url);
  }

  public post(url: string, data: any, options?: any) {
    return this.httpClient.post(url, data, options);
  }
  public put(url: string, data: any, options?: any) {
    return this.httpClient.put(url, data, options);
  }
  public delete(url: string, options?: any) {
    return this.httpClient.delete(url, options);
  }
}
