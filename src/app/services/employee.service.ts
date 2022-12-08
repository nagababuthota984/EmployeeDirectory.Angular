import { Injectable } from "@angular/core";
import { filter } from "rxjs";
import { Employee } from "../models/employee";
import { DataService } from "./data.service";
@Injectable()
export class EmployeeService {
    
    searchData(searchText: string, filterBy: string): Array<Employee> {
        switch (filterBy) {
            case "Firstname":
                return new DataService().EmployeeData.filter(emp => emp.FirstName.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
            case "Lastname":
                return new DataService().EmployeeData.filter(emp=> emp.LastName.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
            case "Department":
                return new DataService().EmployeeData.filter(emp=> emp.Department.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
            case "JobTitle":
                return new DataService().EmployeeData.filter(emp=> emp.JobTitle.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
        }
        return new DataService().EmployeeData.filter(emp => emp.PreferredName.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
    }
}