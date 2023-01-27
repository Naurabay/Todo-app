import React from "react";
import ReactDOM from "react-dom";
import HeaderComponent from "./components/header_component";
import SearchComponent from "./components/search_component";
import TodoList from "./components/todo_list";

const App = () =>{
    const alert ='<script> alert("")</script>';
    const todoData = [
        { label: 'Drink Coffee', important: false },
        { label: 'Implement React Application', important: true },
        { label: 'Make notes from your stud', important: false },
        { label: 'Do not drink alchohol', important: false },
    ];
    // const isLogged = true;
    // const loginBox = <span>Login to the system</span>
    // const welcomeBox = <span>Wecome back</span>
    return (
        <div>
            {/*{isLogged?null:loginBox}*/}
            {alert}
            <HeaderComponent />
            <SearchComponent />
            <TodoList todos = {todoData}/>

        </div>
    );
}

ReactDOM.render(<App />,
    document.getElementById('root'));