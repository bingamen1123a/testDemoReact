// class components
// function components

import React from "react"; // IMPORT React
import UserInfor from "./Userinfo";

// thua ke lai Component cua react
class MyComponents extends React.Component {

    // JSX  
    render() {
        return (
            <div>
                <UserInfor></UserInfor>
            </div >
        );

    }
}

export default MyComponents;