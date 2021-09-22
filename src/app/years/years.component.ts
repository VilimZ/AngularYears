import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-years',
  templateUrl: './years.component.html',
  styleUrls: ['./years.component.css']
})
export class YearsComponent implements OnInit {
  errorLabel = false;
  yearsResult = 0;
  yearsOfBirth = 0;
  calendarYear = 0;
  resultVisible = false;
  constructor() {


  }

  ngOnInit(): void {
  }
  onCalculateYears() {
    if ((this.yearsOfBirth > 1899 && this.yearsOfBirth < 3001) && (this.calendarYear > 1899 && this.calendarYear < 3001)) {
      this.yearsResult = this.calendarYear - this.yearsOfBirth;
      this.resultVisible = true;
      this.errorLabel = false;
    }else{
      this.errorLabel = true;
    }


  }

}
