// import the react and react dom libraries
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText (){
    return 'Click that shit';
};
// create a react component
const App = () => {
    return (
        <div>
            <label className="label" htmlFor="name">enter your name: </label>
            <input id = "name" type="text"/>
            <button style={{backgroundColor:'rgb(255,0,0)', color: 'white'}}>{getButtonText()}</button>
        </div>
    );
};

//take the react component and show it on the screen
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);