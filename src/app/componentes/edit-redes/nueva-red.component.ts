import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Redes } from 'src/app/model/redes';
import { RedesService } from 'src/app/servicios/redes.service';
import { SwitchService } from 'src/app/servicios/switch.service';

@Component({
  selector: 'app-nueva-red',
  templateUrl: './nueva-red.component.html',
  styleUrls: ['./nueva-red.component.css']
})
export class NuevaRedComponent implements OnInit {

  imgIcono: string =  "";
  linkIcono: string = "";
  nombre: string = "";
  comp: any;
  errMsj!: string;

  constructor(
    private redesServicio: RedesService,
    private modalss: SwitchService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  onCreate(content: any): void {
    const red = new Redes(
      this.imgIcono,
      this.linkIcono,
      this.nombre
    );

    this.redesServicio.save(red).subscribe(data => {
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
