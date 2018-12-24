import { Component, OnInit } from '@angular/core';
import{Router}from '@angular/router';
import{AuthService }from '../../services/auth/auth.service';
import{ApiService} from '../../services/api/api.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  
  user={
    name:'',
    email:'',
    password:'',
    type:'',
    phone:0,
    photo:'',
    cnic:0,
    altnum:0,
    experience:'',
    area:'',
    startprice:0,
    endprice:0,
    profile:false,
  aproved:'',
  reason:''
}
err
uid;
use;
  constructor(private auth: AuthService,private api:ApiService ,private router:Router ) { }

  ngOnInit() {
  }
  signup(){
    this.auth.signUp(this.user.email, this.user.password).then(res=>{
     //get data from database
    this.api.createUser(res.user.uid,this.user).then(resp=>{
    localStorage.setItem('uid',res.user.uid);
    localStorage.setItem('email',this.user.email);
    localStorage.setItem('name',this.user.name);
    localStorage.setItem('type',this.user.type);
    this.router.navigate(['type']);
              
          })
         });
    
      }
      loginGoogle() {
        this.auth.googleLogin().then(res => {
          console.log(res);
          this.use= res;
          this.uid=this.use.user.uid;
         let  cus={
             name:this.use.user.displayName,
             email:this.use.user.email,
             password:'',
             type:'',
             phone:0,
             photo:'',
             cnic:0,
             altnum:0,
             experience:'',
             area:'',
             startprice:0,
             endprice:0
         }
             this.api.createUser(this.uid,cus).then(resp => {
               localStorage.setItem('uid', this.uid);
               localStorage.setItem('email', cus.email);
               localStorage.setItem('name', cus.name);
               console.log('user created');
               this.router.navigate(['type']);
             })




          //get data from database
          // this.api.getUser(res.user.uid).subscribe(resp => {
          //   if (resp) {   /* if response available */
          //     localStorage.setItem('uid', res.user.uid);
          //     localStorage.setItem('email', this.user.email);
          //     this.router.navigate(['profileupdate']);
          //   }
          //   else {
          //     err => {
          //       this.err = err;
          //       setTimeout(() => this.err = '', 3000);
          //     }
          //   }
          // })
        })
      }
      loginFacebook() {
        this.auth.facebookLogin().then(res => {
         this.use= res;
         this.uid=this.use.user.uid;
        let  cus={
            name:this.use.user.displayName,
            email:this.use.user.email,
            password:'',
            type:'',
            phone:0,
            photo:'',
            cnic:0,
            altnum:0,
            experience:'',
            area:'',
            startprice:0,
            endprice:0
        }
            this.api.createUser(this.uid,cus).then(resp => {
              localStorage.setItem('uid', this.uid);
              localStorage.setItem('email', this.user.email);
              localStorage.setItem('name', this.user.name);
              console.log('user created');
              this.router.navigate(['login']);
            })
          
            // this.api.getUser(res.user.uid).subscribe(resp => {
            //   if (res) {   /* if response available */
            //     localStorage.setItem('uid', res.user.uid);
            //     localStorage.setItem('email', this.user.email);
            //     console.log('User Already Exist');
            //     this.router.navigate(['profileupdate']);
            //   }
            //   else {
            //     err => {
            //       this.err = err;
            //       setTimeout(() => this.err = '', 3000);
            //     }
            //   }
            // })
          
        })
      }
}
