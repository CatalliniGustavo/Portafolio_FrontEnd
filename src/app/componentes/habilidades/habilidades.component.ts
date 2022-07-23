import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Hblandas } from 'src/app/model/hblandas';
import { Hduras } from 'src/app/model/hduras';
import { HblandasService } from 'src/app/servicios/hblandas.service';
import { HdurasService } from 'src/app/servicios/hduras.service';
import { SwitchService } from 'src/app/servicios/switch.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  admin: boolean = false;
  isLogin: boolean = false;
  hblandasl: Array<Hblandas> = [];
  hdurasl: Array<Hduras> = [];
  modalSwitch: boolean;

  constructor(
    public hblandasService: HblandasService,
    public hdurasService: HdurasService,
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

    this.cargarHblandas();
    this.cargarHduras();
    this.modalss.$modal.subscribe((valor) => {
      this.modalSwitch = valor
      this.cargarHblandas();
      this.cargarHduras();
    });

  }

  cargarHblandas(): void {
    this.hblandasService.getHblandas().subscribe(data => { this.hblandasl = data })
  }
  cargarHduras(): void {
    this.hdurasService.getHduras().subscribe(data => { this.hdurasl = data })
  }

  deleteHb(id?: number) {
    if (id != undefined) {
      this.hblandasService.delete(id).subscribe(
        data => {
          this.modalService.dismissAll();
          this.cargarHblandas();
        }, err => {
          alert("No se pudo borrar la Hblandas");
          this.modalService.dismissAll();
        }
      )
    }
  }
  deleteHd(id?: number) {
    if (id != undefined) {
      this.hdurasService.delete(id).subscribe(
        data => {
          this.modalService.dismissAll();
          this.cargarHduras();
        }, err => {
          this.modalService.dismissAll();
          alert("No se pudo borrar la Hduras");
        }
      )
    }
  }

  openHb(content: any) {
    this.modalService.open(content);
  }

  openHd(content: any) {
    this.modalService.open(content);
  }

  cancel(){
    this.modalService.dismissAll();
  }

  openEditHb(content: any, val: number){
    this.modalss.valor = val;
    this.modalService.open(content);
  }

  openEditHd(content: any, val: number){
    this.modalss.valor = val;
    this.modalService.open(content);
  }
  
}
