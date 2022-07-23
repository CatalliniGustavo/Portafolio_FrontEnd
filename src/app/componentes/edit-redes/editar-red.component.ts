import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Redes } from 'src/app/model/redes';
import { RedesService } from 'src/app/servicios/redes.service';
import { SwitchService } from 'src/app/servicios/switch.service';

@Component({
  selector: 'app-editar-red',
  templateUrl: './editar-red.component.html',
  styleUrls: ['./editar-red.component.css']
})
export class EditarRedComponent implements OnInit {

  red: Redes = null;
  id: number;
  errMsj!: string;

  constructor(
    private redesService: RedesService,
    private modalss: SwitchService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.id = this.modalss.valor;

    this.redesService.detail(this.id).subscribe(
      data => {
        this.red = data;
      }, err => {
        this.errMsj = err.error.mensaje;
        alert("Error al cargar la red");
      }
    )
  }

  onUpdate(content: any): void {
    this.redesService.update(this.id, this.red).subscribe(
      data => {
        this.closeModal()
        this.modalService.dismissAll();
        this.modalService.open(content);
      }, err => {
        this.errMsj = err.error.mensaje;
        alert("Error al modificar la Red");
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
