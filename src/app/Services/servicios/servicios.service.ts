import { Injectable } from '@angular/core';
import { collectionData } from '@angular/fire/firestore';
import { Firestore } from '@angular/fire/firestore/firebase';
import { addDoc, collection } from '@firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  // constructor(private fs:Firestore) { }
  // EnviarComentario(){
  //   let  comentarioCollection = collection(this.fs, 'Comentarios');
  //   return collectionData(comentarioCollection,{idField:'id'})
  // }
  // AgregarComentario(desc: string){
  //   let data = {description:desc};
  //   let comentarioCollection = collection(this.fs,'Comentarios');
  //   return addDoc(comentarioCollection,data);
  // }
}
