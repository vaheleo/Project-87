import(initializeApp) from "firebase/app"
import(getFirestore) from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCCkTmYMWBnqWPeB1h293tEoJ--thVJ1cQ",
  authDomain: "spectagram-app-ab133.firebaseapp.com",
  databaseURL: "https://spectagram-app-ab133-default-rtdb.firebaseio.com",
  projectId: "spectagram-app-ab133",
  storageBucket: "spectagram-app-ab133.appspot.com",
  messagingSenderId: "59558632149",
  appId: "1:59558632149:web:963da715c0338a86e8a05c"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export const database = getFirestore(firebase)
