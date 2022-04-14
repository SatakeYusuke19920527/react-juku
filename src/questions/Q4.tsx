import { useState } from "react";
import Layout from "../components/Layout";
import "../styles/Q.css";
/**
 * Q4
 * 問題：じゃんけんをしよう！
 *
 * がんばってね！
 *
 * by ゆうじろう
 *
 */

enum Janken {
  ROCK,
  SCISSORS,
  PAPER,
}

const youLoseLabel: String = "YOU LOSE!!!!!!!";
const youWinLabel: String = "YOU WIN!";
const evenLabel: String = "あいこ";

const createOponentsHand = (): Janken => {
  const oponentsHand = Math.floor(Math.random() * 3);
  if (oponentsHand === 0) {
    return Janken.ROCK;
  }
  if (oponentsHand === 1) {
    return Janken.SCISSORS;
  }
  return Janken.PAPER;
};

const battle = (yourHand: Janken, oponentsHand: Janken): String => {
  if (yourHand === oponentsHand) {
    return evenLabel;
  }

  switch (oponentsHand) {
    case Janken.ROCK:
      return yourHand === Janken.PAPER ? youWinLabel : youLoseLabel;
    case Janken.SCISSORS:
      return yourHand === Janken.ROCK ? youWinLabel : youLoseLabel;
    case Janken.PAPER:
      return yourHand === Janken.SCISSORS ? youWinLabel : youLoseLabel;
  }
};

const getJankenLabel = (janken: Janken): String => {
  switch (janken) {
    case Janken.ROCK:
      return "ぐー";
    case Janken.SCISSORS:
      return "ちょき";
    case Janken.PAPER:
      return "ぱー";
  }
};

const Q4 = () => {
  const [yourHand, setYourHand] = useState(0);
  const [opponentsHand, setOponentsHand] = useState(0);
  const [isBeforeBattle, setIsBeforeBattle] = useState(false);

  return (
    <Layout>
      <main className="questionWrapper">
        <div className="questionZone">
          <button
            onClick={() => {
              setYourHand(Janken.ROCK);
              setOponentsHand(createOponentsHand());
              setIsBeforeBattle(true);
            }}
          >
            {getJankenLabel(Janken.ROCK)}
          </button>
          <button
            onClick={() => {
              setYourHand(Janken.SCISSORS);
              setOponentsHand(createOponentsHand());
              setIsBeforeBattle(true);
            }}
          >
            {getJankenLabel(Janken.SCISSORS)}
          </button>
          <button
            onClick={() => {
              setYourHand(Janken.PAPER);
              setOponentsHand(createOponentsHand());
              setIsBeforeBattle(true);
            }}
          >
            {getJankenLabel(Janken.PAPER)}
          </button>
          <h1>
            {isBeforeBattle ? "あなたの手 : " + getJankenLabel(yourHand) : ""}
          </h1>
          <h1>
            {isBeforeBattle ? "CPUの手 : " + getJankenLabel(opponentsHand) : ""}
          </h1>
          <h1>
            {isBeforeBattle ? "勝敗 : " + battle(yourHand, opponentsHand) : ""}
          </h1>
        </div>
      </main>
    </Layout>
  );
};

export default Q4;
