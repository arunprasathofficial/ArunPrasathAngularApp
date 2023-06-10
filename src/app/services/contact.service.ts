import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  isDone:boolean = false;

  constructor() { }

  sendData(data: any) {
    this.isDone = true
    console.log(data);
  }
}
