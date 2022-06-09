import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss'],
})
export class CountDownComponent implements OnInit, OnDestroy {
  constructor() {}

  @Input() set dDay(dDay: Date) {
    this._dDay = dDay;
  }

  private subscription: Subscription = new Subscription();
  private _dDay: Date;
  private _dateNow: Date = new Date();
  private millisecondsInSeconds: number = 1000;
  private secondInMinute: number = 60;
  private minutesInHour: number = 60;
  private hoursInADay: number = 24;

  public timeDiff: number;
  public seconds: number;
  public minutes: number;
  public hours: number;
  public days: number;

  ngOnInit(): void {
    this.subscription.add(
      interval(1000).subscribe(() => {
        this.getTimeDiff();
      })
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private getTimeDiff(): void {
    this.timeDiff = new Date(this._dDay).getTime() - new Date().getTime();
    this.setTimeUnit(this.timeDiff);
  }

  private setTimeUnit(timeDiff: number): void {
    this.seconds = Math.floor(
      (timeDiff / this.millisecondsInSeconds) % this.secondInMinute
    );
    this.minutes = Math.floor(
      (timeDiff / (this.millisecondsInSeconds * this.minutesInHour)) %
        this.minutesInHour
    );
    this.hours = Math.floor(
      (timeDiff /
        (this.millisecondsInSeconds *
          this.minutesInHour *
          this.secondInMinute)) %
        this.hoursInADay
    );
    this.days = Math.floor(
      timeDiff /
        (this.millisecondsInSeconds *
          this.minutesInHour *
          this.secondInMinute *
          this.hoursInADay)
    );
  }
}
