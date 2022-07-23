import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SwitchService {

  $modal = new EventEmitter<any>();
  valor: number ;
  tof: boolean;

}
