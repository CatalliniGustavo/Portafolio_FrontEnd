import { Component, OnInit } from '@angular/core';
import { NavigationError, NavigationExtras, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { SwitchService } from 'src/app/servicios/switch.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  admin: boolean = false;
  isLogin: boolean = false;
  experiencias: Array<Experiencia> = [];
  modalSwitch: boolean;

  constructor(
    public experienciaService: ExperienciaService, 
    private tokenService: TokenService, 
    private router: Router,
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

    this.cargarExperiencia();
    this.modalss.$modal.subscribe((valor) => {
      this.modalSwitch = valor
      this.cargarExperiencia();
    });
  }

  cargarExperiencia(): void{
    this.experienciaService.getExperiencia().subscribe(data => { this.experiencias = data })
  }

  delete(id?: number){
    if (id != undefined) {
      this.experienciaService.delete(id).subscribe(
        data => {
          this.modalService.dismissAll();
          this.cargarExperiencia();
        }, err => {
          this.modalService.dismissAll();
          alert("No se pudo borrar la experiencia");
        }
      )
    }
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
