import { useState } from 'react';
import Layout from '../components/Layout';
import '../styles/Q.css';
/**
 * Q4
 * 問題：じゃんけんをしよう！
 *
 * がんばってね！
 *
 * by ゆうじろう
 *
 */
const Q4 = () => {
  return (
    <Layout>
      <main className="questionWrapper">
        <div className="questionZone">
          <h1>src/questions/Q4.tsx じゃんけんプログラムを実装してください！</h1>
          <button>ぐー</button>
          <button>ちょき</button>
          <button>ぱー</button>
          <h1>あなたの手 :</h1>
          <h1>CPUの手 :</h1>
          <h1>勝敗 : </h1>
        </div>
      </main>
    </Layout>
  );
};

export default Q4;
