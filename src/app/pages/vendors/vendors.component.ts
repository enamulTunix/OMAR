import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
  addUserForm:FormGroup;
  EditUserForm:FormGroup
  EditCommissionForm:FormGroup
  searchByName:any = '';
  UserList:any;
  totalItems:any;
  currentPage:number = 1;
  imgurl='';
  itemPerPage:number = 4;
  delId: any;
  particularUser: any;
  objectId: any;
  profile: any;
  fileName: any;
  Reference: any;
  Taxfile: any;
  TourFile: any;
  ComFile: any;
  taxfile: any;
  tourfile: any;
  submitted: boolean = false;
  comfile: any;
  editfileName: any;
  editTaxfile: any;
  editTourfile: any;
  editcomfile: any;
  editComFile: any;
  editTourFile: any;
  EditTaxfile: any;
  editprofile: any;
   imgul = 'http://15.207.74.128:3013/';
  constructor(private modalService: NgbModal,private spinner: NgxSpinnerService,private router:Router,private activated:ActivatedRoute,public service:PagesService,private toaster: ToastrService) {}

  ngOnInit(): void {
    this.getUserDetails()
this.EditCommissionForm = new FormGroup({
  commission:new FormControl('',Validators.required)
      })
    this.addUserForm = new FormGroup({
      fullName:new FormControl('',Validators.required),
     // countryCode:new FormControl('',Validators.required),
      phone:new FormControl('', [Validators.required,Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$')
      ]),
      email:new FormControl('',[
        Validators.required,
       Validators.email
      ]),
      address:new FormControl('',Validators.required),
     gender:new FormControl('',Validators.required),
     //userName:new FormControl(''),
     accountType:new FormControl('',Validators.required),
     commission:new FormControl('',Validators.required),
     businessType:new FormControl('',Validators.required),
      status:new FormControl(''),
      ibn:new FormControl('',Validators.required),
      bankName:new FormControl('',Validators.required),
      commerialId:new FormControl('',Validators.required),
      taxId:new FormControl('',Validators.required),
      touristId:new FormControl('',Validators.required),
      newPassword:new FormControl('',Validators.required),
      cnfPassword:new FormControl('',Validators.required),
      })

    this.EditUserForm = new FormGroup({
      fullName:new FormControl('',Validators.required),
     // countryCode:new FormControl('',Validators.required),
      phone:new FormControl('', [Validators.required,Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$')
      ]),
      email:new FormControl('',[
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')
      ]),
      address:new FormControl('',Validators.required),
     gender:new FormControl('',Validators.required),
     userName:new FormControl(''),
     accountType:new FormControl('',Validators.required),
     commission:new FormControl('',Validators.required),
     businessType:new FormControl('',Validators.required),
      status:new FormControl(''),
      ibn:new FormControl('',Validators.required),
      bankName:new FormControl('',Validators.required),
      commerialId:new FormControl('',Validators.required),
      taxId:new FormControl('',Validators.required),
      touristId:new FormControl('',Validators.required),
      newPassword:new FormControl('',Validators.required),
      cnfPassword:new FormControl('',Validators.required),
      })
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
userprofileModal(userDelete,item) {
  this.particularUser = item
  this.objectId = item._id;
  this.modalService.open(userDelete, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  
  this.imgurl = item.profilePic
  
}
userDeleteModal(userDelete,id) {
  this.delId = id
  this.modalService.open(userDelete, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
}
userDetailModal(userDetail,id) {
  this.objectId = id;
  this.modalService.open(userDetail, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
  
}
addUserModal(editUser,obj) {
  
  this.modalService.open(editUser, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  this.EditUserForm.patchValue({
    fullName:this.particularUser.firstName + ' ' + this.particularUser.lastName,
    phone:this.particularUser.phone,
      email:this.particularUser.email,
      address:this.particularUser.address,
      gender:this.particularUser.gender,
      userName:this.particularUser.userName,
      accountType:this.particularUser.userNameaccountType || 'N/A',
      commission:this.particularUser.commission || 'N/A',
      businessType:this.particularUser.businessType||'N/A',
      ibn:this.particularUser.ibn||'N/A',
      bankName:this.particularUser.bankName||'N/A',
      commerialId:this.particularUser.commerialId|| 'N/A',
      taxId:this.particularUser.taxId||'N/A',
      touristId:this.particularUser.touristId||'N/A',
      
  })
}
addVendorModal(addUser) {
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
reset() {
  if (this.searchByName) {
    this.searchByName = ''
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

public errorHandlingSignin = (control: string, error: string) => {
  return this.addUserForm.controls[control].hasError(error);
}

public errorHandlingEdit = (control: string, error: string) => {
  return this.EditUserForm.controls[control].hasError(error);
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
SubAccount(id){
  this.router.navigate([`pages/subaccount/${id}`])
  }
  handleInputChange(e,ref) {
    this.Reference = ref
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
      
      if(this.Reference=='addprofile'){
        this.fileName=file.name
         
        }
        else if(this.Reference=='addtaxfile'){
          this.taxfile=file.name
         
        }
        else if(this.Reference=='addtourfile'){
          this.tourfile=file.name
          
        }
        else if(this.Reference=='addcomRegfile'){
          this.comfile=file.name
          
        }
    
    var reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {

    let reader = e.target;
    if(this.Reference=='addprofile'){
    this.profile = reader.result;
     
    }
    else if(this.Reference=='addtaxfile'){
      this.Taxfile = reader.result;
      
    }
    else if(this.Reference=='addtourfile'){
      this.TourFile = reader.result;
     
    }
    else if(this.Reference=='addcomRegfile'){
      this.ComFile = reader.result;
      
    }

  }
  UpdateUser(){
    this.submitted = true;
    let url = `/vendor`
    
    let formData= new FormData()
    formData.append('fullName',this.EditUserForm.value.fullName)
      formData.append('profilePic',this.profile)
      formData.append('comRegFile',this.editComFile)
      formData.append('taxFile',this.EditTaxfile)
      formData.append('touristFile',this.editTourFile)
      formData.append('gender',this.EditUserForm.value.gender)
      formData.append('address',this.EditUserForm.value.address)
      formData.append('touristId',this.EditUserForm.value.touristId)
      formData.append('taxId',this.EditUserForm.value.taxId)
      formData.append('comRegId',this.EditUserForm.value.commerialId)
      formData.append('id',this.objectId)
      if(this.EditUserForm.valid){
        this.spinner.show()
    this.service.putApi(url,formData).subscribe((res:any)=>{
      console.log('Edit user response user Response',res)
    
      this.spinner.hide()
      if (res['success']) {
        this.toaster.success(res['message'])
        this.status = ''
        this.getUserDetails()
        this.modalService.dismissAll()
        this.EditUserForm.reset();
        this.submitted = false;
      } else {
        
        this.toaster.error(res['message'])
      }
    }, error => {
      this.toaster.error(error['message'])
      this.spinner.hide()
    })
      }
    
  }
  AddUser(){
    this.submitted = true;
    let url = `/vendor`
    let obj = {
      
      profilePic:this.profile,
      fullName:this.addUserForm.value.fullName,
     countryCode:'+91',
      phone:this.addUserForm.value.phone,
      email:this.addUserForm.value.email,
      address:this.addUserForm.value.address,
      gender:this.addUserForm.value.gender,
      status:this.addUserForm.value.status
    }
    if(!this.addUserForm.invalid)
    {
      this.spinner.show()
      this.service.postApi(url,obj).subscribe((res:any)=>{
        console.log('Add user Response',res)
      
        this.spinner.hide()
        if (res['success']) {
          this.toaster.success(res['message'])
          this.status = ''
          this.getUserDetails()
          this.modalService.dismissAll()
          this.addUserForm.reset();
          this.submitted = false;
        } else {
          
          this.toaster.error(res['message'])
        }
      }, error => {
        this.toaster.error(error['message'])
        this.spinner.hide()
      })
    }

  }
  sliderRound(id,status){
    if (status==1){
      this.status='0'
    }else if(status==0){
      this.status = 1
    }
    let url = `/vendor`
    let obj = {
      id:id,
      status:this.status
    }
    this.spinner.show()
    this.service.putApi(url,obj).subscribe((res:any)=>{
      console.log('Slider Response',res)
    
      this.spinner.hide()
      if (res['success']) {
        this.status = ''
        this.getUserDetails()
      } else {
        this.toaster.error(res['message'])
      }
    }, error => {
      this.toaster.error(error['message'])
      this.spinner.hide()
    })
  }
  UpdateCommission(){
    let url = `/vendor`
    let obj = {
      id:this.objectId,
     commission:this.EditCommissionForm.value.commission
    }
    this.spinner.show()
    this.service.putApi(url,obj).subscribe((res:any)=>{
      console.log('Edit user response user Response',res)
    
      this.spinner.hide()
      if (res['success']) {
        this.toaster.success(res['message'])
        this.status = ''
        this.getUserDetails()
        this.modalService.dismissAll()
        this.EditUserForm.reset();
      } else {
        
        this.toaster.error(res['message'])
      }
    }, error => {
      this.toaster.error(error['message'])
      this.spinner.hide()
    })
  }
  EdithandleInputChange(e,ref) {
    this.Reference = ref
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
      
      if(this.Reference=='addprofile'){
        this.editfileName=file.name
         
        }
        else if(this.Reference=='addtaxfile'){
          this.editTaxfile=file.name
         
        }
        else if(this.Reference=='addtourfile'){
          this.editTourfile=file.name
          
        }
        else if(this.Reference=='addcomRegfile'){
          this.editcomfile=file.name
          
        }
    
    var reader = new FileReader();
    reader.onload = this._EdithandleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _EdithandleReaderLoaded(e) {

    let reader = e.target;
    if(this.Reference=='addprofile'){
    this.editprofile = reader.result;
     
    }
    else if(this.Reference=='addtaxfile'){
      this.EditTaxfile = reader.result;
      
    }
    else if(this.Reference=='addtourfile'){
      this.editTourFile = reader.result;
     
    }
    else if(this.Reference=='addcomRegfile'){
      this.editComFile = reader.result;
      
    }

  }
}
