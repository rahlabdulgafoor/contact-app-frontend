import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { subscribe } from 'node:diagnostics_channel';
import { HttpClient } from '@angular/common/http';
import { error } from 'node:console';
import { response } from 'express';
import { Router } from '@angular/router';


@Component({
  selector: 'app-all-contact',
  templateUrl: './all-contact.component.html',
  styleUrl: './all-contact.component.css'
})
export class AllContactComponent implements OnInit{
allContacts:any=[]
isLoading:boolean=true;  
errorMsg:string=''
todayDate:Date=new Date()
searchKey:string=''
constructor(private api:ApiService){

}
  ngOnInit(): void {
    this.getAllContact()
  }
  getAllContact(){
    this.api.getAllContacts().subscribe({
      next:(response:any)=>{
        console.log(response);
        setTimeout(()=>{
          this.allContacts=response
        this.isLoading=false;
        },2000);
        
      },
      error:(err:any)=>{
        console.log(err.message);
        this.errorMsg=err.message;
        this.isLoading=false;
        
      }
    })
  }
  deleteContact(id:any){
    this.api.deleteContact(id).subscribe({
      next:(response:any)=>{
        console.log(response);
       this. getAllContact()
        
      }
    })
  }
  


}
