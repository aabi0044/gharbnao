import { Component, OnInit } from '@angular/core';
import{ApiService}from '../../../services/api/api.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {
pending;
reasons;
review;
err;
wait;
  constructor(private api:ApiService) { }

  ngOnInit() {
    this.getPending();
  }
  getPending(){
   
    this.api.getPending().pipe(map(list => list.map(item => {
      let data = item.payload.doc.data();
      let id = item.payload.doc.id;
      return { id, ...data };
    }))).subscribe(res => {
      this.pending= res;
      // console.log(res);
      
    })
      
  
  }
  verify(usr){
    let prd= usr;
    console.log(prd);
    let id= prd.id;
    let data={
     aproved:'aproved'
    }
    this.api.updateUser(id,data).then(res=>{
     console.log('User Aproved')
   
   })
    
   }
   disAproved(usr){
  

     
    let prd= usr;
    console.log(prd);
    let id= prd.id;
    let data={
     aproved:'disaproved',
     reason:this.review

    }
    this.api.updateUser(id,data).then(res=>{
     console.log('User disaproved')

   }
  
   ).catch(errr=>{
     this.err=errr;
     console.log(this.err);
   })
  
    
   }
   selectChangeHandler(event:any){
    this.reasons=event.target.value;
  
    if (this.reasons == '1') {
    this.review="Make Professional Profile";
  }
  else if (this.reasons == '2') {
     this.review="Image is of Bad quality";
  }
  else if (this.reasons == '3') {
      this.review="Rates are Too High";
  }
  else if (this.reasons == '4') {
this.review="Mobile Numbers are wrong";
  }
  else if (this.reasons == '5') {
   this.review="Description is too Short";
  }
 
  this.wait=true;
  }
}
