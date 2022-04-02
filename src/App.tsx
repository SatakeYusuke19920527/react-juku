import './App.css';
import RjCard from './components/RjQuestionElement';
import Layout from './components/Layout';
const App = () => {
  return (
    <Layout>
      <h1 className="appTitle">問題一覧</h1>
      <RjCard
        question="Question1"
        title="素数を判定するメソッドを作成してください！"
        path="/question1"
      />
      <RjCard
        question="Question2"
        title="カウントアップ・カウントダウンボタンを作成してください！"
        path="/question2"
      />
      <RjCard
        question="Question3"
        title="APIを叩いて値を取得し、一覧表示してください！"
        path="/question3"
      />
      <RjCard
        question="Question4"
        title="じゃんけんをしてみましょう！"
        path="/question4"
      />
      <RjCard
        question="Question5"
        title="ReduxToolkitでTODOアプリ管理"
        path="/question5"
      />
    </Layout>
  );
};

export default App;
