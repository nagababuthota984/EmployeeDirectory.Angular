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
      this.empService.loadEmployees().subscribe(result => {
        this.employees = this.filteredEmployees = result;
      });
      this.empService.searchTextEmitter.subscribe((value) => {
        this.filteredEmployees = this.searchData(
          value,
          SearchFilters.PreferredName
        );
      });
    } catch (error) {
      console.log(error);
    }
  }

  searchData(searchText: string, filterBy: SearchFilters): Employee[] {
    if (searchText!=="") {
      switch (filterBy) {
        case SearchFilters.FirstName:
          return this.employees.filter((emp) =>
            emp.firstName.toLocaleLowerCase().includes(
              searchText.toLocaleLowerCase()
            )
          );
        case SearchFilters.LastName:
          return this.employees.filter((emp) =>
            emp.lastName.toLocaleLowerCase().includes(
              searchText.toLocaleLowerCase()
            )
          );
        case SearchFilters.PreferredName:
          return this.employees.filter((emp) =>
            emp.preferredName.toLocaleLowerCase().includes(
              searchText.toLocaleLowerCase()
            )
          );
        case SearchFilters.Department:
          return this.employees.filter((emp) =>
            emp.department.toString()
              .toLocaleLowerCase()
              .includes(searchText.toLocaleLowerCase())
          );
        case SearchFilters.JobTitle:
          return this.employees.filter((emp) =>
            emp.jobTitle.toString()
              .toLowerCase()
              .includes(searchText.toLocaleLowerCase())
          );
      }
      return this.employees.filter((emp) =>
        emp.preferredName.toLocaleLowerCase().includes(
          searchText.toLocaleLowerCase()
        )
      );
    }
    return this.employees;
  }
}
