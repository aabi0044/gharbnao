import { Component, OnInit } from '@angular/core';
import{ApiService}from '../../../services/api/api.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-aproved',
  templateUrl: './aproved.component.html',
  styleUrls: ['./aproved.component.css']
})
export class AprovedComponent implements OnInit {
aproved;
  constructor(private api:ApiService) { }

  ngOnInit() {
    this.getAproved();
  }
  getAproved(){
   
    this.api.getAproved().pipe(map(list => list.map(item => {
      let data = item.payload.doc.data();
      let id = item.payload.doc.id;
      return { id, ...data };
    }))).subscribe(res => {
      this.aproved= res;
      // console.log(res);
      
    })
      
  
  }

}
