import { useState } from "react";
import Layout from "../components/Layout";
import "../styles/Q.css";
const Q1 = () => {
  const [judgeNum, setJudgeNum] = useState<string>();
  const [valid, setValid] = useState<boolean>(false);
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
    // *********** ↓ここから実装してください！↓ *********** //
    console.log("🚀 ~ file: Q1.tsx ~ line 22 ~ Q1 ~ judgeNum", judgeNum);
    const num = Number(judgeNum);
    if (num === undefined) {
      return;
    }
    if (num === 1) {
      setIsPrimeNumber(false);
      return;
    }
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        setIsPrimeNumber(false);
        return;
      }
    }
    setIsPrimeNumber(true);
  };

  const validate = () => {
    if (!Number.isInteger(Number(judgeNum))) {
      setValid(false);
      return;
    }
    setValid(true);
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
            value={judgeNum}
            onChange={(e) => {
              validate();
              setJudgeNum(e.target.value.replace(/^0+/, ""));
            }}
          />
          <button
            disabled={judgeNum === "" || judgeNum === undefined}
            onClick={() => {
              if (valid) {
                judgePrimeNumber();
              }
            }}
          >
            素数判定
          </button>
          <button
            disabled={judgeNum === "" || judgeNum === undefined}
            onClick={() => setJudgeNum("")}
          >
            リセット
          </button>
          <h1>{isPrimeNumber ? "素数" : "not素数"}</h1>
        </div>
      </main>
    </Layout>
  );
};

export default Q1;
