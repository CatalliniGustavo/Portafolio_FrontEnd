import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';
import { PorfolioService } from './porfolio.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  URL = 'https://ancient-ocean-71608.herokuapp.com/experiencia/';

  constructor(private http: HttpClient,private tokenService: TokenService, private datosPorfolio: PorfolioService) { }

  public getExperiencia(): Observable<Experiencia[]> {
    if(this.tokenService.getAthorities().length != 0){
      return  this.http.get<Experiencia[]>(this.URL + 'traer');
    }else{
      return this.datosPorfolio.obtenerDatos();
    }
  }

  public detail(id: number): Observable<Experiencia>{
    return this.http.get<Experiencia>(this.URL + `detail/${id}`);
  }

  public save(experiencia: Experiencia): Observable<any>{
    return this.http.post<any>(this.URL + 'crear', experiencia);
  }

  public update(id: number, experiencia: Experiencia): Observable<any>{
    return this.http.put<any>(this.URL + `update/${id}`, experiencia);
  }

  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.URL + `delete/${id}`);
  }
}
