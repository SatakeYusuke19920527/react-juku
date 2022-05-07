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
  const [myhand, setMyHand] = useState<string>();
  const [cpuhand, setCpuHand] = useState<string>();
  const [result, setResult] = useState<string>();
  const handleTe = (te: string) => {
    setMyHand(te);
    setCpuHand(createCpuHand());
    setResult(createResult());
  };

  const createCpuHand = () => {
    const randomNum = Math.floor( Math.random() * 3);
    if (randomNum === 0) {
      return "ぐー";
    }
    if(randomNum === 1) {
      return "ぱー";
    }
    return "ちょき";
  };

  const createResult = () => {
    console.log(myhand);
    console.log(cpuhand);
    if (myhand === cpuhand) {
      return "あいこ";
    }
    if(myhand === "ぐー"){
      if(cpuhand === "ぱー"){
        return "あなたの負け";
      }
      return "あなたの勝ち";
    }
    if(myhand === "ぱー"){
      if(cpuhand === "ちょき"){
        return "あなたの負け";
      }
      return "あなたの勝ち";
    }
    if(myhand === "ちょき"){
      if(cpuhand === "ぐー"){
        return "あなたの負け";
      }
      return "あなたの勝ち";
    }
  }

  return (
    <Layout>
      <main className="questionWrapper">
        <div className="questionZone">
          <h1>src/questions/Q4.tsx じゃんけんプログラムを実装してください！</h1>
          <button onClick={() => handleTe('ぐー')}>ぐー</button>
          <button onClick={() => handleTe('ちょき')}>ちょき</button>
          <button onClick={() => handleTe('ぱー')}>ぱー</button>
          <h1>あなたの手 : {myhand}</h1>
          <h1>CPUの手 :{cpuhand}</h1>
          <h1>勝敗 : {result}</h1>
        </div>
      </main>
    </Layout>
  );
};

export default Q4;
