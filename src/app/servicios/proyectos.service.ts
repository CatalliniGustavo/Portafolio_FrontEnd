import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../model/proyectos';
import { PorfolioService } from './porfolio.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  
  URL = 'https://porfoliogustavocatallini.onrender.com/proyectos/';

  constructor(private http: HttpClient, private tokenService: TokenService, private datosPorfolio: PorfolioService) { }

  public getProyectos(): Observable<Proyectos[]> {
    if (this.tokenService.getAthorities().length != 0) {
      return this.http.get<Proyectos[]>(this.URL + 'traer');
    } else {
      return this.datosPorfolio.obtenerDatos();
    }
  }

  public detail(id: number): Observable<Proyectos> {
    return this.http.get<Proyectos>(this.URL + `detail/${id}`);
  }

  public save(proyectos: Proyectos): Observable<any> {
    return this.http.post<any>(this.URL + 'crear', proyectos);
  }

  public update(id: number, proyectos: Proyectos): Observable<any> {
    return this.http.put<any>(this.URL + `update/${id}`, proyectos);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(this.URL + `delete/${id}`);
  }
}
