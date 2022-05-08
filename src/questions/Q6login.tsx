import Layout from '../components/Layout';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../styles/Q.css';


const firebaseConfig = {
  apiKey: "AIzaSyBhU79EMT1FMz4gWzcT8jV63_8i11LLyWQ",
  authDomain: "proacaq6.firebaseapp.com",
  projectId: "proacaq6",
  storageBucket: "proacaq6.appspot.com",
  messagingSenderId: "223734789933",
  appId: "1:223734789933:web:9a4e77ea9cbc3d08a2c5a4",
  measurementId: "G-RN331JVW7B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

/**
 * Q6
 * 問題：Firebase Auth をつかってログイン機能を使ってください
 *
 * がんばってね！
 *
 * by ゆうじろう
 *
 */
const Q6login = () => {
  const navigate = useNavigate();
  const [mailaddress, setMailaddress] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleSignIn = () => {
    console.log('==== signIn start ====');
    
    // Firebaseに接続して認証
    // Emailアドレスとパスワードをチェック
    signInWithEmailAndPassword(auth, mailaddress, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      navigate('/question6/main');
      // ...
    })
    .catch((error) => {
      console.log("何やっトンねん")
      const errorCode = error.code;
      const errorMessage = error.message;
    });
    // OKならログイン後のがめんへ
    // NGなら警告を表示
  };  


  return (
    <Layout>
      <main className="questionWrapper">
        <div className="questionZone">
          <h1>Firebase authを用いてログインが実装できるようにしてください！</h1>
          <h1>login</h1>
          <div>
            <TextField id="outlined-basic" label="Email" variant="outlined" onChange={(e) =>setMailaddress(e.target.value)} />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              onChange={(e) =>setPassword(e.target.value)}
              />
          </div>
          <br />
          <div>
            <Button variant="contained" onClick={handleSignIn}>
              Login
            </Button>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Q6login;
