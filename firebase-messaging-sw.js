importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

  const firebaseConfig = {
    apiKey: "AIzaSyBNdUCOex6fVdBBfiMXyWhJtmVFwcf_Tdo",
    authDomain: "pwa-push-test-2283d.firebaseapp.com",
    projectId: "pwa-push-test-2283d",
    storageBucket: "pwa-push-test-2283d.firebasestorage.app",
    messagingSenderId: "861182613182",
    appId: "1:861182613182:web:ba7b947993fa3c0610f0ef"
  };

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();