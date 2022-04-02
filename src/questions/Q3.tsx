import { useState } from 'react';
import Layout from '../components/Layout';
import '../styles/Q.css';
/**
 * Q3
 * 問題：APIを叩いて値を取得し、一覧表示してください！
 *
 * 使用するAPI > jsonplaceholder
 * https://jsonplaceholder.typicode.com/users
 *
 * 使用してほしいライブラリ
 * axios
 *
 * がんばってね！
 *
 * by ゆうじろう
 *
 */
const Q3 = () => {
  return (
    <Layout>
      <main className="questionWrapper">
        <div className="questionZone">
          <h1>
            src/questions/Q3.tsx
            にAPIを叩いて値を取得し、一覧表示するコードを実装してください！
          </h1>
          <button>データ取得</button>
          <h1>データ一覧</h1>
        </div>
      </main>
    </Layout>
  );
};

export default Q3;
