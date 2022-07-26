import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import { SwitchService } from 'src/app/servicios/switch.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {

  imgIcono: string;
  nombre: string;
  descripcion: string;
  github: string;
  linkProy: string;
  errMsj!: string;

  constructor(
    private proyectoService: ProyectosService,
    private modalss: SwitchService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const proyecto = new Proyectos(
      this.imgIcono,
      this.nombre,
      this.descripcion,
      this.github,
      this.linkProy
    );
    this.proyectoService.save(proyecto).subscribe(data => {
      this.closeModal()
      this.modalService.dismissAll();
    }, err => {
      this.errMsj = err.error.mensaje;
      // alert("Falla en el intento de cargar el nuevo Proyecto");
      // this.modalService.dismissAll();
    }
    );
  }

  cancel() {
    this.modalService.dismissAll();
  }

  closeModal() {
    this.modalss.$modal.emit(false);
  }
}
