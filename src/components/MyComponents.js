// class components
// function components

import React from "react"; // IMPORT React

// thua ke lai Component cua react
class MyComponents extends React.Component {

    state = {
        name: 'Nguyen Phuoc Hai',
        age: 22,
        address: 'Hcm'
    };

    handelClick(event) {
        console.log(" You click me ")
        console.log(event)
    }
    handelOnMoverOver(event) {
        console.log(event)
        console.log('My name is: ', this.state.name)
    }
    // JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and I am from {this.state.address}
                <button onClick={this.handelClick}>Click me</button>
                <button onMouseOver={this.handelClick}> Hover click me</button>
            </div>
        );

    }
}

export default MyComponents;