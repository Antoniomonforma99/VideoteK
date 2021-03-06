import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private firestore: AngularFirestore) { }

  getMovies() {
    return this.firestore.collection('movies').snapshotChanges();
  }
}