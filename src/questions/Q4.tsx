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

const labels = {
  youLoseLabel: "YOU LOSE!!!!!!!",
  youWinLabel: "YOU WIN!",
  evenLabel: "あいこ",
  rock: "ぐー",
  scissors: "ちょき",
  paper: "ぱー",
  yourHand: "あなたの手",
  opponentsHand: "CPUの手",
  result: "勝敗",
};

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
    return labels.evenLabel;
  }

  switch (oponentsHand) {
    case Janken.ROCK:
      return yourHand === Janken.PAPER
        ? labels.youWinLabel
        : labels.youLoseLabel;
    case Janken.SCISSORS:
      return yourHand === Janken.ROCK
        ? labels.youWinLabel
        : labels.youLoseLabel;
    case Janken.PAPER:
      return yourHand === Janken.SCISSORS
        ? labels.youWinLabel
        : labels.youLoseLabel;
  }
};

const getJankenLabel = (janken: Janken): String => {
  switch (janken) {
    case Janken.ROCK:
      return labels.rock;
    case Janken.SCISSORS:
      return labels.scissors;
    case Janken.PAPER:
      return labels.paper;
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
            {isBeforeBattle
              ? labels.yourHand + " : " + getJankenLabel(yourHand)
              : ""}
          </h1>
          <h1>
            {isBeforeBattle
              ? labels.opponentsHand + " : " + getJankenLabel(opponentsHand)
              : ""}
          </h1>
          <h1>
            {isBeforeBattle
              ? labels.result + " : " + battle(yourHand, opponentsHand)
              : ""}
          </h1>
        </div>
      </main>
    </Layout>
  );
};

export default Q4;
