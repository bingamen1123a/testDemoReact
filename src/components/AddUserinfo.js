import React from "react";

class AddUserInfor extends React.Component {

    state = {
        name: '',
        age: '',
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

    handleOnChaneInputName = (event) => {
        // cap nhat lai ten tu state
        this.setState({
            name: event.target.value
        })
    }

    handleOnChaneInputAge = (event) => {
        // cap nhat lai tuoi tu state
        this.setState({
            age: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault(); // nhan submit se khong load loai trang
        this.props.handelAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + ' random',
            name: this.state.name,
            age: this.state.age
        })
    }
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age} years old, I'm from {this.state.address}
                <button onClick={(event) => { this.handelClick(event) }}>Click me</button>
                <button onMouseOver={this.handelClick}> Hover click me</button>
                <form onSubmit={(event) => { this.handleOnSubmit(event) }}>
                    <label>Your name:</label>
                    <input value={this.state.name} type="text" onChange={(event) => { this.handleOnChaneInputName(event) }} />
                    <button>Submit</button>

                    <label>Your age:</label>
                    <input value={this.state.age} type="text" onChange={(event) => { this.handleOnChaneInputAge(event) }} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddUserInfor;