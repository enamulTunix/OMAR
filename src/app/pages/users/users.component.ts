import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { PagesService } from '../pages.service';
import { ExportToCsv } from 'export-to-csv';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  objectId:any;
  delId:any;
  profile: any;
  particularUser:any;
  closeResult: string;
  searchForm:FormGroup;
  addUserForm:FormGroup;
  EditUserForm:FormGroup
  resetForm:FormGroup;
  UserList:any;
  totalItems:any;
  currentPage:number = 1;
  imgurl='';
  itemPerPage:number = 10;
  status: any;
  fileName: string='Choose File';
  constructor(private fb:FormBuilder, private spinner: NgxSpinnerService,private router:Router,private activated:ActivatedRoute, private modalService: NgbModal,public service:PagesService,private toaster: ToastrService) {}

  ngOnInit(): void {
    this.resetForm = this.fb.group({
      
      newpassword:['',[Validators.required,Validators.pattern(/^(?=^.{8,16}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*?[#?!@$%^&*-])(?!.*\s).*$/)]],
      cnfpassword:['',[Validators.required]],
      
    })
    this.getCountry()
    this.searchForm = new FormGroup({
      search: new FormControl('')
    })
    this.addUserForm = new FormGroup({
    fullName:new FormControl('',Validators.required),
    countryCode:new FormControl('',Validators.required),
    phone:new FormControl('', [Validators.required,Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$')
    ]),
    email:new FormControl('',[
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')
    ]),
    address:new FormControl('',Validators.required),
    gender:new FormControl('',Validators.required),
    status:new FormControl('')
    })
    this.EditUserForm = new FormGroup({
      fullName:new FormControl('',Validators.required),
      countryCode:new FormControl('',Validators.required),
      phone:new FormControl('', [Validators.required,Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$')
      ]),
      email:new FormControl('',[
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')
      ]),
      address:new FormControl('',Validators.required),
      gender:new FormControl('',Validators.required),
      status:new FormControl('')
      })
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
userprofileModal(userDelete,id) {
  this.objectId = id;
  this.modalService.open(userDelete, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  this.particularUser = this.UserList.find(element => (element._id==this.objectId))
  this.imgurl = this.particularUser.profilePic
}
userDeleteModal(userDelete,id) {

  this.delId = id;
  console.log('DelID',this.delId)
  this.modalService.open(userDelete, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
}
userDetailModal(userDetail,id) {
  this.objectId = id;
  this.modalService.open(userDetail, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  this.particularUser = this.UserList.find(element => (element._id==this.objectId))
  this.imgurl = this.particularUser.profilePic
  //this.EditUserForm.controls['fullName'].setValue(this.particularUser.firstName + ' ' + this.particularUser.lastName)
this.EditUserForm.patchValue({
  fullName:this.particularUser.firstName + ' ' + this.particularUser.lastName,
  phone:this.particularUser.phone,
    email:this.particularUser.email,
    address:this.particularUser.address,
    gender:this.particularUser.gender,
    status:this.particularUser.status
})
}
addUserModal(addUser) {
  this.modalService.open(addUser, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
}
passwordModal(password,id) {
  this.delId = id;
  this.modalService.open(password, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
}

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return  `with: ${reason}`;
  }
}
getUserDetails(){
  this.spinner.show()
   let url = `/getusers?status=${(this.status?(this.status) : '')+(this.searchForm.value.search ? ('&name=' + this.searchForm.value.search) : '')}`
  //let url = '/getusers'
this.service.getApi(url).subscribe((res:any)=>{
  console.log('Get User Len',res.data.users.length)

  this.spinner.hide()
  if (res['success']) {
    this.UserList = res.data.users
    this.totalItems = res.data.users.length

  } else {
    this.totalItems = ''
    this.toaster.error(res['message'])
  }
}, error => {
  this.toaster.error(error['message'])
  this.spinner.hide()
})
}
pagination(event) {
  console.log('This event will display page number:->',event);
  this.currentPage = event;
  this.getUserDetails()
}
searchFormSubmit() {
  if (this.searchForm.value.search) {
    this.getUserDetails()
  }
}
reset() {
  if (this.searchForm.value.search) {
    this.searchForm.reset();
    this.getUserDetails()
  }
  
   
}
Activate(){
  this.status = 1;
  this.getUserDetails()
  
}
DeActivate(){
  this.status = '0';
  this.getUserDetails()
  
}
AddUser(){
  let url = `/addUser`
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
    } else {
      
      this.toaster.error(res['message'])
    }
  }, error => {
    this.toaster.error(error['message'])
    this.spinner.hide()
  })
}
orderhistory(id){
this.router.navigate([`pages/orderhistory/${id}`])
}
UpdateUser(){
  let url = `/editUser`
  let obj = {
    id:this.objectId,
    profilePic:this.profile,
    fullName:this.EditUserForm.value.fullName,
    countryCode:'+91',
    phone:this.EditUserForm.value.phone,
    email:this.EditUserForm.value.email,
    address:this.EditUserForm.value.address,
    gender:this.EditUserForm.value.gender,
    status:this.EditUserForm.value.status
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
exportCsv(){

  const options = { 
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true, 
    showTitle: true,
    title: 'User Details',
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true,
    
  };
  const csvExporter = new ExportToCsv(options);
  csvExporter.generateCsv(this.UserList)
}
getCountry(){
  this.service.getCountrycode().subscribe((res:any)=>{
    console.log('Country',res)
  })
}
handleInputChange(e) {

  var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    this.fileName=file.name
  var reader = new FileReader();
  reader.onload = this._handleReaderLoaded.bind(this);
  reader.readAsDataURL(file);
}
_handleReaderLoaded(e) {
  let reader = e.target;
  this.profile = reader.result;
  
}
deleteUser(){
  let url = `/deleteUser`
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
sliderRound(id,status){
  if (status==1){
    this.status='0'
  }else if(status==0){
    this.status = 1
  }
  let url = `/editUser`
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
changePassword(){
    let url = `/resetPassword`
    const obj = {
      id:this.delId,
      password:this.resetForm.value.newpassword,
      confirmPassword:this.resetForm.value.cnfpassword,
      }
    this.spinner.show()
    this.service.postApi(url,obj).subscribe((res:any)=>{
      console.log('Del Res',res)
     this.spinner.hide()
      if (res.message=='Updated successfully') {
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
