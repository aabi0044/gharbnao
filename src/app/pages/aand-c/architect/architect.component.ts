import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import{ApiService}from '../../../services/api/api.service';
import { map} from 'rxjs/operators';

@Component({
  selector: 'app-architect',
  templateUrl: './architect.component.html',
  styleUrls: ['./architect.component.css']
})
export class ArchitectComponent implements OnInit {
projects;
img;
no;
user;
  constructor(private router:Router,private api:ApiService) { }

  ngOnInit() {
    this.showProjects();
    this.getUser();
  }

addProject(){

this.router.navigate(['addproject']);
console.log('ok')
}
showProjects() {
  let id = localStorage.getItem('uid');
  this.api.getSpecific(id).pipe(map(list => list.map(item => {
    let data = item.payload.doc.data();
    let id = item.payload.doc.id;
    return { id, ...data }
  }))).subscribe(res => {
    this.projects=res;
    this.no=this.projects.length;
  })

}
getUser() {
  let id= localStorage.getItem('uid');
  this.api.getUser(id).subscribe(res => {
    console.log(res);
    this.user = res;
  });
}
addArea(){
  this.router.navigate(['architectarea'])
}
      
}
