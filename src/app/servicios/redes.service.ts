import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Redes } from '../model/redes';
import { PorfolioService } from './porfolio.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class RedesService {
  
  URL = 'https://porfoliogustavocatallini.onrender.com/redes/';

  constructor(private http: HttpClient, private tokenService: TokenService, private datosPorfolio: PorfolioService) { }

  public getRedes(): Observable<Redes[]> {
    if (this.tokenService.getAthorities().length != 0) {
      return this.http.get<Redes[]>(this.URL + 'traer');
    } else {
      return this.datosPorfolio.obtenerDatos();
    }
  }

  public detail(id: number): Observable<Redes> {
    return this.http.get<Redes>(this.URL + `detail/${id}`);
  }

  public save(redes: Redes): Observable<any> {
    return this.http.post<any>(this.URL + 'crear', redes);
  }

  public update(id: number, redes: Redes): Observable<any> {
    return this.http.put<any>(this.URL + `update/${id}`, redes);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(this.URL + `delete/${id}`);
  }
}
