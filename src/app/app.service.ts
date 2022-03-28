import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, VERSION } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private subject = new BehaviorSubject<string>('Angular');
  user$ = this.subject.asObservable();

  constructor() {}

  set user(name: string) {
    this.subject.next(name);
  }
}
