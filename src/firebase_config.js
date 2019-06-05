import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAwny25nrUeXo-9HXCX1mnsB3g5AlPqfaM",
    authDomain: "smoothie-delight.firebaseapp.com",
    databaseURL: "https://smoothie-delight.firebaseio.com",
    projectId: "smoothie-delight",
    storageBucket: "smoothie-delight.appspot.com",
    messagingSenderId: "766093227293",
    appId: "1:766093227293:web:340811f30f257330"
};
firebase.initializeApp(firebaseConfig);

export default firebase;