import React from "react";
import './todo-list.css';
import TodoListItem from "./todo_list_items";

const TodoList = ({ todos}) => {

    const elements = todos.map((item) => {
        const { id, ...itemProps } = item;

        return (
            <li key={id} className="list-group-item">
                <TodoListItem {...itemProps } />
            </li>
        );
    });
    return (
        <ul className={"list-group todo-list"}>
            { elements }
        </ul>
    );
};
export default TodoList;