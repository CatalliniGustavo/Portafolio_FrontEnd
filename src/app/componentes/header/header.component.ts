import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Redes } from 'src/app/model/redes';
import { RedesService } from 'src/app/servicios/redes.service';
import { SwitchService } from 'src/app/servicios/switch.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  admin: boolean = false;
  isLogin: boolean = false;
  redesList: Array<Redes>;
  modalSwitch: boolean;

  constructor(
    private redesService: RedesService,
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

    this.cargarRedes();

    this.modalss.$modal.subscribe((valor) => {
      this.modalSwitch = valor
      this.cargarRedes();
    });

  }

  cargarRedes(): void {
    this.redesService.getRedes().subscribe(data => { this.redesList = data })
  }

  delete(id?: number) {
    if (id != undefined) {
      this.redesService.delete(id).subscribe(
        data => {
          this.modalService.dismissAll();
          this.cargarRedes();
        }, err => {
          alert("No se pudo borrar la Red");
          this.modalService.dismissAll();
        }
      )
    }
  }

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

  open(content: any) {
    this.modalService.open(content);
  }


  cancel(){
    this.modalService.dismissAll();
  }

  openEdit(content: any, val: number){
    this.modalss.valor = val;
    this.modalService.open(content);
  }

}
