import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDlSKO_l7WBxEUJConOvJ3JR42yf57IkQc",
  authDomain: "chat-app-a0041.firebaseapp.com",
  projectId: "chat-app-a0041",
  storageBucket: "chat-app-a0041.appspot.com",
  messagingSenderId: "922217097260",
  appId: "1:922217097260:web:2816bffc7ed13795104989",
  measurementId: "G-CVHPYSQHYH"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);