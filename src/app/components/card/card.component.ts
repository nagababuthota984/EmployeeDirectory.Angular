import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { Department, JobTitle } from 'src/app/models/enums/enums';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() public employee!: Employee;
  empName: string;
  empJobTitle: string;
  empDept: string;
  constructor() {
    this.empName = '';
    this.empDept = '';
    this.empJobTitle = '';
  }

  ngOnInit(): void {
    this.empName = this.employee?.preferredName;
    this.empDept = Department[this.employee?.department];
    this.empJobTitle = JobTitle[this.employee?.jobTitle];
  }
}
