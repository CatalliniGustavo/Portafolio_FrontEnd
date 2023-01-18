import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hblandas } from '../model/hblandas';
import { PorfolioService } from './porfolio.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class HblandasService {
  
  URL = 'https://porfoliogustavocatallini.onrender.com/hblandas/';

  constructor(private http: HttpClient, private tokenService: TokenService, private datosPorfolio: PorfolioService) { }

  public getHblandas(): Observable<Hblandas[]> {
    if (this.tokenService.getAthorities().length != 0) {
      return this.http.get<Hblandas[]>(this.URL + 'traer');
    } else {
      return this.datosPorfolio.obtenerDatos();
    }
  }

  public detail(id: number): Observable<Hblandas> {
    return this.http.get<Hblandas>(this.URL + `detail/${id}`);
  }

  public save(hblandas: Hblandas): Observable<any> {
    return this.http.post<any>(this.URL + 'crear', hblandas);
  }

  public update(id: number, hblandas: Hblandas): Observable<any> {
    return this.http.put<any>(this.URL + `update/${id}`, hblandas);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(this.URL + `delete/${id}`);
  }
}
