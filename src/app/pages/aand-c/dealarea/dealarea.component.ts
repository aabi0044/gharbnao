import { Component, OnInit } from '@angular/core';
import{Router}from '@angular/router';
import{AuthService }from '../../../services/auth/auth.service';
import{ApiService} from '../../../services/api/api.service';
@Component({
  selector: 'app-dealarea',
  templateUrl: './dealarea.component.html',
  styleUrls: ['./dealarea.component.css']
})
export class DealareaComponent implements OnInit {
  location = {
    name:'',
    type:'',
    threemarla:{
      rstartprice: null,
      rendprice:null,
      cstartprice: null,
      cendprice:null
    },
    fivemarla:{
    cstartprice: null,
     cendprice:null,
     rstartprice: null,
     rendprice:null
   },
    sevenmarla:{
     cstartprice: null,
     cendprice:null,
     rstartprice: null,
     rendprice:null
   },
    tenmarla:{
     cstartprice:null,
     cendprice:null,
     rstartprice: null,
     rendprice:null
   },
    twelvemarla:{
     cstartprice: null,
     cendprice:null,
     rstartprice: null,
     rendprice:null
   },
    fifteenmarla:{
     cstartprice: null,
     cendprice:null,
     rstartprice: null,
     rendprice:null
   },
    twentymarla:{
     cstartprice: null,
     cendprice:null,
     rstartprice: null,
     rendprice:null
   }
  };
  
  
  threemarla={
    sprice:null,
    eprice:null
  };
  fivemarla={
    sprice:null,
    eprice:null
  };
  sevenmarla={
    sprice:null,
    eprice:null
  };
  tenmarla={
    sprice:null,
    eprice:null
  };
  twelvemarla={
    sprice:null,
    eprice:null
  };
  fifteenmarla={
    sprice:null,
    eprice:null
  };
  twentymarla={
    sprice:null,
    eprice:null
  };
user={
  area:[],
  sector:[],
  property:[]
}  
commercial=null;
residential=null;
getuser;
val;
id;
  constructor(private api:ApiService, private router:Router) { }

  ngOnInit() {
    
  }
addnew(){
  
  let id =localStorage.getItem('uid');
  this.user.sector.push(this.location.name);
  this.user.area.push(this.location);
 
  this.api.updateArea(id,this.location,this.location.name).then(res=>{
    console.log(res);
  })
  this.updateuser();
}
selectChangeHandler(event:any){
  this.val=event.target.value;

  if (this.val == 'commercial') {
  this.location.type='commercial';
  this.commercial='commercial';

}
else if (this.val == 'residential') {
  this.location.type= 'residential';
  this.residential='residential';
}
this.assign();

 }
 assign(){
   if(this.location.type=='commercial'){
    this.location.threemarla.cstartprice=this.threemarla.sprice;
    this.location.threemarla.cendprice=this.threemarla.eprice;
    this.location.fivemarla.cstartprice=this.fivemarla.sprice;
    this.location.fivemarla.cendprice=this.fivemarla.sprice;
    this.location.sevenmarla.cstartprice=this.sevenmarla.sprice;
    this.location.sevenmarla.cendprice=this.sevenmarla.eprice;
    this.location.tenmarla.cstartprice=this.tenmarla.sprice;
    this.location.tenmarla.cendprice=this.tenmarla.eprice;
    this.location.twelvemarla.cstartprice=this.twelvemarla.sprice;
    this.location.twelvemarla.cendprice=this.twelvemarla.eprice;
    this.location.fifteenmarla.cstartprice=this.fifteenmarla.sprice;
    this.location.fifteenmarla.cendprice=this.fifteenmarla.eprice;
    this.location.twentymarla.cstartprice=this.twentymarla.sprice;
    this.location.twentymarla.cendprice=this.twentymarla.eprice;
   }
   else{
     this.location.threemarla.rstartprice=this.threemarla.sprice;
     this.location.threemarla.rendprice=this.threemarla.eprice;
     this.location.fivemarla.rstartprice=this.fivemarla.sprice;
     this.location.fivemarla.rendprice=this.fivemarla.eprice;
     this.location.sevenmarla.rstartprice=this.sevenmarla.sprice;
     this.location.sevenmarla.rendprice=this.sevenmarla.eprice;
     this.location.tenmarla.rstartprice=this.tenmarla.sprice;
     this.location.tenmarla.rendprice=this.tenmarla.eprice;
     this.location.twelvemarla.rstartprice=this.twelvemarla.sprice;
     this.location.twelvemarla.rendprice=this.twelvemarla.eprice;
     this.location.fifteenmarla.rstartprice=this.fifteenmarla.sprice;
     this.location.fifteenmarla.rendprice=this.fifteenmarla.eprice;
     this.location.twentymarla.rstartprice=this.twentymarla.sprice;
     this.location.twentymarla.rendprice=this.twentymarla.eprice;
   }
 }


 updateuser(){
   this.id=localStorage.getItem('uid');
   if(this.residential='residential'){
     let data={
       residential:'residential'
     }
this.api.updateUser(this.id,data).then(res=>{
  console.log("Updated");
})
   }
   else{
    let data={
      commercial:'commercial'
    }
    this.api.updateUser(this.id,data).then(res=>{
      console.log("updated");
    })


   }
 }
}
