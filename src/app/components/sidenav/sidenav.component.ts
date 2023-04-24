import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SideNavComponent implements OnInit {
  public offices : Set<string>;
  public departments :Set<string>;
  public jobTitles:Set<string>;
  constructor(private empService:EmployeeService) {
    this.offices = new Set();
    this.departments = new Set();
    this.jobTitles = new Set();
    this.empService.EmployeeData.forEach(element => {
      this.offices.add(element.office.toString());
      this.departments.add(element.department.toString());
      this.jobTitles.add(element.jobTitle.toString());
    });
    
  }

  ngOnInit(): void {
  }

}
