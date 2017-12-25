import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyC1S3VaZXrThAgkgN7rqxUKyVq-uPk9ctc",
    authDomain: "expensifyapp-2eab0.firebaseapp.com",
    databaseURL: "https://expensifyapp-2eab0.firebaseio.com",
    projectId: "expensifyapp-2eab0",
    storageBucket: "expensifyapp-2eab0.appspot.com",
    messagingSenderId: "126100334276"
};
firebase.initializeApp(config);

firebase.database().ref().set({
    name: 'Daniyal Khan'
});