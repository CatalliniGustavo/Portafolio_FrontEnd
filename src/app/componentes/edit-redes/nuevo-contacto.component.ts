import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Contacto } from 'src/app/model/contacto';
import { ContactoService } from 'src/app/servicios/contacto.service';
import { SwitchService } from 'src/app/servicios/switch.service';

@Component({
  selector: 'app-nuevo-contacto',
  templateUrl: './nuevo-contacto.component.html',
  styleUrls: ['./nuevo-contacto.component.css']
})
export class NuevoContactoComponent implements OnInit {

  imgIcono: string = "";
  linkIcono: string = "";
  nombre: string = "";
  enlace: string = "";
  errMsj!: string;

  constructor(
    private contactoServicio: ContactoService,
    private modalss: SwitchService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  onCreate(content: any): void {
    const red = new Contacto(
      this.imgIcono,
        this.linkIcono,
        this.nombre,
        this.enlace
    );

    this.contactoServicio.save(red).subscribe(data => {
      this.closeModal()
      this.modalService.dismissAll();
      this.modalService.open(content);
    }, err => {
      this.errMsj = err.error.mensaje;
    }
    );
  }

  cancel(content: any) {
    this.modalService.dismissAll();
    this.modalService.open(content);
  }

  closeModal() {
    this.modalss.$modal.emit(false);
  }
}
