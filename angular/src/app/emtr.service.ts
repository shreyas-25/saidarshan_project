import { Injectable, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmtrService {

  @Output() fire: EventEmitter<any>=new EventEmitter();
  constructor() { }

  logInBtnSwitch(value){
    this.fire.emit(value);
  }

  getEmmitedValueForLogbtnSwitch()
  {
    return this.fire;
  }

  // roleStatusSwitch(value){
  //   this.fire.emit(value);
  // }

  // getEmmitedValueForRoleStatusSwitch()
  // {
  //   return this.fire;
  // }
}
