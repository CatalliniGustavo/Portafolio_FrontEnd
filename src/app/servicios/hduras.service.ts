import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hduras } from '../model/hduras';
import { PorfolioService } from './porfolio.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class HdurasService {
  
  URL = 'http://localhost:8080/hduras/';

  constructor(private http: HttpClient, private tokenService: TokenService, private datosPorfolio: PorfolioService) { }

  public getHduras(): Observable<Hduras[]> {
    if (this.tokenService.getAthorities().length != 0) {
      return this.http.get<Hduras[]>(this.URL + 'traer');
    } else {
      return this.datosPorfolio.obtenerDatos();
    }
  }

  public detail(id: number): Observable<Hduras> {
    return this.http.get<Hduras>(this.URL + `detail/${id}`);
  }

  public save(hduras: Hduras): Observable<any> {
    return this.http.post<any>(this.URL + 'crear', hduras);
  }

  public update(id: number, hduras: Hduras): Observable<any> {
    return this.http.put<any>(this.URL + `update/${id}`, hduras);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(this.URL + `delete/${id}`);
  }
}