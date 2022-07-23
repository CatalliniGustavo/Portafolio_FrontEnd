import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { user } from 'src/app/model/user.model';
import { SwitchService } from 'src/app/servicios/switch.service';
import { UserService } from 'src/app/servicios/user/user.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

  user: user = null;
  errMsj!: string;

  constructor(
    private uService: UserService,
    private modalss: SwitchService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    

    this.uService.detail().subscribe(
      data => {
        this.user = data;
      }, err => {
        this.errMsj = err.error.mensaje;
        alert("Error al cargar el perfil");
      }
    );
  }

  onUpdate(): void {
    this.uService.update(this.user).subscribe(
      data => {
        this.closeModal()
        this.modalService.dismissAll();
      }, err => {
        this.errMsj = err.error.mensaje;
        // alert("Error al modificar el Perfil");
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
