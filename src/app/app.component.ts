import { Component } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyArgoLYF_Rdey_CKlf4SFmuFD6A9kyE6qo",
    authDomain: "blob-7fe23.firebaseapp.com",
    databaseURL: "https://blob-7fe23.firebaseio.com",
    projectId: "blob-7fe23",
    storageBucket: "blob-7fe23.appspot.com",
    messagingSenderId: "983545156785",
    appId: "1:983545156785:web:0a3f2f62b5652dc974fe90"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  }
}
