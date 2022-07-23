import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { SwitchService } from 'src/app/servicios/switch.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
  experiencia: Experiencia = null;
  id: number;

  constructor(private experienciaService: ExperienciaService, 
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private modalss: SwitchService,
    private modalService: NgbModal
    ) { }

  ngOnInit(): void {

    this.id = this.modalss.valor;

    this.experienciaService.detail(this.id).subscribe(
      data => {
        this.experiencia = data;
      }, err => {
        alert("Error al cargar la experiencia");
        this.modalService.dismissAll();
      }
    )
  }

  onUpdate(): void {
    this.experienciaService.update(this.id, this.experiencia).subscribe(
      data => {
        this.closeModal();
        this.modalService.dismissAll();
      }, err => {
        alert("Error al modificar la experiencia");
        this.modalService.dismissAll();
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
