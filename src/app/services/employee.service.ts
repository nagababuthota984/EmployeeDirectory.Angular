import { Injectable } from "@angular/core";
import { filter } from "rxjs";
import { SearchFilters } from "../enums/enums";
import { Employee } from "../models/employee";
import { DataService } from "./data.service";
@Injectable()
export class EmployeeService {

    searchData(searchText: string, filterBy: SearchFilters): Employee[] {
        switch (filterBy) {
            case SearchFilters.FirstName:
                return new DataService().EmployeeData.filter(emp => emp.FirstName.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
            case SearchFilters.LastName:
                return new DataService().EmployeeData.filter(emp=> emp.LastName.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
            case SearchFilters.Department:
                return new DataService().EmployeeData.filter(emp=> emp.Department.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
            case SearchFilters.JobTitle:
                return new DataService().EmployeeData.filter(emp=> emp.JobTitle.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
        }
        return new DataService().EmployeeData.filter(emp => emp.PreferredName.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
    }
}