import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { user } from 'src/app/model/user.model';
import { SwitchService } from 'src/app/servicios/switch.service';
import { TokenService } from 'src/app/servicios/token.service';
import { UserService } from 'src/app/servicios/user/user.service';

@Component({
  selector: 'app-card-perfil',
  templateUrl: './card-perfil.component.html',
  styleUrls: ['./card-perfil.component.css']
})
export class CardPerfilComponent implements OnInit {

  user: user = new user("", "", "", "", "", "", "");
  admin: boolean = false;
  isLogin: boolean = false;
  modalSwitch: boolean;
  banner: String = "../../../assets/img/Banner.jpg"
  errMsj!: string;

  constructor(
    public userService: UserService,
    private tokenService: TokenService,
    private modalss: SwitchService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    if (this.tokenService.getAthorities().includes("ROLE_ADMIN")) {
      this.admin = true;
    }
    if (this.tokenService.getToken()) {
      this.isLogin = true;
    }
    this.userService.getUser().subscribe(data => { 
      this.user = data 
    });

    this.cargarPerfil();
    this.modalss.$modal.subscribe((valor) => {
      this.modalSwitch = valor
      this.cargarPerfil();
    });
  }



  cargarPerfil(): void {
    this.userService.getUser().subscribe(data => { 
      this.user = data 
    })
  }

  open(content: any) {
    this.modalService.open(content);
  }
}
