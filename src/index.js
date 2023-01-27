import React from "react";
import ReactDOM from "react-dom";
import HeaderComponent from "./components/header_component";
import SearchComponent from "./components/search_component";
import TodoList from "./components/todo_list";

const App = () =>{
    const alert ='<script> alert("")</script>';
    const todoData = [
        { label: 'Drink Coffee', important: false,  id: 1},
        { label: 'Implement React Application', important: true, id: 2 },
        { label: 'Make notes from your stud', important: false, id: 3 },
        { label: 'Do not drink alchohol', important: true, id: 4 },
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