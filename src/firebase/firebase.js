import * as firebase from 'firebase';

// Initialize Firebase
firebase.initializeApp(config);

const database = firebase.database();

const config = {
    apiKey: "AIzaSyC1S3VaZXrThAgkgN7rqxUKyVq-uPk9ctc",
    authDomain: "expensifyapp-2eab0.firebaseapp.com",
    databaseURL: "https://expensifyapp-2eab0.firebaseio.com",
    projectId: "expensifyapp-2eab0",
    storageBucket: "expensifyapp-2eab0.appspot.com",
    messagingSenderId: "126100334276"
};

database.ref().set({
    name: 'Daniyal Khan',
    age: 25,
    isSingle: true,
    location: {
        city: 'Karachi',
        Country: 'Pakistan'
    }
});

database.ref('age').set(26);
database.ref('location/city').set('Lahore');
database.ref('attributes').set({
    height: 5.6,
    weight: 65
});
