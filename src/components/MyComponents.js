// class components
// function components

import React from "react"; // IMPORT React
import UserInfor from "./Userinfo";
import DisplayInfo from "./DisplayInfor";

// thua ke lai Component cua react
class MyComponents extends React.Component {
    state = {
        listUser: [
            { id: 1, name: 'Phuoc Hai', age: 22 },
            { id: 2, name: 'Le Phu', age: 27 },
            { id: 3, name: 'Xuan Hieu', age: 30 },
        ]
    }

    // JSX  
    // props chi truyen duoc strinh con cac thong so khac chi co the truyen thong qua {}
    render() {
        return (
            <div>
                <UserInfor></UserInfor>
                <br></br>
                <DisplayInfo listUser={this.state.listUser} />
            </div >
        );

    }
}

export default MyComponents;