import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loadingSubject = new BehaviorSubject<boolean>(true);
  public loading$ = this.loadingSubject.asObservable();

  constructor() { }

  colornav: boolean = true;


  loadNavbar(val: boolean){
    this.loadingSubject.next(val)
  }




}
