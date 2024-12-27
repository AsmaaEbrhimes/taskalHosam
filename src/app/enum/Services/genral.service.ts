import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenralService {

  constructor() { }
  $ShowDilog = new BehaviorSubject<boolean>(false);


}
