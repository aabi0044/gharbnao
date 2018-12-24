import { Component, OnInit } from '@angular/core';
import{ApiService}from '../../../services/api/api.service';
import { map } from 'rxjs/operators';
import {Router}from '@angular/router';
@Component({
  selector: 'app-cust',
  templateUrl: './cust.component.html',
  styleUrls: ['./cust.component.css']
})
export class CustComponent implements OnInit {
user;
  constructor(private api:ApiService,private router:Router) { }

  ngOnInit() {
    this.getCustomers();
  }
getCustomers(){
  this.api.getCustomer().pipe(map(list=>list.map(item=>{
let data= item.payload.doc.data();
let id =item.payload.doc.id;
return {id,...data}
  }))).subscribe(res=>{
    this.user=res;
    console.log(this.user)
  })

}
}
