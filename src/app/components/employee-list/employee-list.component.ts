import { Component, Input, OnInit } from '@angular/core';
import { SearchFilters } from 'src/app/models/enums/enums';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  public employees: Employee[];
  public filteredEmployees: Employee[];

  constructor(private empService: EmployeeService) {
    this.employees = this.filteredEmployees = [];
  }

  ngOnInit(): void {
    try {
      this.empService.loadEmployees().subscribe(result=>{
        this.employees = this.filteredEmployees = result;
      });
      this.empService.searchTextEmitter.subscribe((value) => {
        this.filteredEmployees = this.empService.searchData(
          value,
          SearchFilters.FirstName
        );
      });
    } catch (error) {
      console.log(error);
    }
  }
}
