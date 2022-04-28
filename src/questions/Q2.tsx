import { useState } from "react";
import Layout from "../components/Layout";
import "../styles/Q.css";
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

  const countUp = () => {
    setNum(num + 1);
  };

  const countDown = () => {
    setNum(num - 1);
  };

  const reset = () => {
    setNum(0);
  };

  return (
    <Layout>
      <main className="questionWrapper">
        <div className="questionZone">
          <h1>
            src/questions/Q2.tsx
            にカウントアップ・カウントダウンボタンを作成してください！
          </h1>
          <button
            onClick={() => {
              countUp();
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              countDown();
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              reset();
            }}
          >
            0
          </button>
          <h1>{num}</h1>
        </div>
      </main>
    </Layout>
  );
};

export default Q2;
