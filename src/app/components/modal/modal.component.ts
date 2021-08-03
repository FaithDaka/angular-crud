import { Component, Injectable, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
@Injectable()
export class ModalComponent implements OnInit {
  @Input() title: string = "";
  @ViewChild('modal')
  private modalContent!: TemplateRef<ModalComponent>;
  private modalRef!: NgbModalRef;

  constructor( private modalService: NgbModal) { }

  ngOnInit(): void {
    console.log('Im triggered')
  }

  open() {
    this.modalRef = this.modalService.open(this.modalContent, {ariaLabelledBy:'modal-basic-title'})
    this.modalRef.result.then();
  }

  close() {
    this.modalRef.close()
  }

  dismiss() {
    this.modalRef.dismiss()
  }

}
