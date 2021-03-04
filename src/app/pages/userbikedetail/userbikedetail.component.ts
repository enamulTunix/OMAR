import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'; 
@Component({
  selector: 'app-userbikedetail',
  templateUrl: './userbikedetail.component.html',
  styleUrls: ['./userbikedetail.component.css']
})
export class UserbikedetailComponent implements OnInit {
  closeResult: string;
  constructor(private modalService: NgbModal) {}


  ngOnInit(): void {
  }
  userDetailModal(userDetail) {
    this.modalService.open(userDetail, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  userDeleteModal(userDelete) {
    this.modalService.open(userDelete, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
}
