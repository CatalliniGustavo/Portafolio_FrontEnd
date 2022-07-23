import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { SwitchService } from 'src/app/servicios/switch.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  imgIcono: string = 'https://cdn-icons-png.flaticon.com/512/1962/1962564.png';
  linkIcono: string = '';
  nombre: string = 'Empresa o Institucion';
  fechainicio: string = '11/11/1111';
  fechafin: string = '11/11/1111';
  lugar: string = 'Pais';
  titulo: string = 'Título de la ocupación';
  descripcion: string = 'Descripción de las tareas realizadas';

  constructor(
    private experienciaService: ExperienciaService,
    private router: Router,
    private modalss: SwitchService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Experiencia(
      this.imgIcono,
      this.linkIcono,
      this.nombre,
      this.fechainicio,
      this.fechafin,
      this.lugar,
      this.titulo,
      this.descripcion);
    this.experienciaService.save(expe).subscribe(data => {
      this.router.navigate(['']);
      this.closeModal()
      this.modalService.dismissAll();
    }, err => {
      alert("Falla en el intento de cargar la nueva experiencia");
      this.modalService.dismissAll();
    }
    );

  }

  cancel(){
    this.modalService.dismissAll();
  }

  closeModal(){
    this.modalss.$modal.emit(false);
  }
}
