import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

var firebaseConfig = {
  apiKey: "AIzaSyDmduVSbkHhol7uDjy8EVEbat4j6u5hOoE",
  authDomain: "contact-list-4a91d.firebaseapp.com",
  databaseURL: "https://contact-list-4a91d.firebaseio.com",
  projectId: "contact-list-4a91d",
  storageBucket: "contact-list-4a91d.appspot.com",
  messagingSenderId: "1004742598288"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),  
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
