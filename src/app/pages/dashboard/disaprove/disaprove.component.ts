import { Component, OnInit } from '@angular/core';
import{ApiService}from '../../../services/api/api.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-disaprove',
  templateUrl: './disaprove.component.html',
  styleUrls: ['./disaprove.component.css']
})
export class DisaproveComponent implements OnInit {
disaproved;
  constructor(private api :ApiService) { }

  ngOnInit() {
this.getDisAproved();
  }
  getDisAproved(){
   
    this.api.getDisAproved().pipe(map(list => list.map(item => {
      let data = item.payload.doc.data();
      let id = item.payload.doc.id;
      return { id, ...data };
    }))).subscribe(res => {
      this.disaproved= res;
      console.log(this.disaproved.reason);
      // console.log(res);
      
    })
      
  
  }
}
