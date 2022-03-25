import { AfterViewInit, Component, OnInit, VERSION } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private appService: AppService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.appService.user = 'New Angular';
    }, 2000);
  }

  getName() {
    return this.appService.user$;
  }
}
