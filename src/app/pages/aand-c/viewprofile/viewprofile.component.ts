import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{ApiService}from '../../../services/api/api.service';
import { map} from 'rxjs/operators';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {
uid;
user;
img;
no;
userId;
customerId;
stars;
avgRating;
len;
  constructor(private route: ActivatedRoute,private api:ApiService) {
    

    this.uid = this.route.snapshot.params['id'];
    this.customerId=this.uid;
    console.log(this.uid);
    this.getReview();
   }

  ngOnInit() {
    this.getUser();
    this.showProjects();
  }
getUser(){
this.api.getUser(this.uid).subscribe(res=>{
  console.log(res);
this.user=res;
});
}
showProjects(){
 
  this.api.getSpecific(this.uid).pipe(map(list=>list.map(item=>{
    let data= item.payload.doc.data();
    let id=item.payload.doc.id;
    return{id,...data}
  }))).subscribe(res=>{
    console.log(res);
    this.img=res;
    console.log(this.img);
  this.no=this.img.length;
  })
      }
      starHandler(value) {
        this.userId=localStorage.getItem('uid');
        this.api.setStar(this.userId, this.customerId, value)
      }
getReview(){
this.api.getMovieStars(this.customerId).subscribe(res=>{
    console.log(res);
    this.stars=res;

    this.len=this.stars.length;
    let rate =0;
    for(let i=0;i<this.len;i++){
    rate=this.stars[i].value+rate;   
    }
    this.avgRating=rate/this.len;
    console.log(this.avgRating);
    let data={
      rating:this.avgRating
    }
    this.api.updateUser(this.uid,data).then(res=>{
      console.log(res);
    })
    // this.avgRating = this.stars.map(arr => {
    //   console.log(arr);
    //   const ratings = arr.map(v => v.value)
    //   return ratings.length ? ratings.reduce((total, val) => total + val) / arr.length : 'not reviewed'
    // })
  })

 
     
}
      
    
}
