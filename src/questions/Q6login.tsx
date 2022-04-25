import Layout from "../components/Layout";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "../styles/Q.css";
import { ChangeEvent, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasError, setHasError] = useState(false);
  const navigate = useNavigate();
  const handleSignIn = () => {
    setHasError(false);
    console.log("==== signIn start ====");
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/question6/main");
      })
      .catch(() => {
        setHasError(true);
      });
  };
  const handleChangeEmail = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setEmail(event.currentTarget.value);
  };
  const handleChangePassword = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setPassword(event.currentTarget.value);
  };
  return (
    <Layout>
      <main className="questionWrapper">
        <div className="questionZone">
          <h1>Firebase authを用いてログインが実装できるようにしてください！</h1>
          <h1>login</h1>
          <div>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              onChange={(e) => handleChangeEmail(e)}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              onChange={(e) => handleChangePassword(e)}
            />
          </div>
          <br />
          <div>
            <Button
              variant="contained"
              disabled={email === "" || password === ""}
              onClick={handleSignIn}
            >
              Login
            </Button>
            {hasError && <p>ログインに失敗しました</p>}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Q6login;
