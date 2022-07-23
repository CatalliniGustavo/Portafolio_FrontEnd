import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Contacto } from 'src/app/model/contacto';
import { Redes } from 'src/app/model/redes';
import { ContactoService } from 'src/app/servicios/contacto.service';
import { RedesService } from 'src/app/servicios/redes.service';
import { SwitchService } from 'src/app/servicios/switch.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-edit-redes',
  templateUrl: './edit-redes.component.html',
  styleUrls: ['./edit-redes.component.css']
})
export class EditRedesComponent implements OnInit {

  admin: boolean = false;
  isLogin: boolean = false;
  redesList: Array<Redes>;
  contactosList: Array<Contacto>;
  modalSwitch: boolean;
  
  constructor(
    private redesService: RedesService,
    private contactosService: ContactoService,
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
    this.redesService.getRedes().subscribe(data => { this.redesList = data });
    this.contactosService.getContacto().subscribe(data => { this.contactosList = data });
  }

  delete(content: any, id?: number) {
    if (id != undefined) {
      this.redesService.delete(id).subscribe(
        data => {
          this.cancel(content);
        }, err => {
          alert("No se pudo borrar la Red");
          this.cancel(content);
        }
      )
    }
  }

  deleteC(content: any, id?: number) {
    if (id != undefined) {
      this.contactosService.delete(id).subscribe(
        data => {
          this.cancel(content);
        }, err => {
          alert("No se pudo borrar el Contacto");
          this.cancel(content);
        }
      )
    }
  }

  open(content: any) {
    this.modalService.open(content);
  }


  cancel(content: any){
    this.modalService.dismissAll();
    this.modalService.open(content);
  }

  salir(){
    this.modalService.dismissAll();
    window.location.reload();
  }
  
  openEdit(content: any, val: number){
    this.modalss.valor = val;
    this.modalService.open(content);
  }
}
