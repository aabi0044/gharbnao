import { AngularFirestore } from '@angular/fire/firestore';

import { Injectable } from '@angular/core';
import { firestore } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private afs:AngularFirestore ) { }
  createUser(uid, data) {
    return this.afs.doc('users/' + uid).set(data);
  }

  //read One 
  getUser(uid) {
    return this.afs.doc('users/' + uid).valueChanges();

  }
  //Read All
  getUsers() {
    return this.afs.collection('users').snapshotChanges();
  }
  //UPDATE 
  updateUser(uid, data) {
    console.log(uid,data);
    return this.afs.doc('users/' + uid).update(data );
  }
  updatearchitectarea(id,data){
    return this.afs.doc('users/' +id).update({
 area:firestore.FieldValue.arrayUnion(data)
 
 
    }) ;
  }
  //Delete 
  deleteUser(uid) {
    return this.afs.doc('users/' + uid).delete();
  }
getCustomer(){
  return this.afs.collection ('users', ref => ref.where('type', '==', 'Customer')).snapshotChanges();
}
getArchitect(){
  return this.afs.collection ('users', ref => ref.where('type', '==', 'Architect')).snapshotChanges();
}
getContractor(){
  return this.afs.collection ('users', ref => ref.where('type', '==', 'Contractor')).snapshotChanges();
}
getAproved(){
  return this.afs.collection ('users', ref => ref.where('aproved', '==', 'aproved')).snapshotChanges();
}
getDisAproved(){
  return this.afs.collection ('users', ref => ref.where('aproved', '==', 'disaproved')).snapshotChanges();
}
getPending(){
  return this.afs.collection ('users', ref => ref.where('aproved', '==', 'pending')).snapshotChanges();
}

 createProject(data) {
    return this.afs.collection('projects').add(data);
  }

  //read One 
  getProject(uid) {
    return this.afs.doc('projects/' + uid).valueChanges();
  }
  //Read All
  getProjects() {
    return this.afs.collection('projects').snapshotChanges();
  }
  //UPDATE 
  updateProject(uid, data) {
    return this.afs.doc('projects/' + uid).update({
      
    });
  }
  //Delete 
  deleteProject(uid) {

    return this.afs.doc('projects/' + uid).delete();
  
  }
  getImages(id){
    return this.afs.collection('projects', ref => ref.where('uid','==',id)).snapshotChanges();
  }
 getSpecific(id){
   return this.afs.collection('projects' ,ref=> ref.where('uid','==',id)).snapshotChanges();
 }

 updateArea(id,data,data1){
   return this.afs.doc('users/' +id).update({
area:firestore.FieldValue.arrayUnion(data),
sector:firestore.FieldValue.arrayUnion(data1)

   }) ;
 }
 filterbyres(area,type,property){  
    
  console.log(property);
   console.log(type);
  return this.afs.collection('users' ,ref=>ref.where('type','==','Contractor').where('residential','==', property).where('sector',"array-contains",area).orderBy('rating','desc')).snapshotChanges();

}
filterbycom(area,type,property){  
    
  console.log(property);
   console.log(type);
  return this.afs.collection('users' ,ref=>ref.where('type','==','Contractor').where('sector',"array-contains",area).where('commercial','==',property).orderBy('rating','desc')).snapshotChanges();

}
filterArchitect(area){
  return this.afs.collection('users',ref=>ref.where('type','==','Architect').where('area','array-contains',area).orderBy('rating','desc')).snapshotChanges();
}
getUserStars(userId) {
  const starsRef = this.afs.collection('stars', ref => ref.where('userId', '==', userId) );
  return starsRef.valueChanges();
}
 ////============================================== STAR RATING========================================///////////
// Get all stars that belog to a Movie
getMovieStars(customerId) {
  console.log(customerId);

  const starsRef = this.afs.collection('stars', ref => ref.where('customerId', '==', customerId) );
  return starsRef.valueChanges();
}

// Create or update star
setStar(userId, customerId, value) {
  // Star document data
  const star= { userId, customerId, value };

  // Custom doc ID for relationship
  const starPath = `stars/${star.userId}_${star.customerId}`;

  // Set the data, return the promise
  return this.afs.doc(starPath).set(star)
}
//=======================================================================================================================
}