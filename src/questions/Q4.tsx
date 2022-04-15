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


const HAND_TYPE = {
  ROCK: "ぐー", // 0
  SCISSORS: "ちょき", // 1
  PAPER: "ぱー", // 2
} as const;
type HAND_TYPE = typeof HAND_TYPE[keyof typeof HAND_TYPE];

// 勝敗表示メッセージ
const draw = "あいこ";
const win = "勝ち";
const lose = "you are fucking loser";

const isWin = (myHand: string, cpuHand: string) => {
  return myHand == HAND_TYPE.ROCK && cpuHand == HAND_TYPE.SCISSORS
    || myHand == HAND_TYPE.SCISSORS && cpuHand == HAND_TYPE.PAPER
    || myHand == HAND_TYPE.PAPER && cpuHand == HAND_TYPE.ROCK;
}

const Q4 = () => {
  const handArray = [HAND_TYPE.ROCK, HAND_TYPE.SCISSORS, HAND_TYPE.PAPER];
  const [rand, setRand] = useState(Math.floor(Math.random() * 3));
  const cpu = handArray[rand];
  const [myHand, setMyHand] = useState('');
  const [cpuHand, setCpuHand] = useState('');
  const [result, setResult] = useState('');

  const buttonClick = (value: string) => {

    const rand = Math.floor(Math.random() * 3);
    setRand(rand);

    if (isWin(value, cpu)) {
      // 勝ち
      setResult(win);
    } else if (value == cpu) {
      // あいこ
      setResult(draw);
    } else {
      // 負け
      setResult(lose);
    }
    setCpuHand(cpu);
    setMyHand(value);
  };

  return (
    <Layout>
      <main className="questionWrapper">
        <div className="questionZone">
          <h1>src/questions/Q4.tsx じゃんけんプログラムを実装してください！</h1>
          <button onClick={() => buttonClick(HAND_TYPE.ROCK)}>ぐー</button>
          <button onClick={() => buttonClick(HAND_TYPE.SCISSORS)}>ちょき</button>
          <button onClick={() => buttonClick(HAND_TYPE.PAPER)}>ぱー</button>
          <h1>あなたの手 : {myHand}</h1>
          <h1>CPUの手 : {cpuHand}</h1>
          <h1>勝敗 : {result}</h1>
        </div>
      </main>
    </Layout>
  );
};

export default Q4;
