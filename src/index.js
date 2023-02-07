import React from "react";
import ReactDOM from "react-dom";
import HeaderComponent from "./components/header_component";
import SearchComponent from "./components/search_component";
import TodoList from "./components/todo_list";
import ItemStatusFilter from "./components/item-status-filter";

import './index.css';
const App = () =>{
    // const alert ='<script> alert("")</script>';
    const todoData = [
        { label: 'Drink Coffee', important: false,  id: 1},
        { label: 'React Application', important: true, id: 2 },
        { label: 'Make notes from your stud', important: false, id: 3 },
        { label: 'Do not drink alchohol', important: false, id: 4 },
    ];
    // const isLogged = true;
    // const loginBox = <span>Login to the system</span>
    // const welcomeBox = <span>Wecome back</span>

    return (
        <div className="todo-app">
            <HeaderComponent toDo={1} done={3} />
            <div className="top-panel d-flex">
                <SearchComponent />
                <ItemStatusFilter />
            </div>

            <TodoList todos={todoData} />
        </div>
    );
}

ReactDOM.render(<App />,
    document.getElementById('root'));