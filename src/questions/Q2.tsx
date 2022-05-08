import { useState } from 'react';
import Layout from '../components/Layout';
import '../styles/Q.css';
/**
 * Q2
 * 問題：カウントアップ・カウントダウンボタンを作成してください！
 *
 * がんばってね！
 *
 * by ゆうじろう
 *
 */
const Q2 = () => {
  const [num, setNum] = useState<number>(0);
  const addNum = () =>{
    setNum(num+1);
  }
  const reduceNum = () =>{
    setNum(num-1);
  }
  return (
    <Layout>
      <main className="questionWrapper">
        <div className="questionZone">
          <h1>
            src/questions/Q2.tsx
            にカウントアップ・カウントダウンボタンを作成してください！
          </h1>
          <button onClick={addNum}>+</button>
          <button onClick={reduceNum}>-</button>
          <h1>{num}</h1>
        </div>
      </main>
    </Layout>
  );
};

export default Q2;
