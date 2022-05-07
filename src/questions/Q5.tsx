import Layout from '../components/Layout';
import { useAppSelector, useAppDispatch} from '../hooks/useRTK';
import { selectTodo,addTodo,deleteTodo } from '../features/todo/todoSlice';
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
  const [inputValue, setinputValue] = useState<string>();
  const todos = useAppSelector(selectTodo);
  console.log('🚀 ~ file: RjQuestionElement.tsx ~ line 16 ~ todos', todos);

  const dispatch = useAppDispatch();
  const register = () => {
    dispatch(addTodo({
      id: createId(),
      content: inputValue
    }))
  }
  
  // todo追加時の新規idの作成
  const createId = () =>{
    if(todos.todos.length === 0){
      return 1;
    }
    return todos.todos.reduce((a,b) => a.id > b.id ? a : b).id + 1 ; 
  }

  const deleteTask = (id : number) => {
    dispatch(deleteTodo(id));
  }

  const renderUsers = todos.todos.map((todo, index) => {
    return (
      <ul key={index}>
        <li>
          id: {todo.id} | content: {todo.content} | <button  onClick={() => deleteTask(todo.id)}>削除</button>
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
          <input type="text" id="content" onChange={(e) => setinputValue(e.target.value)}/>
          <button onClick={() => register()}>登録</button>
          <h1>TODO一覧</h1>
          {renderUsers}
        </div>
      </main>
    </Layout>
  );
};

export default Q5;
