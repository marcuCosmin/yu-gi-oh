import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDCB3m5_XbVtYG3Ro9ulMWbkZAXqG5aKzk",
  authDomain: "yu-gi-oh-c9e92.firebaseapp.com",
  projectId: "yu-gi-oh-c9e92",
  storageBucket: "yu-gi-oh-c9e92.firebasestorage.app",
  messagingSenderId: "880583855144",
  appId: "1:880583855144:web:287cdc01f68d5fca2a791d"
}

const app = initializeApp(firebaseConfig)

export const firestore = getFirestore(app)
export const firestorage = getStorage(app)
