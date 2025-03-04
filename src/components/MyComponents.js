// class components
// function components

import React from "react"; // IMPORT React
import UserInfor from "./Userinfo";
import DisplayInfo from "./DisplayInfor";

// thua ke lai Component cua react
class MyComponents extends React.Component {

    // JSX  
    // props chi truyen duoc strinh con cac thong so khac chi co the truyen thong qua {}
    render() {
        return (
            <div>
                <UserInfor></UserInfor>
                <br></br>
                <DisplayInfo name="Phuoc Hai" age={22} />
                <hr />
                <DisplayInfo name="Le Phu" age={22} />
            </div >
        );

    }
}

export default MyComponents;