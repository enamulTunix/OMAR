import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'; 
@Component({
  selector: 'app-vendordetail',
  templateUrl: './vendordetail.component.html',
  styleUrls: ['./vendordetail.component.css']
})
export class VendordetailComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
  }
  addBikeModal(addBike) {
    this.modalService.open(addBike, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  userDetailModal(userDetail) {
    this.modalService.open(userDetail, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  userDeleteModal(userDelete) {
    this.modalService.open(userDelete, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
  }
  editpriceModal(editprice) {
    this.modalService.open(editprice, {backdropClass: 'light-blue-backdrop',centered: true,size: 'md'});
  }
}