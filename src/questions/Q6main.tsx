import LayoutLogin from '../components/LayoutLogin';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Q.css';
import { logout } from '../plugins/firebase';
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
const Q6main = () => {

  const handleSignOut = async () => {
    await logout();
  };

  return (
    <LayoutLogin>
      <main className="questionWrapper">
        <div className="questionZone">
          <h1>ログイン後の画面です。</h1>
          <h1>Welcome!!</h1>
          <Link to="/question6/login" onClick={handleSignOut} >Logout</Link>
        </div>
      </main>
    </LayoutLogin>
  );
};

export default Q6main;
