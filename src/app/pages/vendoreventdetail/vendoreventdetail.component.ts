import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-vendoreventdetail',
  templateUrl: './vendoreventdetail.component.html',
  styleUrls: ['./vendoreventdetail.component.css']
})
export class VendoreventdetailComponent implements OnInit {
  closeResult: string;
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
  }
  openWindowCustomClass(content3) {
    this.modalService.open(content3, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  userprofileModal(userDelete) {
    this.modalService.open(userDelete, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  userDeleteModal(userDelete) {
    this.modalService.open(userDelete, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
  }
  userDetailModal(userDetail) {
    this.modalService.open(userDetail, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  editOrderModal( editOrder) {
    this.modalService.open( editOrder, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
}
userHistoryModal(userHistory) {
  this.modalService.open(userHistory, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
}
editpriceModal(editprice) {
  this.modalService.open(editprice, {backdropClass: 'light-blue-backdrop',centered: true,size: 'md'});
}
}
