import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo, deleteTodo } from "./todosReducer";

export default function TodoForm(
){ 
    const { todo } = useSelector((state: any) => state.todosReducer);
    const dispatch = useDispatch();
    return (
        <div className="container ms-0 rounded">
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <input
                        defaultValue={todo.title}
                        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
                        className="form-control me-2"
                       
                    />
                    
                    <button 
                        onClick={() => dispatch(updateTodo(todo))}
                        id="wd-update-todo-click"
                        className="btn btn-warning me-2"
                        
                    >
                        Update
                    </button>
                    <button 
                        onClick={() => dispatch(addTodo(todo))}
                        id="wd-add-todo-click"
                        className="btn btn-success me-2"
                    >
                        Add
                    </button>
                </div>
            </li>
        </div>
  
);}
