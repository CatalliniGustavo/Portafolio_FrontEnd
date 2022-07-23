import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Hblandas } from 'src/app/model/hblandas';
import { HblandasService } from 'src/app/servicios/hblandas.service';
import { SwitchService } from 'src/app/servicios/switch.service';

@Component({
  selector: 'app-new-habilidad',
  templateUrl: './new-habilidad.component.html',
  styleUrls: ['./new-habilidad.component.css']
})
export class NewHabilidadComponent implements OnInit {

  id?: number;
  imgIcono: string;
  nombre: string;
  progreso: number;
  tiempoexpe: number;
  errMsj!: string;
  
  constructor(
    private hblandaService: HblandasService,
    private modalss: SwitchService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const hb = new Hblandas(
      this.imgIcono,
      this.nombre,
      this.tiempoexpe,
      this.progreso
      
      );

    this.hblandaService.save(hb).subscribe(data => {
      this.closeModal()
      this.modalService.dismissAll();
    }, err => {
      this.errMsj = err.error.mensaje;
      // alert("Falla en el intento de cargar la nueva Habilidad Blanda");
      // this.modalService.dismissAll();
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
