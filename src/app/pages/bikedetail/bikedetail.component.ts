import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'; 
@Component({
  selector: 'app-bikedetail',
  templateUrl: './bikedetail.component.html',
  styleUrls: ['./bikedetail.component.css']
})
export class BikedetailComponent implements OnInit {

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
  addBikeModal(addBike) {
    this.modalService.open(addBike, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  userDetailModal(userDetail) {
    this.modalService.open(userDetail, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  detailprofileModal(detailprofile) {
    this.modalService.open(detailprofile, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
}
