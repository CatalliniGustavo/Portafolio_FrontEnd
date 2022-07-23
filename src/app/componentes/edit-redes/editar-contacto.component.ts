import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Contacto } from 'src/app/model/contacto';
import { ContactoService } from 'src/app/servicios/contacto.service';
import { SwitchService } from 'src/app/servicios/switch.service';

@Component({
  selector: 'app-editar-contacto',
  templateUrl: './editar-contacto.component.html',
  styleUrls: ['./editar-contacto.component.css']
})
export class EditarContactoComponent implements OnInit {

  contacto: Contacto = null;
  id: number;
  errMsj!: string;

  constructor(
    private contactoService: ContactoService,
    private modalss: SwitchService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {

    this.id = this.modalss.valor;

    this.contactoService.detail(this.id).subscribe(
      data => {
        this.contacto = data;
      }, err => {
        this.errMsj = err.error.mensaje;
        alert("Error al cargar el Contacto");
      }
    )
  }

  onUpdate(content: any): void {
    this.contactoService.update(this.id, this.contacto).subscribe(
      data => {
        this.closeModal()
        this.modalService.dismissAll();
        this.modalService.open(content);
      }, err => {
        this.errMsj = err.error.mensaje;
        alert("Error al modificar el Contacto");
      }
    )
  }
  cancel(content: any) {
    this.modalService.dismissAll();
    this.modalService.open(content);
  }

  closeModal() {
    this.modalss.$modal.emit(false);
  }

}
