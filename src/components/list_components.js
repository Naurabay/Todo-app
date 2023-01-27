import React from "react";
import TodoListItem from "./todo_list_items";

const ListComponent = () =>{
    const items = ['First  to do','Second thing to do','Third thing to do','Forth thing to do'];
    return (
        <ul>
            <li><TodoListItem label = "Drink Coffee" /></li>
            <li><TodoListItem label = "Implement React Application" /></li>
            <li><TodoListItem label = "Make notes from your study" /></li>
            <li><TodoListItem label = "Do not drink alchohol" important /></li>
        </ul>
    );

};

export default ListComponent;