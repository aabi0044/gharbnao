import { Component, OnInit } from '@angular/core';
import{ApiService}from '../../../services/api/api.service';
@Component({
  selector: 'app-architectarea',
  templateUrl: './architectarea.component.html',
  styleUrls: ['./architectarea.component.css']
})
export class ArchitectareaComponent implements OnInit {
user={area:[]}
id;
location:'';

  constructor(private api:ApiService) { }

  ngOnInit() {
  }
updateArea(){
 this.id=localStorage.getItem('uid');
 this.user.area.push(this.location);
 this.api.updatearchitectarea(this.id,this.location).then(res=>{
   console.log("updated");
 }) 
}
}
