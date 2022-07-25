import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-requestlog',
  templateUrl: './requestlog.component.html',
  styleUrls: ['./requestlog.component.css']
})
export class RequestlogComponent implements OnInit {

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  open(content: any) {
    this.modalService.open(content);
  }
}
