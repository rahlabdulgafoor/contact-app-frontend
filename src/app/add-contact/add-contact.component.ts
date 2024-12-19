import { Component, OnInit } from '@angular/core';
import { ContactSchema } from '../../models/contactSchema';
import { ApiService } from '../services/api.service';
import { response } from 'express';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.css'
})
export class AddContactComponent implements OnInit {
  groups:any=[]
  contact:ContactSchema={}

  constructor(private api:ApiService,private addContactRouter:Router){
    this.contact.groupId="Select a Group"
  }
  ngOnInit(): void {
    this.api.getAllGroups().subscribe({
      next:(response:any)=>{
        console.log(response);
        this.groups=response;
        

      },
      error:(err:any)=>{
        console.log(err.message);
        
      }
      
    })
  }
  addContact(contact:ContactSchema){
    this.api.addContact(contact).subscribe({
      next:(response:any)=>{
        console.log(response);
        // navigate to all contact
        this.addContactRouter.navigateByUrl('')


             },
             error:(err:any)=>{
console.log(err.message);

             }
    })
  }
  
  





}
