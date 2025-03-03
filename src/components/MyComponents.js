// class components
// function components

import React from "react"; // IMPORT React

// thua ke lai Component cua react
class MyComponents extends React.Component {

    state = {
        name: 'Nguyen Hai',
        age: 22,
        address: 'Hcm'
    };
    // neu khong chuyen ve arrow function se bao loi do js '() => {}'
    handelClick = (event) => {
        console.log(" You click me ")
        console.log('My name is:', this.state.name)
        console.log(event)
        // cap nhat lai ten va tuoi tu state
        this.setState({
            name: 'Le Phu',
            age: Math.floor((Math.random() * 100) + 1)
        })

    }

    handleOnChaneInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault(); // nhan submit se khong load loai trang
        console.log(this.state)
    }

    // JSX  
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age} years old, I'm from {this.state.address}
                <button onClick={(event) => { this.handelClick(event) }}>Click me</button>
                <button onMouseOver={this.handelClick}> Hover click me</button>
                <form onSubmit={(event) => { this.handleOnSubmit(event) }}>
                    <input type="text" onChange={(event) => { this.handleOnChaneInput(event) }} />
                    <button>Submit</button>
                </form>
            </div >
        );

    }
}

export default MyComponents;