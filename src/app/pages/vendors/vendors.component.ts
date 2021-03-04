import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ExportToCsv } from 'export-to-csv';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent implements OnInit {
  closeResult: string;
  searchForm:FormGroup;
  status: any;
  searchByName:any = '';
  UserList:any;
  totalItems:any;
  currentPage:number = 1;
  imgurl:any;
  itemPerPage:number = 4;
  delId: any;
  
  constructor(private modalService: NgbModal,private spinner: NgxSpinnerService,private router:Router,private activated:ActivatedRoute,public service:PagesService,private toaster: ToastrService) {}

  ngOnInit(): void {
    this.getUserDetails()
    
  }
// This is for the first modal
open1(content1) {
  this.modalService.open(content1, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}
openWindowCustomClass(content3) {
  this.modalService.open(content3, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
}
userprofileModal(userDelete) {
  this.modalService.open(userDelete, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
}
userDeleteModal(userDelete,id) {
  this.delId = id
  this.modalService.open(userDelete, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
}
userDetailModal(userDetail) {
  this.modalService.open(userDetail, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
}
addUserModal(addUser) {
  this.modalService.open(addUser, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
}
vendorConfirmModal(vendorConfirm) {
  this.modalService.open(vendorConfirm, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
}
vendorUnconfirmModal(vendorUnconfirm) {
  this.modalService.open(vendorUnconfirm, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
}vendorUnconfirm
private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return  `with: ${reason}`;
  }
}
searchFormSubmit() {
  if (this.searchByName) {
    this.getUserDetails()
  }
}
getUserDetails(){
  this.spinner.show()
  
   let url = `/vendor?status=${(this.status?(this.status) : '')+(this.searchByName ? ('&name=' + this.searchByName) : '')}`
  //let url = '/getusers'
this.service.getApi(url).subscribe((res:any)=>{
  console.log('Get User Len',res.data.vendors)

  this.spinner.hide()
  if (res['success']) {
     this.UserList = res.data.vendors
    this.totalItems = res.data.vendors.length

  } else {
    //this.totalItems = ''
    this.toaster.error(res['message'])
  }
}, error => {
  this.toaster.error(error['message'])
  this.spinner.hide()
})
}
Activate(){
  this.status = 1;
  this.getUserDetails()
  
}
DeActivate(){
  this.status = '0';
  this.getUserDetails()
  
}
pagination(event) {
  console.log('This event will display page number:->',event);
  this.currentPage = event;
  this.getUserDetails()
}
exportCsv(){

  const options = { 
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true, 
    showTitle: true,
    title: 'Vendors Details',
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true,
    
  };
  const csvExporter = new ExportToCsv(options);
  csvExporter.generateCsv(this.UserList)
}
deleteUser(){
  let url = `/deleteVendor`
  const obj = {
    id:this.delId,
    }
  this.spinner.show()
  this.service.postApi(url,obj).subscribe((res:any)=>{
    console.log('Del Res',res)
  
    this.spinner.hide()
    if (res.message=='Deleted successfully') {
      this.toaster.success(res['message'])
      this.status = ''
      this.getUserDetails()
      this.modalService.dismissAll() 
      
    } else {
      
      this.toaster.error(res['message'])
      
      this.modalService.dismissAll()
    }
  }, error => {
    this.toaster.error(error['message'])
    this.spinner.hide()
    this.modalService.dismissAll()
  })
}
}
