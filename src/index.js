import React from "react";
import ReactDOM from "react-dom";

// const elements = (
//     <div>
//         <h1>TODO app</h1>
//         <input placeholder='search'/>
//         <ul>
//             <li>First thing to do</li>
//             <li>Second thing to do</li>
//             <li>Third thing to do</li>
//             <li>Forth thing to do</li>
//         </ul>
//
//     </div>
// );

const ListComponent = () =>{
    const items = ['First  to do','Second thing to do','Third thing to do','Forth thing to do'];
    return (<ul>
        <li>{items[0]}</li>
        <li>{items[1]}</li>
        <li>{items[2]}</li>
        <li>{items[3]}</li>
    </ul>);
};

const HeaderComponent = () =>{
    return (<h1>TODO app</h1>);
};

const SearchComponent = () => {
    const styleText = 'Searching...';
    const styling = {fontfamily:'20px'};
    return (
        <input  style={styling} placeholder = {styleText} disabled={true}/>
    // placeholder='search'
    );
};

const App = () =>{
    const alert ='<script> alert("")</script>';
    // const isLogged = true;
    // const loginBox = <span>Login to the system</span>
    // const welcomeBox = <span>Wecome back</span>
    return (
        <div>
            {/*{isLogged?null:loginBox}*/}
            {alert}
            <HeaderComponent />
            <SearchComponent />
            <ListComponent/>

        </div>
    );
}

ReactDOM.render(<App />,
    document.getElementById('root'));