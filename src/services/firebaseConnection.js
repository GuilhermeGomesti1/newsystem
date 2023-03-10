import { initializeApp} from 'firebase/app'
import { getAuth } from 'firebase/auth'
import {getFirestore } from 'firebase/firestore'

import { getStorage } from 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyB8QLqgRrpqWMAcatuO6lhje7dS3aUamJ4",
    authDomain: "tickets-66fb5.firebaseapp.com",
    projectId: "tickets-66fb5",
    storageBucket: "tickets-66fb5.appspot.com",
    messagingSenderId: "849770269856",
    appId: "1:849770269856:web:c6abbda0643322f302cdc5",
    measurementId: "G-N4SS5BXMFS"
  };

  const firebaseApp =  initializeApp(firebaseConfig);

  const auth = getAuth(firebaseApp);
  const db = getFirestore(firebaseApp);
  const storage = getStorage(firebaseApp);


  export {auth, db, storage};

  //storage do firebase está na versão demo...