import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  VERSION,
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();
  name = '';
  constructor(private appService: AppService) {}

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.appService.user = 'New Angular';
    }, 2000);

    this.appService.user$.pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => (this.name = res),
    });
  }
}
