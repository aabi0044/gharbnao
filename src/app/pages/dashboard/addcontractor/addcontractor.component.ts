import { Component, OnInit } from '@angular/core';
import{Router}from '@angular/router';
import{AuthService }from '../../../services/auth/auth.service';
import{ApiService} from '../../../services/api/api.service';

@Component({
  selector: 'app-addcontractor',
  templateUrl: './addcontractor.component.html',
  styleUrls: ['./addcontractor.component.css']
})
export class AddcontractorComponent implements OnInit {
  user = {
    name: '',
    email: '',
    password: '',
   type:'Contractor',
    phone: 0,
    altnum: 0,
    photo: '',
    cnic: 0,
    experience: 0,
    commercial:'',
    residential:'',
area:[],
sector:[],

aproved:'aproved',
joindate:Date.now()
};

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

 
  use;
  val;
  constructor(private auth: AuthService,private api:ApiService ,private router:Router ) { }

  ngOnInit() {
  
   
  
  }
  signup(){
    this.auth.signUp(this.user.email, this.user.password).then(res=>{
    
      this.user.area.push(this.location);
      this.user.sector.push(this.location.name);
   
     //get data from database
    this.api.createUser(res.user.uid,this.user).then(resp=>{
  
    

  
    this.router.navigate(['dashboard/cont']);
              
          })
         });
    
      }
     
     selectChangeHandler(event:any){
      this.val=event.target.value;
    
      if (this.val == 'commercial') {
      this.location.type='commercial';
      this.user.commercial='commercial';
    }
    else if (this.val == 'residential') {
      this.location.type= 'residential';
      this.user.residential='residential';
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


  
}
