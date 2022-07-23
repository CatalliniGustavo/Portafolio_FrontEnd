import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Proyectos } from 'src/app/model/proyectos';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import { SwitchService } from 'src/app/servicios/switch.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  admin: boolean = false;
  isLogin: boolean = false;
  proyectosl: Array<Proyectos> = [];
  modalSwitch: boolean;

  constructor(
    public proyectosService: ProyectosService,
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

    this.cargarProyectos();

    this.modalss.$modal.subscribe((valor) => {
      this.modalSwitch = valor
      this.cargarProyectos();
    });

  }

  cargarProyectos(): void {
    this.proyectosService.getProyectos().subscribe(data => { this.proyectosl = data })
  }

  delete(id?: number) {
    if (id != undefined) {
      this.proyectosService.delete(id).subscribe(
        data => {
          this.modalService.dismissAll();
          this.cargarProyectos();
        }, err => {
          this.modalService.dismissAll();
          alert("No se pudo borrar la Proyectos");
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

