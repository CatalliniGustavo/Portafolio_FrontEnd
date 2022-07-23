import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { SwitchService } from 'src/app/servicios/switch.service';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  admin: boolean = false;
  isLogin: boolean = false;
  educaciones: Array<Educacion> = [];
  modalSwitch: boolean;

  constructor(
    public educacionService: EducacionService,
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

    this.cargarEducacion();
    this.modalss.$modal.subscribe((valor) => {
      this.modalSwitch = valor
      this.cargarEducacion();
    });

  }

  cargarEducacion(): void {
    this.educacionService.getEducacion().subscribe(data => { this.educaciones = data })
  }

  delete(id?: number) {
    if (id != undefined) {
      this.educacionService.delete(id).subscribe(
        data => {
          this.modalService.dismissAll();
          this.cargarEducacion();
        }, err => {
          this.modalService.dismissAll();
          alert("No se pudo borrar la Educacion");
        }
      )
    }
  }

  /////////////////////////////////----------/////////////////////////
  open(content: any) {
    this.modalService.open(content);
    //   ,{ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    //   this.closeResult = `Closed with: ${result}`;
    // }, (reason) => {
    //   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    // });
  }

  cancel(){
    this.modalService.dismissAll();
  }
  
  openEdit(content: any, val: number){
    this.modalss.valor = val;
    this.modalService.open(content);
  }
  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return `with: ${reason}`;
  //   }
  // }
}
