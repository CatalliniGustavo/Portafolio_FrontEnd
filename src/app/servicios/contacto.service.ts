import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacto } from '../model/contacto';
import { PorfolioService } from './porfolio.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  URL = 'https://porfoliogustavocatallini.onrender.com/contacto/';

  constructor(private http: HttpClient, private tokenService: TokenService, private datosPorfolio: PorfolioService) { }

  public getContacto(): Observable<Contacto[]> {
    if (this.tokenService.getAthorities().length != 0) {
      return this.http.get<Contacto[]>(this.URL + 'traer');
    } else {
      return this.datosPorfolio.obtenerDatos();
    }
  }

  public detail(id: number): Observable<Contacto> {
    return this.http.get<Contacto>(this.URL + `detail/${id}`);
  }

  public save(contacto: Contacto): Observable<any> {
    return this.http.post<any>(this.URL + 'crear', contacto);
  }

  public update(id: number, contacto: Contacto): Observable<any> {
    return this.http.put<any>(this.URL + `update/${id}`, contacto);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(this.URL + `delete/${id}`);
  }
}
