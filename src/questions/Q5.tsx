import Layout from "../components/Layout";
import { useAppSelector, useAppDispatch } from "../hooks/useRTK";
import { selectTodo, addTodo, deleteTodo } from "../features/todo/todoSlice";
import "../styles/Q.css";
import { useState } from "react";
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
  const [content, setContent] = useState("");
  console.log("🚀 ~ file: RjQuestionElement.tsx ~ line 16 ~ todos", todos);

  const register = (content: string) => {
    dispatch(
      addTodo({
        id: createId(),
        content: content,
      })
    );
  };

  const createId = (): number => {
    const array: number[] = [];
    todos.todos.forEach((todo) => {
      array.push(todo.id);
    });
    return array.length === 0 ? 1 : Math.max(...array) + 1;
  };

  const remove = (id: number) => {
    dispatch(deleteTodo({ id: id }));
  };

  const refleshTextBox = () => {
    setContent("");
  };

  const renderUsers = todos.todos.map((todo, index) => {
    return (
      <ul key={index}>
        <li>
          id: {todo.id} | content: {todo.content} |{" "}
          <button
            onClick={() => {
              remove(todo.id);
            }}
          >
            削除
          </button>
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
          <label htmlFor="content">Content </label>
          <input
            type="text"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button
            onClick={() => {
              register(content);
              refleshTextBox();
            }}
            disabled={content === ""}
          >
            登録
          </button>
          <h1>TODO一覧</h1>
          {renderUsers}
        </div>
      </main>
    </Layout>
  );
};

export default Q5;
