import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adddata',
  templateUrl: './adddata.component.html',
  styleUrls: ['./adddata.component.css']
})
export class AdddataComponent implements OnInit {
typeof;
  constructor() { }

  ngOnInit() {
  }
  selectChangeHandler(event:any){
 let type=event.target.value;
  
    if (type== 'residential') {
    this.typeof='residential';
    console.log(this.typeof);
  }
  else if (type == 'comercial') {
    this.typeof='comercial';
    console.log(this.typeof);
  }}
}
