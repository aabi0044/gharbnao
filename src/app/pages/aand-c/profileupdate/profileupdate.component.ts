import { Component, OnInit } from '@angular/core';
import{ApiService}from '../../../services/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profileupdate',
  templateUrl: './profileupdate.component.html',
  styleUrls: ['./profileupdate.component.css']
})
export class ProfileupdateComponent implements OnInit {
  user={
    photo:'',
    cnic:0,
    altnum:0,
    experience:'',
       area:[],
    startprice:0,
    endprice:0,
    profile:true,
    aproved:''
  }
  err;
  region:'';
  id;
  constructor(private api:ApiService ,private router:Router) { }

  ngOnInit() {
  }
  updateuser(){
  
    this.id = localStorage.getItem('uid');
  console.log(this.id);
  // this.api.getUser(id).subscribe(res=>{
  //   console.log(res);
  // })
    let data={
      photo:this.user.photo,
      cnic:this.user.cnic,
      altnum:this.user.altnum,
      experience:this.user.experience,
      area:[],
      startprice:this.user.startprice,
      endprice:this.user.endprice,
      profile:true,
      aproved:'pending'
    }
    console.log(data);
    
    this.api.updateUser(this.id,data).then(res=>{
      console.log('Product updated');
      // this.router.navigate(['/waiting']);
    })
    this.user.area.push(this.region);
    this.api.updatearchitectarea(this.id,this.region).then(res=>{
      console.log('updated');
    })
  }
  
}
