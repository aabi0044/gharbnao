import { Component, OnInit } from '@angular/core';
import{ApiService}from '../../../services/api/api.service';
import { map } from 'rxjs/operators';
import {Router}from '@angular/router';

@Component({
  selector: 'app-cont',
  templateUrl: './cont.component.html',
  styleUrls: ['./cont.component.css']
})
export class ContComponent implements OnInit {
contractor;
reasons;
review;
wait:boolean=false;
err;

  constructor(private api:ApiService,private router:Router) { }

  ngOnInit() {
    this.getContractor();
  }
  getContractor(){
   
    this.api.getContractor().pipe(map(list=>list.map(item=>{
      let data= item.payload.doc.data();
      let id= item.payload.doc.id;
      return {id,...data}
    }))).subscribe(res=>{
      this.contractor=res;
    })
  }
  // verify(usr){
  //   let prd= usr;
  //   console.log(prd);
  //   let id= prd.id;
  //   let data={
  //    aproved:'aproved'
  //   }
  //   this.api.updateUser(id,data).then(res=>{
  //    console.log('User Aproved')
   
  //  })
    
  //  }
  //  disAproved(usr){
  

     
  //   let prd= usr;
  //   console.log(prd);
  //   let id= prd.id;
  //   let data={
  //    aproved:'disaproved',
  //    reason:this.review

  //   }
  //   this.api.updateUser(id,data).then(res=>{
  //    console.log('User disaproved')

  //  }
  
  //  ).catch(errr=>{
  //    this.err=errr;
  //    console.log(this.err);
  //  })
  
    
  //  }
  //  selectChangeHandler(event:any){
  //   this.reasons=event.target.value;
  
  //   if (this.reasons == '100') {
  //   this.review="Make Professional Profile";
  // }
  // else if (this.reasons == '1000') {
  //   this.review="Image is of Bad quality";
  // }
  // else if (this.reasons == '2000') {
  //   this.review="Rates are Too High";
  // }
  // else if (this.reasons == '5000') {
  //   this.review="Mobile Numbers are wrong";
  // }
  // else if (this.reasons == '10000') {
  //   this.review="Description is too Short";
  // }
  
  // this.wait=true;
  // }
  

}
