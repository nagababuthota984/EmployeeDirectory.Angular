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

  constructor(private empService: EmployeeService, private dataService: DataService) {
    this.filteredEmployees = this.employees = dataService.EmployeeData;
  }
  
  ngOnInit(): void {
    this.empService.searchTextEmitter.subscribe((value)=>{
      this.filteredEmployees = this.empService.searchData(value,SearchFilters.FirstName);
    });
  }

}
