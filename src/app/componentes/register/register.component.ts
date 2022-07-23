import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NuevoUsuario } from 'src/app/model/nuevo-usuario';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isLogged = false;
  isLogginFail = false;
  nuevoUsuario!: NuevoUsuario;
  nombre!: string;
  apellido!: string;
  email!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    private modalService: NgbModal
    ) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAthorities();
    }
  }

  onRegist(): void {
    this.nuevoUsuario = new NuevoUsuario(this.nombre, this.email, this.apellido, this.password);
    this.authService.nuevo(this.nuevoUsuario).subscribe(data => {
      this.isLogged = true;
      this.isLogginFail = false;
      this.tokenService.setToken(data.token);
      this.tokenService.setUserName(data.email);
      this.tokenService.setAthorities(data.authorities);
      this.roles = data.authorities;
      window.location.reload();
      this.modalService.dismissAll();
    }, err => {
      this.isLogged = false;
      this.isLogginFail = true;
      this.errMsj = err.error.mensaje;
      console.log(this.errMsj);

    })
  }

  cancel(){
    this.modalService.dismissAll();
  }
}
