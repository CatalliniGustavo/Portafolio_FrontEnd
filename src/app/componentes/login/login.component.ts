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
    this.loginUsuario = new LoginUsuario(this.email, this.password);
    this.authService.login(this.loginUsuario).subscribe(data => {
      this.isLogged = true;
      this.isLogginFail = false;
      this.tokenService.setToken(data.token);
      this.tokenService.setUserName(data.email);
      this.tokenService.setAthorities(data.authorities);
      this.roles = data.authorities;
      window.location.reload();
      this.modalService.dismissAll();
    }, err =>{
      this.isLogged = false;
      this.isLogginFail = true;
      this.errMsj = err.error.mensaje;
      alert(this.errMsj);
      console.log(this.errMsj);
      
    })
  }

  cancel(){
    this.modalService.dismissAll();
  }

}
