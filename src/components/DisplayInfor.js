import React from "react";

class UserInfor extends React.Component {
    // props => Viet tat cua propeties(tai san)
    state = {
        displayShow: true
    }
    handleShowHide = () => {
        this.setState({
            displayShow: !this.state.displayShow
        })
    }
    render() {
        console.log(this.props.listUser)
        // destructuring object/array => giup gian luoc code
        // user listUser.map() de lap lai cac user
        const { listUser } = this.props;
        return (
            <div>
                <div>
                    <button onClick={() => { this.handleShowHide() }}>{this.state.displayShow === true ? 'Hide' : 'Show'} list user:</button>
                </div>


                {this.state.displayShow &&
                    <div>
                        {listUser.map((user) => {
                            return (
                                <div key={user.id} className={user.age > 18 ? "green" : "red"}>
                                    <div>My name's: {user.name}</div>
                                    <div>Age: {user.age}</div>
                                    <hr />
                                </div>
                            )
                        })}
                    </div>
                }
            </div>

        )
    }
}

export default UserInfor;