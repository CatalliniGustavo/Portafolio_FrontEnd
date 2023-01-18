import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';
import { PorfolioService } from './porfolio.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
    URL = 'https://porfoliogustavocatallini.onrender.com/educacion/';

  constructor(private http: HttpClient, private tokenService: TokenService, private datosPorfolio: PorfolioService) { }

  public getEducacion(): Observable<Educacion[]> {
    if (this.tokenService.getAthorities().length != 0) {
      return this.http.get<Educacion[]>(this.URL + 'traer');
    } else {
      return this.datosPorfolio.obtenerDatos();
    }
  }

  public detail(id: number): Observable<Educacion> {
    return this.http.get<Educacion>(this.URL + `detail/${id}`);
  }

  public save(educacion: Educacion): Observable<any> {
    return this.http.post<any>(this.URL + 'crear', educacion);
  }

  public update(id: number, educacion: Educacion): Observable<any> {
    return this.http.put<any>(this.URL + `update/${id}`, educacion);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(this.URL + `delete/${id}`);
  }
}
