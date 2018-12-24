import { Component, OnInit } from '@angular/core';
import{ ApiService }from '../../../services/api/api.service';
import{Router} from '@angular/router';
@Component({
  selector: 'app-profilemanagement',
  templateUrl: './profilemanagement.component.html',
  styleUrls: ['./profilemanagement.component.css']
})
export class ProfilemanagementComponent implements OnInit {
current;
name:string;
email:string;
password:string;
type:string;
phone:number;
photo:string;
cnic:number;
altnum:number;
experience:string;
verified:false;
area:string;
endprice:number;
startprice:number;
aproved:string;
check:string;

  constructor(private api:ApiService,private router:Router) { }

  ngOnInit() {
    this.getProfile();
    
  }
getProfile(){
let currentUser=localStorage.getItem('uid');
console.log(currentUser);
this.api.getUser(currentUser).subscribe(res=>{
  this.current=res;
  console.log(this.current);
  this.check=this.current.aproved;
  console.log(this.check);
  if (this.current.type) {
    switch (this.current.type) {
      case 'Customer':
      console.log('customer');
        break;
        case 'Contractor':
        this.name=this.current.name;
        this.phone=this.current.phone;
        this.altnum=this.current.altnum;
        this.area=this.current.area;
        this.cnic=this.current.cnic;
        this.endprice=this.current.endprice;
        this.startprice=this.current.startprice;
        this.experience=this.current.experience;
        this.photo=this.current.photo;
        this.aproved=this.current.aproved;
        
        console.log('contractor');
        break;
        case 'Architect':
        this.name=this.current.name;
        this.phone=this.current.phone;
        this.altnum=this.current.altnum;
        this.area=this.current.area;
        this.cnic=this.current.cnic;
        this.endprice=this.current.endprice;
        this.startprice=this.current.startprice;
        this.experience=this.current.experience;
        this.photo=this.current.photo;
        this.aproved=this.current.aproved;
        console.log(this.aproved);
        console.log('Architect');
        break;
      default:
      console.log("nothing");
    }  
}
})
}
updateUser(){
  
  let  id = localStorage.getItem('uid');
  console.log(id);
    let data={
      photo:this.photo,
      cnic:this.cnic,
      altnum:this.altnum,
      experience:this.experience,
      area:this.area,
      startprice:this.startprice,
      endprice:this.endprice,
      profile:true,
      aproved:'pending'
    }
    console.log(data);
    this.api.updateUser(id,data).then(res=>{
      console.log(' User Updated');

      if (this.aproved== 'aproved') {
        switch (this.current.type) {
          case 'Customer':
          this.router.navigate(['customer']);
            break;
            case 'Contractor':
            this.router.navigate(['contractor']);
            break;
            case 'Architect':
            this.router.navigate(['architect']);
            break;
          default:
          console.log("nothing");
        }
      }
      else{
        this.router.navigate(['waiting']);
      }
    })
  }
}
