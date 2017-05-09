import firebase from 'firebase';
// import { get } from 'config';

const firebaseConfig = {
    "apiKey":           "AIzaSyC4gs7yarvsbHTLSgnWmVOPGYOfgZkqy4w",
        "authDomain":       "grocery-3be5b.firebaseapp.com",
        "databaseURL":      "https://grocery-3be5b.firebaseio.com",
        "storageBucket":    "grocery-3be5b.appspot.com"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export default database;
