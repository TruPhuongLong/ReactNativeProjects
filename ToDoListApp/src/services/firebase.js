import * as firebase from 'firebase';

export const initialize = () => firebase.initializeApp({
    apiKey: "AIzaSyDUzElHj_lHVDH7qLxSdgheaXlZ1MdKIww",
    authDomain: "todolistapp-e0245.firebaseapp.com",
    databaseURL: "https://todolistapp-e0245.firebaseio.com",
    projectId: "todolistapp-e0245",
    storageBucket: "todolistapp-e0245.appspot.com",
    messagingSenderId: "428032917120"
})

export const setListener = (endpoint, updaterFn) => {
    firebase.database().ref(endpoint).on('value', updaterFn);
    return () => firebase.database().ref(endpoint).off();
}

export const push = (endpoint, data) => {
    return firebase.database().ref(endpoint).push(data);
}

export const login = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);

export const signup = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password);

export const logout = () => firebase.auth().signOut();
