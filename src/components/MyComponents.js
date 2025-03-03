// class components
// function components

import React from "react"; // IMPORT React

// thua ke lai Component cua react
class MyComponents extends React.Component {
    // JSX
    render() {
        return (
            <div> My First Compunents
                {Math.random()}
            </div>
        );

    }
}

export default MyComponents;