import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SearchFilters } from '../models/enums/enums';
import { Employee } from '../models/employee';
import { ApiService } from './api.service';
import { ApiConfig } from '../config/apiconfig';
@Injectable()
export class EmployeeService {
  public searchTextEmitter: Subject<string>;
  public EmployeeData: Employee[];
  constructor(private apiService: ApiService, private apiConfig: ApiConfig) {
    this.EmployeeData = [];
    this.searchTextEmitter = new Subject<string>();
  }

  raiseSearchTextEmitter(keyword: string) {
    this.searchTextEmitter.next(keyword);
  }

  loadEmployees() {
    return this.apiService
      .get(
        this.apiConfig.API_ENDPOINT + 'Employee/getAllEmp',
        this.apiConfig.prepareDefaultHeaders()
      );
  }

  
}
