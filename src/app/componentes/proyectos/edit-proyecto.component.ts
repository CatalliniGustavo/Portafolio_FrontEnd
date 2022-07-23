import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import { SwitchService } from 'src/app/servicios/switch.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {

  proyecto: Proyectos = null;
  id: number;
  errMsj!: string;
  
  constructor(
    private proyectosService: ProyectosService,
    private modalss: SwitchService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.id = this.modalss.valor;

    this.proyectosService.detail(this.id).subscribe(
      data => {
        this.proyecto = data;
      }, err => {
        alert("Error al cargar el Proyecto");
        this.modalService.dismissAll();
      }
    )
  }

  onUpdate(): void {
    this.proyectosService.update(this.id, this.proyecto).subscribe(
      data => {
        this.closeModal()
        this.modalService.dismissAll();
      }, err => {
        this.errMsj = err.error.mensaje;
        // alert("Error al modificar la proyectos");
        // this.modalService.dismissAll();
      }
    )
  }

  cancel() {
    this.modalService.dismissAll();
  }
  closeModal(){
    this.modalss.$modal.emit(false);
  }
}

