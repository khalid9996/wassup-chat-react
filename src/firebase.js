// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB2YYzcWh6PVU9BZYJToypMVsTycbH_17E',
  authDomain: 'wassup-178d9.firebaseapp.com',
  projectId: 'wassup-178d9',
  storageBucket: 'wassup-178d9.appspot.com',
  messagingSenderId: '377152918083',
  appId: '1:377152918083:web:ff3fa20cb15753daa73af6',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()
