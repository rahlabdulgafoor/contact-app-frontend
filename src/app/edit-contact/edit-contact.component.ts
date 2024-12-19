import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterConfigOptions } from '@angular/router';
import { ApiService } from '../services/api.service';
import { ContactSchema } from '../../models/contactSchema';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrl: './edit-contact.component.css'
})
export class EditContactComponent implements OnInit {
  contact:ContactSchema={}
  groups:any=[]
constructor(private editActivatedRoute:ActivatedRoute,private api:ApiService,private editRouter:Router){

}
  ngOnInit(): void {
    this.editActivatedRoute.params.subscribe({
      next:(pathParameter:any)=>{
        const{id}=pathParameter
        console.log(id);
        // view contact
        this.api.viewContact(id).subscribe({
          next:(response:any)=>{
            console.log(response);
            this.contact=response
            
          }
        })
        
      }
    })
  // get groups
this.api.getAllGroups().subscribe({
  next:(allGroups:any)=>{
    this.groups=allGroups
    console.log(this.groups);
    
  }
})

  }
// editcontact
editContact(id:any){
  this.api.editContact(id,this.contact).subscribe({
    next:(response:any)=>{
      // navigateTo all contact
      this.editRouter.navigateByUrl("")

    }
  })
}
}
