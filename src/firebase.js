import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAyHE1PejsiUE970hbPZmVxYXxm3WB7ZBE",
  authDomain: "idobatakaigi-with-n.firebaseapp.com",
  projectId: "idobatakaigi-with-n",
  storageBucket: "idobatakaigi-with-n.appspot.com",
  messagingSenderId: "1058806172377",
  appId: "1:1058806172377:web:bc77a6428f073280e00cc8",
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messageRef = database.ref("messages");

export const pushMessage = ({ name, text }) => {
  messageRef.push({ name, text });
};
