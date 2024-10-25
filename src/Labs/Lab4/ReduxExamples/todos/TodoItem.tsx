import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem({ todo }: { todo: { id: string; title: string } }) {
  const dispatch = useDispatch();

  return (
    <div className="container ms-0 rounded">
      <li key={todo.id} className="list-group-item">
        <div className="d-flex align-items-center justify-content-between">
          <span>{todo.title}</span>
          <div className="d-flex">
          <button
              onClick={() => dispatch(setTodo(todo))}
              id="wd-set-todo-click"
              className="btn btn-primary me-2"
            >
              Edit
            </button>
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              id="wd-delete-todo-click"
              className="btn btn-danger me-2"
            >
              Delete
            </button>
            
          </div>
        </div>
      </li>
    </div>
  );
}
