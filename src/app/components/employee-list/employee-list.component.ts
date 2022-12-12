import { Component, Input, OnInit } from '@angular/core';
import { SearchFilters } from 'src/app/enums/enums';
import { Employee } from 'src/app/models/employee';
import { DataService } from 'src/app/services/data.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public employees: Employee[];
  public filteredEmployees: Employee[];
  public employeeService: EmployeeService;
  public dataService:DataService;
  @Input('searchKeyword') public searchText! : string;
  constructor(empService: EmployeeService, dataService: DataService) {
    this.employeeService = empService;
    this.dataService =  dataService;
    this.filteredEmployees = this.employees = dataService.EmployeeData;

  }

  ngOnChanges():void{
    if(this.searchText.length!=0)
      this.filteredEmployees = this.employeeService.searchData(this.searchText,SearchFilters.FirstName);
    else
      this.filteredEmployees = this.employees;
  }
  ngOnInit(): void {
  }

}
