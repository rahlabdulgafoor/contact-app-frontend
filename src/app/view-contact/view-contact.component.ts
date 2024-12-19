import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { group, log } from 'console';
import { response } from 'express';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrl: './view-contact.component.css'
})
export class ViewContactComponent implements OnInit {
constructor(private api:ApiService,private viewRouter:ActivatedRoute){}
contacts:any={}
errorMsg:string=''
group:string=''
  ngOnInit(): void {
    // get contact id from its url
    this.viewRouter.params.subscribe((data:any)=>{
      // detsructing data object
      const {id}=data  
      console.log(id);
 
      this.api.viewContact(id).subscribe({
        next:(response:any)=>{
          console.log(response);
          const {groupId}=response
          this.api.getGroup(groupId).subscribe((data:any)=>{
            console.log(data);
            const {name}=data
            this.group=name
            
            
          })
          this.contacts=response
          
        },
        error:(err:any)=>{
          console.log(err.message);
          this.errorMsg=err.message
          
        }
      })
      
    })
  }
}
