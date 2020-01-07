import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  readonly totalSubject: BehaviorSubject<number> = new BehaviorSubject(0);
  readonly total$ = this.totalSubject.asObservable();

  constructor() { }

  updateTotal(value: number) {
    this.totalSubject.next(value);
  }
}
