import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { SwitchService } from 'src/app/servicios/switch.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  imgIcono: string = 'https://cdn-icons-png.flaticon.com/512/2201/2201553.png';
  linkIcono: string = '';
  nombre: string = 'Empresa o Institucion';
  fechainicio: string = '11/11/1111';
  fechafin: string = '11/11/1111';
  lugar: string = 'Pais';
  titulo: string = 'Título de la ocupación';
  descripcion: string = 'Descripción de las tareas realizadas';

  constructor(
    private educacionService: EducacionService,
    private modalss: SwitchService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }


  onCreate(): void {
    const edu = new Educacion(
      this.imgIcono,
      this.linkIcono,
      this.nombre,
      this.fechainicio,
      this.fechafin,
      this.lugar,
      this.titulo,
      this.descripcion);
    this.educacionService.save(edu).subscribe(data => {
      this.closeModal()
      this.modalService.dismissAll();
    }, err => {
      alert("Falla en el intento de cargar la nueva Educacion");
      this.modalService.dismissAll();
    }
    );
    
  }

  cancel() {
    this.modalService.dismissAll();
  }

  closeModal(){
    this.modalss.$modal.emit(false);
  }
}
