import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDYpvxwa5dKMV8IeZNvZnPuU3SECIGGUkA',
  authDomain: 'taskr-3817b.firebaseapp.com',
  projectId: 'taskr-3817b',
  storageBucket: 'taskr-3817b.appspot.com',
  messagingSenderId: '225744736117',
  appId: '1:225744736117:web:e40a81c9f78ba6cd420d3c',
}

firebase.initializeApp(firebaseConfig)

export default firebase
