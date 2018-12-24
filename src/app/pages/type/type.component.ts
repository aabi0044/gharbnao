import { Component, OnInit } from '@angular/core';
import{ApiService} from '../../services/api/api.service';
import{Router }from '@angular/router';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {
user={type:'',
email:'',
lid:''}

  constructor(private api:ApiService,private router :Router) { }

  ngOnInit() {

   
  }
//   contructor(){
    
//  this.user.type="Contractor";

//  let  id = localStorage.getItem('uid');
//    let data={
//      type:this.user.type,
//      aproved:'pending' 
//     }
//    this.api.updateUser(id,data).then(res=>{
//      console.log('type Updated')
//      this.router.navigate(['profileupdate']);
//    })
// //  localStorage.set('type',this.user.type);
//   }
  customer(){
    
    this.user.type="Customer";
   
    let  id = localStorage.getItem('uid');
      let data={
        type:this.user.type,
        profile:true  
       }
      this.api.updateUser(id,data).then(res=>{
        console.log('type Updated')
        this.router.navigate(['home']);
      })
   //  localStorage.set('type',this.user.type);
     }
     architect(){
    
      this.user.type="Architect";
      let  id = localStorage.getItem('uid');
        let data={
          type:this.user.type,
          aproved:'pending' 
         }
        this.api.updateUser(id,data).then(res=>{
          console.log('type Updated')
          this.router.navigate(['profileupdate']);
        })
     //  localStorage.set('type',this.user.type);
       }
}
