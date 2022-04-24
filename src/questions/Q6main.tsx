import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import '../styles/Q.css';
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
  return (
    <Layout>
      <main className="questionWrapper">
        <div className="questionZone">
          <h1>ログイン後の画面です。</h1>
          <h1>Welcome!!</h1>
          <Link to="/question6/login">Login画面へ戻る</Link>
        </div>
      </main>
    </Layout>
  );
};

export default Q6main;
