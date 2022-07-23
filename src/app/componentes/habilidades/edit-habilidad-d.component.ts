import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Hduras } from 'src/app/model/hduras';
import { HdurasService } from 'src/app/servicios/hduras.service';
import { SwitchService } from 'src/app/servicios/switch.service';

@Component({
  selector: 'app-edit-habilidad-d',
  templateUrl: './edit-habilidad-d.component.html',
  styleUrls: ['./edit-habilidad-d.component.css']
})
export class EditHabilidadDComponent implements OnInit {

  hduras: Hduras;
  id: number;
  errMsj!: string;

  constructor(
    private hdurasService: HdurasService,
    private modalss: SwitchService,
    private modalService: NgbModal
    ) { }

  ngOnInit(): void {
    this.id = this.modalss.valor;
      
    this.hdurasService.detail(this.id).subscribe(
      data => {
        this.hduras = data;
      }, err => {
        alert("Error al cargar la habilidad blanda");
        this.modalService.dismissAll();
      }
    )
  }

  onUpdate(): void {
    this.hdurasService.update(this.id, this.hduras).subscribe(
      data => {
        this.closeModal()
        this.modalService.dismissAll();
      }, err => {
        this.errMsj = err.error.mensaje;
        // alert("Error al modificar la habilidad blanda");
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
