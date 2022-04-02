import Layout from '../components/Layout';
import { useAppSelector } from '../hooks/useRTK';
import { selectTodo } from '../features/todo/todoSlice';
import '../styles/Q.css';
/**
 * Q5
 * 問題：ReduxToolkitでTODOアプリ管理TODOの登録 + 削除ができるようにしてください！
 *
 * がんばってね！
 *
 * by ゆうじろう
 *
 */
const Q5 = () => {
  const todos = useAppSelector(selectTodo);
  console.log('🚀 ~ file: RjQuestionElement.tsx ~ line 16 ~ todos', todos);

  const renderUsers = todos.todos.map((todo, index) => {
    return (
      <ul key={index}>
        <li>
          id: {todo.id} | content: {todo.content} | <button>削除</button>
        </li>
      </ul>
    );
  });
  return (
    <Layout>
      <main className="questionWrapper">
        <div className="questionZone">
          <h1>
            src/questions/Q5.tsx ReduxToolkitでTODOアプリ管理。TODOの登録 +
            削除ができるようにしてください！
          </h1>
          <h1>TODO登録</h1>
          <label htmlFor="content">Content</label>
          <input type="text" id="content" />
          <button>登録</button>
          <h1>TODO一覧</h1>
          {renderUsers}
        </div>
      </main>
    </Layout>
  );
};

export default Q5;
