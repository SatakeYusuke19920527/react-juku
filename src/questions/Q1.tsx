import { useState } from 'react';
import Layout from '../components/Layout';
import '../styles/Q.css';
const Q1 = () => {
  const [judgeNum, setJudgeNum] = useState<number>();
  const [isPrimeNumber, setIsPrimeNumber] = useState<boolean>(false);
  /**
   * Q1
   * ここに関数を記載してください！
   * 問題：素数を判定するメソッドを作成してください。
   *
   * 素数 → true
   * not 素数 → false
   *
   * がんばってね！
   *
   * by ゆうじろう
   *
   */
  const judgePrimeNumber = () => {
    // undifined,非整数,1以下はnot素数
    if (!judgeNum || judgeNum <= 1 || !Number.isInteger(judgeNum)) {
      setIsPrimeNumber(false);
      return;
    }

    let result = true;
    for (let i = 2; i < judgeNum; ++i) {
      if (judgeNum % i == 0) {
        result = false;
        break;
      }
    }
    setIsPrimeNumber(result);
  };
  return (
    <Layout>
      <main className="questionWrapper">
        <div className="questionZone">
          <h1>
            src/questions/Q1.tsx に素数を判定するメソッドを作成してください！
          </h1>
          <label htmlFor="input">数字を入力してください。</label>
          <input
            id="input"
            type="number"
            onChange={(e) => setJudgeNum(Number(e.target.value))}
          />
          <button onClick={judgePrimeNumber}>素数判定</button>
          <h1>{isPrimeNumber ? '素数' : 'not素数'}</h1>
        </div>
      </main>
    </Layout>
  );
};

export default Q1;
