import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { SearchFilters } from "../enums/enums";
import { Employee } from "../models/employee";
import { DataService } from "./data.service";
@Injectable()
export class EmployeeService {
    public searchTextEmitter = new Subject<string>();
    constructor(private dataService:DataService){
    }

    raiseSearchTextEmitter(keyword:string)
    {
        this.searchTextEmitter.next(keyword);
    }

    searchData(searchText: string, filterBy: SearchFilters): Employee[] {
        switch (filterBy) {
            case SearchFilters.FirstName:
                return this.dataService.EmployeeData.filter(emp => emp.FirstName.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
            case SearchFilters.LastName:
                return this.dataService.EmployeeData.filter(emp=> emp.LastName.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
            case SearchFilters.Department:
                return this.dataService.EmployeeData.filter(emp=> emp.Department.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
            case SearchFilters.JobTitle:
                return this.dataService.EmployeeData.filter(emp=> emp.JobTitle.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
        }
        return new DataService().EmployeeData.filter(emp => emp.PreferredName.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
    }
}