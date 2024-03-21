import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Componentes/home/home.component';
import { LoginComponent } from './Componentes/login/login.component';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { ServiciosService } from './Services/servicios/servicios.service';

const firebaseConfig = {
  apiKey: "AIzaSyA2zvc7hTa_gfXADYJjMprGvUquYUrtm6I",
  authDomain: "shalomrecepcioneseventos-a109f.firebaseapp.com",
  projectId: "shalomrecepcioneseventos-a109f",
  storageBucket: "shalomrecepcioneseventos-a109f.appspot.com",
  messagingSenderId: "86176467667",
  appId: "1:86176467667:web:4f0d27d32c3c000b81a226"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // provideFirebaseApp(() => initializeApp(firebaseConfig)),
    // provideFirestore(() => getFirestore()),
  ],
  providers: [ServiciosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
