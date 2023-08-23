import { Component, OnInit } from '@angular/core';
import { Details } from 'src/app/models/details';
import { Office, Department, JobTitle } from 'src/app/models/enums/enums';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SideNavComponent implements OnInit {
  public offices: Details<Office>[];
  public departments: Details<Department>[];
  public jobTitles: Details<JobTitle>[];
  constructor(private empService: EmployeeService) {
    this.offices = [];
    this.departments = [];
    this.jobTitles = [];
  }

  ngOnInit(): void {
    this.empService.getOffices().subscribe(result => {
      this.offices = result;
    });
    this.empService.getDepartments().subscribe(result => {
      this.departments = result;
    });
    this.empService.getJobTitles().subscribe(result => {
      this.jobTitles = result;
    });
  }

}
