import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/dataservice';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public employees : string[];
  constructor() { 
    this.employees = new DataService().employee;
  }

  ngOnInit(): void {
  }

}
