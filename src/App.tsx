import './App.css';
import RjCard from './components/RjQuestionElement';
import Layout from './components/Layout';
const App = () => {
  return (
    <Layout>
      <h1 className="appTitle">問題一覧</h1>
      <RjCard
        level="level1"
        title="素数を判定するメソッドを作成してください！"
        path="/question1"
      />
    </Layout>
  );
};

export default App;
