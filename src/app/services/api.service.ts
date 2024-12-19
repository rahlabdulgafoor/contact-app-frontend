import {  HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ContactSchema } from '../../models/contactSchema';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
BASE_URL="http://localhost:3000"
  constructor(private http:HttpClient) { }

  // to handle error
handleError(error:HttpErrorResponse){
  let errorMsg:string=''
 if(error.error){
  errorMsg=`Error: ${error.message}`

 }else{
  errorMsg=`Status: ${error.status} \n Error: ${error.message}`
 }
 return throwError(()=>errorMsg)

}


  // GET ALL CONTACTS
getAllContacts(){
  // api call:http://localhost:3000/contacts
  return this.http.get(`${this.BASE_URL}/contacts`)


}
viewContact(id:any){
  return this.http.get(`${this.BASE_URL}/contacts/${id}`)
}
getGroup(id:any){
  return this.http.get(`${this.BASE_URL}/group/${id}`)

}
// get all groups
getAllGroups(){
  return this.http.get(`${this.BASE_URL}/group`)
}
addContact(contact:ContactSchema){
  return this.http.post(`${this.BASE_URL}/contacts`,contact)
}
deleteContact(id:any){
  return this.http.delete(`${this.BASE_URL}/contacts/${id}`)
}
// edit contact
editContact(id:any,contact:ContactSchema){
  return this.http.put(`${this.BASE_URL}/contacts/${id}`,contact)
}
}
 