// Firebase-projektin jyle-pelitilastot web-sovelluksen asetukset (Firebase Console → Project settings → Your apps).
// Nämä arvot eivät ole salaisia. Kun apiKey on täytetty, sovellus käyttää Firebasea, muuten testitilaa (data vain tällä laitteella).
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyAN0Z0uv2Edn_2XLzznUk265_gnDl2f8ow",
  authDomain: "jyle-pelitilastot.firebaseapp.com",
  projectId: "jyle-pelitilastot",
  storageBucket: "jyle-pelitilastot.firebasestorage.app",
  messagingSenderId: "1010154653732",
  appId: "1:1010154653732:web:9380fc0fe6574ef42ff0b1"
};

// Tämä koodi on tilan "salasana": kaikki data on Firestoressa tämän koodin alla, eikä käyttäjän tarvitse syöttää sitä.
// Älä jaa sivun osoitetta julkisesti. Vaihda koodi, jos haluat aloittaa tyhjästä (väh. 8 merkkiä).
window.SPACE_CODE = "jyle-84a5d92e222c";
