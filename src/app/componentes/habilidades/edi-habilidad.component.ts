import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Hblandas } from 'src/app/model/hblandas';
import { HblandasService } from 'src/app/servicios/hblandas.service';
import { SwitchService } from 'src/app/servicios/switch.service';

@Component({
  selector: 'app-edi-habilidad',
  templateUrl: './edi-habilidad.component.html',
  styleUrls: ['./edi-habilidad.component.css']
})
export class EdiHabilidadComponent implements OnInit {

  hblandas: Hblandas;
  id: number;
  errMsj!: string;

  constructor(
    private hblandasService: HblandasService,
    private modalss: SwitchService,
    private modalService: NgbModal
    ) { }

  ngOnInit(): void {
    this.id = this.modalss.valor;
      
    this.hblandasService.detail(this.id).subscribe(
      data => {
        this.hblandas = data;

      }, err => {
        this.errMsj = err.error.mensaje;
        alert("Error al cargar la habilidad blanda");
        // this.modalService.dismissAll();
      }
    )
  }

  onUpdate(): void {
    this.hblandasService.update(this.id, this.hblandas).subscribe(
      data => {
        this.closeModal()
        this.modalService.dismissAll();
      }, err => {
        this.errMsj = err.error.mensaje;
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
