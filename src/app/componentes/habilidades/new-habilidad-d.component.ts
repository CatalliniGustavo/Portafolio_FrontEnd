import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Hduras } from 'src/app/model/hduras';
import { HdurasService } from 'src/app/servicios/hduras.service';
import { SwitchService } from 'src/app/servicios/switch.service';

@Component({
  selector: 'app-new-habilidad-d',
  templateUrl: './new-habilidad-d.component.html',
  styleUrls: ['./new-habilidad-d.component.css']
})
export class NewHabilidadDComponent implements OnInit {

  id?: number;
  imgIcono: string;
  nombre: string;
  progreso: number;
  tiempoexpe: number;
  errMsj!: string;

  constructor(
    private hdurasService: HdurasService,
    private modalss: SwitchService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const hb = new Hduras(
      this.imgIcono,
      this.nombre,
      this.progreso,
      this.tiempoexpe
    );

    this.hdurasService.save(hb).subscribe(data => {
      this.closeModal()
      this.modalService.dismissAll();
    }, err => {

      this.errMsj = err.error.mensaje;
      // alert("Falla en el intento de cargar la nueva Habilidad Dura");
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