import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyDzJ801UpmrB1zqDQApam4gyNc5CYfHXE4",
  authDomain: "shop-boss.firebaseapp.com",
  databaseURL: "https://shop-boss.firebaseio.com",
  projectId: "shop-boss",
  storageBucket: "shop-boss.appspot.com",
  messagingSenderId: "8850235231",
  appId: "1:8850235231:web:e7e03ffcc004b03ee6e0ea",
  measurementId: "G-6TN1DDPSV9"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if(!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(err) {
      console.log('error creating user', err.message)
    }  
  } 
  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;
