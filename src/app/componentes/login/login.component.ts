import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUsuario;
  email!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;
  sub = false;

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

  onLogin(): void {
    
    if (!this.email.includes("@") || !this.email.includes(".")) {
      this.errMsj = "Email mal ingrezado"
    } else if (this.password.length != 8) {
      this.errMsj = "Tamaño de la contraseña incorrecto"
    } else {

      this.loginUsuario = new LoginUsuario(this.email, this.password);

      this.sub = true;
      this.errMsj = "...Espere porfavor, la primer ves pude tardar..."

      this.authService.login(this.loginUsuario).subscribe(data => {

        this.isLogged = true;
        this.isLogginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.email);
        this.tokenService.setAthorities(data.authorities);
        this.roles = data.authorities;
        window.location.reload();
        this.modalService.dismissAll();

      }, err => {

        this.sub = false;
        this.isLogged = false;
        this.isLogginFail = true;
        this.errMsj = err.error.message;
        
        if (err.error.mensaje != undefined) {
          this.errMsj = err.error.mensaje
        } else if (this.errMsj == undefined) {
          this.errMsj = "Error al conectar con el servidor"
        } 

      })
    }
  }

  cancel() {
    this.modalService.dismissAll();
  }

}
