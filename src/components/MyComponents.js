// class components
// function components

import React, { useState } from "react"; // IMPORT React
import AddUserInfor from "./AddUserinfo";
import DisplayInfo from "./DisplayInfor";

// thua ke lai Component cua react
// class MyComponents extends React.Component {
//     state = {
//         listUser: [
//             { id: 1, name: 'Phuoc Hai', age: 17 },
//             { id: 2, name: 'Le Phu', age: 27 },
//             { id: 3, name: 'Xuan Hieu', age: 30 },
//         ]
//     }
//     // lay du lieu user tu lop con AddUserInfo -> submit
//     handelAddNewUser = (obuser) => {
//         this.setState({
//             listUser: [obuser, ...this.state.listUser]
//         })
//     }
//     handelDeleteUser = (userId) => {
//         this.setState({
//             listUser: [...this.state.listUser.filter(item => item.id !== userId)] // copy lai array va loc lai theo dieu kien
//         })
//     }
//     // JSX  
//     // props chi truyen duoc strinh con cac thong so khac chi co the truyen thong qua {}
//     render() {
//         return (
//             <div>
//                 <AddUserInfor handelAddNewUser={this.handelAddNewUser} />
//                 <br></br>
//                 <DisplayInfo
//                     listUser={this.state.listUser}
//                     handelDeleteUser={this.handelDeleteUser}
//                 />
//             </div >
//         );

//     }
// }

const MyComponents = (props) => {

    const [listUser, setListUsers] = useState(
        [
            { id: 1, name: 'Phuoc Hai', age: 17 },
            { id: 2, name: 'Le Phu', age: 27 },
            { id: 3, name: 'Xuan Hieu', age: 30 },
        ]
    );
    // lay du lieu user tu lop con AddUserInfo -> submit
    const handelAddNewUser = (obuser) => {
        setListUsers([obuser, ...listUser])
    }
    const handelDeleteUser = (userId) => {
        setListUsers(
            [...listUser.filter(item => item.id !== userId)] // copy lai array va loc lai theo dieu kien
        )
    }
    return (
        <div>
            <AddUserInfor handelAddNewUser={handelAddNewUser} />
            <br></br>
            <DisplayInfo
                listUser={listUser}
                handelDeleteUser={handelDeleteUser}
            />
        </div >
    )
}
export default MyComponents;