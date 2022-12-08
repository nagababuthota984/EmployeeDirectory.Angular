import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  public offices : Set<string>;
  public departments :Set<string>;
  public jobTitles:Set<string>;
  constructor() {
    this.offices = new Set();
    this.departments = new Set();
    this.jobTitles = new Set();
    new DataService().EmployeeData.forEach(element => {
      this.offices.add(element.Office);
      this.departments.add(element.Department);
      this.jobTitles.add(element.JobTitle);
    });
    
  }

  ngOnInit(): void {
  }

}
