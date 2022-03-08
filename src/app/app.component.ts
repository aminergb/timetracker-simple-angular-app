import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent  {

  constructor(){

    var firebaseConfig = {
      apiKey: "AIzaSyDNWesNf98opBvOcQCdMyKEBB-xOxoGBCY",
      authDomain: "timetracker-c936e.firebaseapp.com",
      databaseURL: "https://timetracker-c936e.firebaseio.com",
      projectId: "timetracker-c936e",
      storageBucket: "timetracker-c936e.appspot.com",
      messagingSenderId: "337564258902",
      appId: "1:337564258902:web:2dfae60e351bee167ea1f7"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
