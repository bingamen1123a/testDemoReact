import React, { useState } from "react";

// class AddUserInfor extends React.Component {

//     state = {
//         name: '',
//         age: '',
//         address: 'Hcm'
//     };
//     // neu khong chuyen ve arrow function se bao loi do js '() => {}'
//     handelClick = (event) => {
//         console.log(" You click me ")
//         console.log('My name is:', this.state.name)
//         console.log(event)
//         // cap nhat lai ten va tuoi tu state
//         this.setState({
//             name: 'Le Phu',
//             age: Math.floor((Math.random() * 100) + 1)
//         })

//     }

//     handleOnChaneInputName = (event) => {
//         // cap nhat lai ten tu state
//         this.setState({
//             name: event.target.value
//         })
//     }

//     handleOnChaneInputAge = (event) => {
//         // cap nhat lai tuoi tu state
//         this.setState({
//             age: event.target.value
//         })
//     }
//     // lay du lieu tu input va truyen toi lop cha tu props handelAddNewUser
//     handleOnSubmit = (event) => {
//         event.preventDefault(); // nhan submit se khong load loai trang
//         this.props.handelAddNewUser({
//             id: Math.floor((Math.random() * 100) + 1) + ' random',
//             name: this.state.name,
//             age: this.state.age
//         })
//     }
//     render() {
//         return (
//             <>
//                 My name is {this.state.name} and I'm {this.state.age} years old, I'm from {this.state.address}
//                 <button onClick={(event) => { this.handelClick(event) }}>Click me</button>
//                 <button onMouseOver={this.handelClick}> Hover click me</button>
//                 <form onSubmit={(event) => { this.handleOnSubmit(event) }}>
//                     <label>Your name:</label>
//                     <input value={this.state.name} type="text" onChange={(event) => { this.handleOnChaneInputName(event) }} />
//                     <button>Submit</button>

//                     <label>Your age:</label>
//                     <input value={this.state.age} type="text" onChange={(event) => { this.handleOnChaneInputAge(event) }} />
//                     <button>Submit</button>
//                 </form>
//             </>
//         )
//     }
// }

const AddUserInfor = (props) => {
    const [name, setName] = useState('');
    const [address, setAdress] = useState('HCM');
    const [age, setAge] = useState('');
    // neu khong chuyen ve arrow function se bao loi do js '() => {}'
    const handelClick = (event) => {
        console.log(" You click me ")
        console.log('My name is:', name)
        console.log(event)
        setName('Le Phu');
        setAge(Math.floor((Math.random() * 100) + 1))

    }

    const handleOnChaneInputName = (event) => {
        // cap nhat lai ten tu state
        setName(event.target.value)
    }

    const handleOnChaneInputAge = (event) => {
        // cap nhat lai tuoi tu state
        setAge(event.target.value)
    }
    // lay du lieu tu input va truyen toi lop cha tu props handelAddNewUser
    const handleOnSubmit = (event) => {
        event.preventDefault(); // nhan submit se khong load loai trang
        props.handelAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + ' random',
            name: name,
            age: age
        })
    }
    return (
        <>
            My name is {name} and I'm {age} years old, I'm from {address}
            <button onClick={(event) => { handelClick(event) }}>Click me</button>
            <button onMouseOver={handelClick}> Hover click me</button>
            <form onSubmit={(event) => { handleOnSubmit(event) }}>
                <label>Your name:</label>
                <input value={name} type="text" onChange={(event) => { handleOnChaneInputName(event) }} />
                <button>Submit</button>
                <label>Your age:</label>
                <input value={age} type="text" onChange={(event) => { handleOnChaneInputAge(event) }} />
                <button>Submit</button>
            </form>
        </>
    )
}
export default AddUserInfor;