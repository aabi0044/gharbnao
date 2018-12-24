import { Component, OnInit } from '@angular/core';
import{ApiService}from '../../../services/api/api.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-arch',
  templateUrl: './arch.component.html',
  styleUrls: ['./arch.component.css']
})
export class ArchComponent implements OnInit {

  constructor(private api:ApiService) { }
architect;
length;
reasons;
review;
err;
wait:boolean=false;
  ngOnInit() {
    this.getArchitect();

  }
  getArchitect(){
   
    this.api.getArchitect().pipe(map(list => list.map(item => {
      let data = item.payload.doc.data();
      let id = item.payload.doc.id;
      return { id, ...data };
    }))).subscribe(res => {
      this.architect= res;
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
    
    if(this.wait=true){
    let prd= usr;
    console.log(prd);
    let id= prd.id;
    let data={
     aproved:'disaproved',
     reason:this.review
    }
    this.api.updateUser(id,data).then(res=>{
     console.log('User disaproved')
   
   })}
   else{
    console.log("error");
   }
      }
      selectChangeHandler(event:any){
        this.reasons=event.target.value;
      
        if (this.reasons == '100') {
        this.review="Make Professional Profile";
      }
      else if (this.reasons == '1000') {
        this.review="Image is of Bad quality";
      }
      else if (this.reasons == '2000') {
        this.review="Rates are Too High";
      }
      else if (this.reasons == '5000') {
        this.review="Mobile Numbers are wrong";
      }
      else if (this.reasons == '10000') {
        this.review="Description is too Short";
      }
    
      this.wait=true;
      }

}

