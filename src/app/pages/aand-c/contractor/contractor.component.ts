import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api/api.service';
import { map } from 'rxjs/operators';

import { Router } from '@angular/router';

@Component({
  selector: 'app-contractor',
  templateUrl: './contractor.component.html',
  styleUrls: ['./contractor.component.css']
})
export class ContractorComponent implements OnInit {
  projects;
  user;
  no;
  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
    this.showProjects();
    this.getUser();
  }
  addProject() {

    this.router.navigate(['addproject']);
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
  this.router.navigate(['dealarea']);
}
}
