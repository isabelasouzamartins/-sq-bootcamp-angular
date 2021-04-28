import { DatePipe } from '@angular/common';
import { Task } from './../services/models/task.model';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-tests-datepipe',
  templateUrl: './datepipe.component.html',
  styleUrls: ['./datepipe.component.scss'],
})

export class DatepipeComponent implements OnInit {

  todayDate: Date = new Date();


  constructor() {
    class CommonModule {
    }
  }

  ngOnInit(): void {}

}
