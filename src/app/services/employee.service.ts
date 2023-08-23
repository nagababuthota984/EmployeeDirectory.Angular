import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Department, JobTitle, Office, SearchFilters } from '../models/enums/enums';
import { Employee } from '../models/employee';
import { ApiService } from './api.service';
import { ApiConfig } from '../config/apiconfig';
import { Details } from '../models/details';
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

  getEmployees() {
    return this.apiService
      .get<Employee[]>(
        this.apiConfig.API_ENDPOINT + `employees`,
        this.apiConfig.prepareDefaultHeaders()
      );
  }
  getOffices(){
    return this.apiService.get<Details<Office>[]>(this.apiConfig.API_ENDPOINT+`offices`,this.apiConfig.prepareDefaultHeaders());
  }
  getDepartments(){
    return this.apiService.get<Details<Department>[]>(this.apiConfig.API_ENDPOINT+`departments`,this.apiConfig.prepareDefaultHeaders());
  }
  getJobTitles(){
    return this.apiService.get<Details<JobTitle>[]>(this.apiConfig.API_ENDPOINT+`jobtitles`,this.apiConfig.prepareDefaultHeaders());
  }
}
