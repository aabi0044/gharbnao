import { Component, OnInit } from '@angular/core';
import{ApiService}from '../../../services/api/api.service';
import { AngularFireStorageReference, AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { Observable, } from 'rxjs';
import{AuthService}from '../../../services/auth/auth.service';
import { map, finalize } from 'rxjs/operators';



@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddprojectComponent implements OnInit {
project={
  name:'',
  pictures:'',
  yoc:0,
  about:'',
  detail:'',
  reviews:'',
  area:'',
  price:0,
  uid:'',
  image:[]
}
reasons;
check:boolean=false;
img;
len;
ref: AngularFireStorageReference;
task: AngularFireUploadTask;
uploadState: any;
imagUrl: Observable<any>;
  constructor(private api:ApiService, private auth:AuthService,private afStorage: AngularFireStorage) { }

  ngOnInit() {
    this.showimages();
  }
  upload(event) {
    this.check=false;
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(event.target.files[0]);
    this.uploadState = this.task.snapshotChanges().pipe(map(s => s.state));
    this.task.snapshotChanges().pipe(
      finalize(() => {
        this.imagUrl = this.ref.getDownloadURL();
        this.imagUrl.subscribe(
          resp => {
            this.project.image.push(resp);
            this.task.then(
              () => {
                console.log(this.project.image);
                this.check=true;
                //this.api.createProject(this.project);
                console.log('uploaded')
              }
            )
          }
        )
      })
    )
    .subscribe();
  }


  addProject(){
    console.log(this.check);
    if (this.check=true){
      console.log(this.check);
        this.api.createProject(this.project).then(res=>{
      console.log("project Updated");

    })
}
  console.log(this.check);
  }
  selectChangeHandler(event:any){
      this.reasons=event.target.value;
    
      if (this.reasons == '1990') {
      this.project.yoc=1990;
    }
    else if (this.reasons == '1991') {
      this.project.yoc=1991;
    }
    else if (this.reasons == '1992') {
      this.project.yoc=1992;
    }
    else if (this.reasons == '1993') {
      this.project.yoc=1993;
    }
    else if (this.reasons == '1994') {
      this.project.yoc=1994;
    }
    else if (this.reasons == '199') {
      this.project.yoc=1995;
    }
    else if (this.reasons == '1996') {
      this.project.yoc=1996;
    }
    else if (this.reasons == '1997') {
      this.project.yoc=1997;
    }
    else if (this.reasons == '1998') {
      this.project.yoc=1998;
    }
    else if (this.reasons == '1999') {
      this.project.yoc=1999;
    }
    else if (this.reasons == '2000') {
      this.project.yoc=2000;
    }
    else if (this.reasons == '2001') {
      this.project.yoc=2001;
    }
    else if (this.reasons == '2002') {
      this.project.yoc=2002;
    }
    else if (this.reasons == '2003') {
      this.project.yoc=2003;
    }
    else if (this.reasons == '2004') {
      this.project.yoc=2004;
    }
    else if (this.reasons == '2005') {
      this.project.yoc=2005;
    }
    else if (this.reasons == '2006') {
      this.project.yoc=2006;
    }
    else if (this.reasons == '2007') {
      this.project.yoc=2007;
    }
    else if (this.reasons == '2008') {
      this.project.yoc=2008;
    }
    else if (this.reasons == '2009') {
      this.project.yoc=2009;
    }
    else if (this.reasons == '2010') {
      this.project.yoc=2010;
    }
    else if (this.reasons == '2011') {
      this.project.yoc=2011;
    }
    else if (this.reasons == '2012') {
      this.project.yoc=2012;
    }
    else if (this.reasons == '2013') {
      this.project.yoc=2013;
    }
    else if (this.reasons == '2014') {
      this.project.yoc=2014;
    }
    else if (this.reasons == '2015') {
      this.project.yoc=2015;
    }
    else if (this.reasons == '2016') {
      this.project.yoc=2016;
    }
    else if (this.reasons == '2017') {
      this.project.yoc=2017;
    }
    else if (this.reasons == '2018') {
      this.project.yoc=2018;
    }
    this.project.uid=localStorage.getItem('uid');
    console.log(this.project.uid);
console.log(this.project.yoc);
    }

    showimages(){
let id=localStorage.getItem('uid');
this.api.getImages(id).pipe(map(list=>list.map(item=>{
  let data= item.payload.doc.data();
  let id=item.payload.doc.id;
  return{id,...data}
}))).subscribe(res=>{
  console.log(res);
  this.img=res;
  
  for(let i=0;i<res.length;i++){
  console.log(this.img[i].image);
    
  }
  
})
    }
    

}
