import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAyViUX_9zhIwnUwLNWmNnFILL4lY_fxrI",
  authDomain: "kartuli-80140.firebaseapp.com",
  projectId: "kartuli-80140",
  storageBucket: "kartuli-80140.firebasestorage.app",
  messagingSenderId: "551782314695",
  appId: "1:551782314695:web:1e5bdce80730466f53c4e2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

window.signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    localStorage.setItem('kartuli_name', user.displayName);
    window.location.href = 'profile.html';
  } catch (error) {
    alert('Помилка входу: ' + error.message);
  }
};

window.signOutUser = async () => {
  await signOut(auth);
  localStorage.clear();
  window.location.href = 'index.html';
};

onAuthStateChanged(auth, (user) => {
  if (user) {
    localStorage.setItem('kartuli_name', user.displayName);
    localStorage.setItem('kartuli_email', user.email);
  }
});
