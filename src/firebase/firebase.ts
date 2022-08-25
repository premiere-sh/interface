import { initializeApp } from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAXrmMuj7gjo8s6Wryn85hYMFuSXzDPIQc',
  authDomain: 'premiere-6c19e.firebaseapp.com',
  projectId: 'premiere-6c19e',
  storageBucket: 'premiere-6c19e.appspot.com',
  messagingSenderId: '734972099162',
  appId: '1:734972099162:web:3df24f6142e665e6d23663',
  measurementId: 'G-F8REW9W40C'
}

const app = initializeApp(firebaseConfig)

export { firebaseConfig, app }
