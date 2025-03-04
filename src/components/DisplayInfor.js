import React from "react";

class UserInfor extends React.Component {
    // props => Viet tat cua propeties(tai san)
    render() {
        console.log(this.props.listUser)
        // destructuring object/array => giup gian luoc code
        // user listUser.map() de lap lai cac user
        const { listUser } = this.props;
        return (
            <div>
                {listUser.map((user) => {
                    return (
                        <div key={user.id}>
                            <div>My name's: {user.name}</div>
                            <div>Age: {user.age}</div>
                            <hr />
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default UserInfor;