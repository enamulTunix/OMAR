import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { UrlService } from '../services/url.service'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PagesService {
  baseUrl: String = environment.baseUrl
  
  constructor(
    private urls: UrlService,
    private http: HttpClient
  ) { }

  uploadFile(body) {
    return this.http.post(this.urls.uploadFile, body)
  }

  getProfile() {
    return this.http.get(this.urls.getProfile)
  }

  updateProfile(body) {
    return this.http.put(this.urls.editProfile, body)
  }
  postApi(endPointURL,body){
     return this.http.post(this.baseUrl + endPointURL, body)
  }
  deleteApi(endPointURL,body){
    return this.http.delete(this.baseUrl + endPointURL, body)
 }
 putApi(endPointURL,body){
  return this.http.put(this.baseUrl + endPointURL, body)
}
  getApi(endPointURL){
    return this.http.get(this.baseUrl + endPointURL)
 }

 getCountrycode(){
  return this.http.get('assets/json/countriesData.js')
}
}
