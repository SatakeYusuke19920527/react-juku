import LayoutLogin from '../components/LayoutLogin';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import '../styles/Q.css';
import { useState } from 'react';
import { login } from '../plugins/firebase';
import { useLoginCheck } from '../hooks/useLoginCheck';

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
  const [emailAddress, setEmailAddress] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const isLogin = useLoginCheck();

  const navigate = useNavigate();

  const handleSignIn = async () => {
    await login(emailAddress, password);

    if (!isLogin) {
      setErrorMessage("ログインできません");
    }
  };

  return (
    <LayoutLogin>
      <main className="questionWrapper">
        <div className="questionZone">
          <h1>Firebase authを用いてログインが実装できるようにしてください！</h1>
          <h1>login</h1>
          <div>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              onChange={(email) => setEmailAddress(email.target.value)} />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined" onChange={(password) => setPassword(password.target.value)}
            />
          </div>
          {errorMessage != '' && <h1>{errorMessage}</h1>}

          <br />
          <div>
            <Button variant="contained" onClick={handleSignIn}>
              Login
            </Button>
          </div>
        </div>
      </main>
    </LayoutLogin>
  );
};

export default Q6login;
