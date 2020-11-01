import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  currentMonth: number;
  requestedMonth: number;
  @Output() pagingEvent = new EventEmitter();

  constructor() {
    this.currentMonth = new Date().getUTCMonth() + 1;
    this.requestedMonth = this.currentMonth;
  }

  ngOnInit() {
    this.pagingEvent.emit(this.requestedMonth);
  }
  event() {
    this.pagingEvent.emit(this.requestedMonth);
  }

  previousMonth() {
    if (this.requestedMonth > 1) {
      this.requestedMonth -= 1;
      this.pagingEvent.emit(this.requestedMonth);
    }

  }

  nextMonth() {
    if (this.requestedMonth < 12) {
      this.requestedMonth += 1;
      this.pagingEvent.emit(this.requestedMonth);
    }
  }

  curMonth() {
    this.requestedMonth = this.currentMonth;
    this.pagingEvent.emit(this.requestedMonth);
  }



}
