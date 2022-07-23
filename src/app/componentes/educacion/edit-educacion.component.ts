import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { SwitchService } from 'src/app/servicios/switch.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
  educacion: Educacion = null;
  id: number;

  constructor(
    private educacionService: EducacionService,
    private modalss: SwitchService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    
    this.id = this.modalss.valor;
      
    this.educacionService.detail(this.id).subscribe(
      data => {
        this.educacion = data;
      }, err => {
        alert("Error al cargar la educacion");
        this.modalService.dismissAll();
      }
    )
  }

  onUpdate(): void {
    this.educacionService.update(this.id, this.educacion).subscribe(
      data => {
        this.closeModal()
        this.modalService.dismissAll();
      }, err => {
        alert("Error al modificar la educacion");
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
