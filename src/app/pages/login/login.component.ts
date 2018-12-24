import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  use;
  uid;
  user = {
    name: '',
    email: '',
    password: '',
    type: '',
    phone: 0,
    photo: '',
    cnic: 0,
    altnum: 0,
    experience: '',
 
    area: '',
    startprice: 0,
    endprice: 0,
    profile: false,
    aproved: ''

  }
  err
  pro;
  constructor(private auth: AuthService, private api: ApiService, private router: Router) { }

  ngOnInit() {
    
  }
  login() {
    if (this.user.email=='admin'&& this.user.password=='admin'){
      this.router.navigate(['dashboard']);

    }
    else{

    
    this.auth.login(this.user.email, this.user.password).then(res => {
      //get data from database
      console.log(res);
      this.api.getUser(res.user.uid).subscribe(resp => {
        if (resp) {
          localStorage.setItem('uid', res.user.uid);
          localStorage.setItem('email', this.user.email);
          this.pro = resp;
          console.log(this.pro.profile);
          if (this.pro.profile === false) {
            this.router.navigate(['aandc/profileupdate']);
          }
          else {
           this.checktype();
          }
          /* if response available */
          localStorage.setItem('uid', res.user.uid);
          localStorage.setItem('email', this.user.email);
          // this.router.navigate(['profileupdate']);
          console.log('log In Successfully')
          this.router.navigate(['waiting']);
        }
        else {
          err => {
            this.err = err;
            setTimeout(() => this.err = '', 3000);
          }
        }
      })
    })}
  }
  loginGoogle() {
    this.auth.googleLogin().then(res => {
      console.log(res);
      this.use = res;
      this.uid = this.use.user.uid;
      let cus = {
        name: this.use.user.displayName,
        email: this.use.user.email,
        password: '',
        type: '',
        phone: 0,
        photo: '',
        cnic: 0,
        altnum: 0,
        experience: '',
       
        area: '',
        startprice: 0,
        endprice: 0,

      }
      this.api.createUser(this.uid, cus).then(resp => {
        localStorage.setItem('uid', this.uid);
        localStorage.setItem('email', cus.email);
       
        localStorage.setItem('name', cus.name);
        console.log('user created');
        this.router.navigate(['profileupdate']);
      })
    })
  }
  loginFacebook() {
    this.auth.facebookLogin().then(res => {
      this.use = res;
      this.uid = this.use.user.uid;
      let cus = {
        name: this.use.user.displayName,
        email: this.use.user.email,
        password: '',
        type: '',
        phone: 0,
        photo: '',
        cnic: 0,
        altnum: 0,
        experience: '',
       
        area: '',
        startprice: 0,
        endprice: 0
      }
      this.api.createUser(this.uid, cus).then(resp => {
        localStorage.setItem('uid', this.uid);
        localStorage.setItem('email', cus.email);
        localStorage.setItem('name', cus.name);
        console.log('user created');
        this.router.navigate(['profileupdate']);
      })
    })
  }
  checktype(){ 
    let id=localStorage.getItem('uid');
    console.log(id);
    this.api.getUser(id).subscribe(resp => {
      if (resp) {
        this.pro = resp;
        let check=this.pro.type;
        switch (check) {
          case 'Customer':
          this.router.navigate(['home']);
            break;
            case 'Contractor':
            this.router.navigate(['/contractor']);
            break;
            case 'Architect':
            this.router.navigate(['/architect']);
            break;
          default:
          console.log("nothing");
        }
  }})}

}
