import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttonsfilter',
  templateUrl: './buttonsfilter.component.html',
  styleUrls: ['./buttonsfilter.component.css']
})
export class ButtonsfilterComponent implements OnInit {
  public alphabets =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","Q","R","S","T","U","V","W","X","Y","Z"]
  constructor() { }

  ngOnInit(): void {
  }

}
