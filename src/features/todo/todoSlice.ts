import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface TodoState {
  todos: TodoType[];
}

export type TodoType = {
  id: number,
  content: string
}

const initialState: TodoState = {
  todos: [
    { id: 1, content: "買い物へいく" },
    { id: 2, content: "ボーリングをする" },
    { id: 3, content: "テスト勉強をする" },
    { id: 4, content: "ヨガをする" },
    { id: 5, content: "ダイエットをする" },
  ],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(o => o.id != action.payload);
    }
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export const selectTodo = (state: RootState) => state.todo;

export default todoSlice.reducer;
