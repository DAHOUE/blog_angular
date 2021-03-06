import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {
    // // Your web app's Firebase configuration
    // var firebaseConfig = {
    //   apiKey: "AIzaSyArgoLYF_Rdey_CKlf4SFmuFD6A9kyE6qo",
    //   authDomain: "blob-7fe23.firebaseapp.com",
    //   databaseURL: "https://blob-7fe23.firebaseio.com",
    //   projectId: "blob-7fe23",
    //   storageBucket: "blob-7fe23.appspot.com",
    //   messagingSenderId: "983545156785",
    //   appId: "1:983545156785:web:0a3f2f62b5652dc974fe90"
    // };
    // // Initialize Firebase

    // Your web app's Firebase configuration
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: 'AIzaSyBlfDHCMRABCNKm7DI9wDDzaFwz5P2DUGg',
      authDomain: 'blog-8b4ec.firebaseapp.com',
      databaseURL: 'https://blog-8b4ec.firebaseio.com',
      projectId: 'blog-8b4ec',
      storageBucket: 'blog-8b4ec.appspot.com',
      messagingSenderId: '676191857266',
      appId: '1:676191857266:web:20aa8e11f00c22da4870eb',
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
