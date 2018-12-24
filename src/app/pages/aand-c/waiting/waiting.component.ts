import { Component, OnInit } from '@angular/core';
import{ApiService} from '../../../services/api/api.service';
import{Router}from '@angular/router';
@Component({
  selector: 'app-waiting',
  templateUrl: './waiting.component.html',
  styleUrls: ['./waiting.component.css']
})
export class WaitingComponent implements OnInit {
pro;
status;
reason;
  constructor(private api:ApiService,private router:Router) { }

  ngOnInit() {
    this.checkUser();
    // this.checktype();

  }

  checkUser(){
    let uid=localStorage.getItem('uid');
    console.log(uid);
    this.api.getUser(uid).subscribe(resp => {
      if (resp) {
        // localStorage.setItem('uid', res.user.uid);
        // localStorage.setItem('email', this.user.email);
        this.pro = resp;
      
        this.reason=this.pro.reason;
        this.status=this.pro.aproved;
        console.log(this.status);
        if (this.status) {
         // this.router.navigate(['waiting']);
         console.log(this.status);
         let status='pending';
         switch (this.status) {
          case 'aproved':
       
          this.checktype();
            break;
            case 'disaproved':
            this.router.navigate(['waiting']);
            break;
            case 'pending':
            this.router.navigate(['waiting']);
            break;
          default:
          console.log("nothing");
        }
          console.log('user is not approved by admin yet');
        }
      
  }
})
  }
  checktype(){ 
    let id=localStorage.getItem('uid');
    console.log(id);
    this.api.getUser(id).subscribe(resp => {
      if (resp) {
        this.pro = resp;
        console.log (this.pro.type);
        switch (this.pro.type) {
          case 'Customer':
          this.router.navigate(['home']);
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
  }})}
  logOut(){
    localStorage.clear();
    this.router.navigate(['login']);
  }
  profileManagement(){
    this.router.navigate(['profilemanagement']);
  }
}
