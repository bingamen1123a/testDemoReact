// class components
// function components

import React from "react"; // IMPORT React

// thua ke lai Component cua react
class MyComponents extends React.Component {

    state = {
        name: 'Nguyen Phuoc Hai',
        age: 22,
        address: 'Hcm'
    }
    // JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and I am from {this.state.address}
            </div>
        );

    }
}

export default MyComponents;