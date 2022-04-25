import Layout from '../components/Layout';
import { useAppSelector, useAppDispatch } from '../hooks/useRTK';
import { addTodo, deleteTodo, selectTodo } from '../features/todo/todoSlice';
import '../styles/Q.css';
import { useState } from 'react';
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
  const dispatch = useAppDispatch();

  const renderUsers = todos.todos.map((todo, index) => {
    return (
      <ul key={index}>
        <li>
          id: {todo.id} | content: {todo.content} | <button onClick={() => dispatch(deleteTodo(todo.id))}>削除</button>
        </li>
      </ul>
    );
  });
  const [addText, setAddText] = useState("");
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
          <input type="text" id="content" onChange={(e) => setAddText(e.target.value)} />
          <button onClick={() => dispatch(addTodo({ id: todos.todos.length > 0 ? todos.todos.reduce((a, b) => a.id > b.id ? a : b).id + 1 : 1, content: addText }))}>登録</button>
          <h1>TODO一覧</h1>
          {renderUsers}
        </div>
      </main>
    </Layout>
  );
};

export default Q5;
