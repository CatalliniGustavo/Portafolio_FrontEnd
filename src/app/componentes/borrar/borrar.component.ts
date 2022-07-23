import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SwitchService } from 'src/app/servicios/switch.service';

@Component({
  selector: 'app-borrar',
  templateUrl: './borrar.component.html',
  styleUrls: ['./borrar.component.css']
})
export class BorrarComponent implements OnInit {

  constructor(
    private swichtService: SwitchService,
    private modalService: NgbModal
    ) { }

  ngOnInit(): void {
  }

  tr(){
    this.modalService.dismissAll
    this.swichtService.tof = true;
  }

  cancel(){
    this.swichtService.tof = false;
    this.modalService.dismissAll
  }
}
