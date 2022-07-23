import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/model/contacto';
import { Redes } from 'src/app/model/redes';
import { ContactoService } from 'src/app/servicios/contacto.service';
import { RedesService } from 'src/app/servicios/redes.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  redesList: Array<Redes>;
  contactoList: Array<Contacto>;

  constructor(private redesService: RedesService, private contactoService: ContactoService) { }

  ngOnInit(): void {
    this.cargarRedes();
    this.cargarContacto();
  }

  cargarRedes(): void {
    this.redesService.getRedes().subscribe(data => { this.redesList = data })
  }

  cargarContacto(): void {
    this.contactoService.getContacto().subscribe(data => { this.contactoList = data })
  }
}
