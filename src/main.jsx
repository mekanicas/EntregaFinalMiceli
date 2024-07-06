import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAYyAaG3BskHorBdyo_tiRzWHeXF7M1sSA",
  authDomain: "skull-clothing.firebaseapp.com",
  projectId: "skull-clothing",
  storageBucket: "skull-clothing.appspot.com",
  messagingSenderId: "794204977008",
  appId: "1:794204977008:web:eb9594cae0279e964d41b5"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </>
);
