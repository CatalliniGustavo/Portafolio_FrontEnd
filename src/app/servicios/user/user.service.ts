import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { user } from 'src/app/model/user.model';
import { PorfolioService } from '../porfolio.service';
import { TokenService } from '../token.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL = 'https://ancient-ocean-71608.herokuapp.com/user/';

  constructor(private http: HttpClient,private tokenService: TokenService, private datosPorfolio: PorfolioService) { }


  public getUser(): Observable<user> {
    if(this.tokenService.getAthorities().length != 0){
      return  this.http.get<user>(this.URL + 'traer/perfil');
    }else{
      return this.datosPorfolio.obtenerDatos();
    }
  }

  public detail(): Observable<user> {
    return this.http.get<user>(this.URL + 'traer/perfil');
  }

  public save(user: user): Observable<any> {
    return this.http.post<any>(this.URL + 'crear', user);
  }

  public update(user: user): Observable<any> {
    return this.http.put<any>(this.URL + 'update', user);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(this.URL + `delete/${id}`);
  }
}
