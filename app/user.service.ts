import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userName: BehaviorSubject<string> = new BehaviorSubject('Guest');
  constructor() { }
  setName(val: string): void {
    this.userName.next(val);
  }
  getName() {
    return this.userName.asObservable();
  }
}
