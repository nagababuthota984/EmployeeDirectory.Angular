import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { DataService } from 'src/app/services/data.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public employees: Array<Employee>;
  public employeeService: EmployeeService;
  public dataService:DataService;

  constructor(empService: EmployeeService, dataService: DataService) {
    this.employeeService = empService;
    this.dataService =  dataService;
    this.employees = dataService.EmployeeData;

  }

  ngOnInit(): void {
  }

}
