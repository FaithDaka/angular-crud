import { Component, OnInit, ViewChild } from '@angular/core';
import { dataType } from './dataType';
import { CrudService } from './services/crud-service.service';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './components/modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  data: dataType[] = [];
  title: string = 'Welcome to Utility';
  closeModal: string ="";
  @ViewChild('modal') private modalComponent!: ModalComponent
  
  async openModal() {
    return await this.modalComponent.open()
  }

  constructor(private crudServices: CrudService){ }

  ngOnInit(): void {
    this.crudServices.getData()
    .subscribe((list) => (this.data = list ));
  }

  handleDelete(data: dataType){
    this.crudServices.handleDelete(data)
    .subscribe(() => (this.data = this.data.filter((x)=> x.id !== data.id) ));
  }

  

  //   openModal(){
  //   this.modalService.open(AddCompanyComponent, {ariaLabelledBy:'modal-basic-title'})
  //     .result.then((res) => {
  //     this.closeModal = `Closed with: ${res}`;
  //   }, (res) => {
  //     this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
  //   });
  // }

  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return  `with: ${reason}`;
  //   }
  // }
}
