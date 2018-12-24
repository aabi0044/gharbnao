import { Injectable } from '@angular/core';
import{AngularFireAuth} from '@angular/fire/auth';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  res;
str=''; 
  constructor(private afAuth:AngularFireAuth) { }
  
  signUp(email,password){
    return this.afAuth.auth.createUserWithEmailAndPassword(email,password);
  }
  login(email,password){
  
    return this.afAuth.auth.signInWithEmailAndPassword(email,password);
  }
   logout(){
     this.afAuth.auth.signOut();
    
   }
 isLogedIn(){
   let res;
   res=this.afAuth.auth.currentUser;

  return res;
 } 
 googleLogin(){
  return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  console.log('method works');
}
facebookLogin(){
  this.res =this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
  return this.res;
 }
}
