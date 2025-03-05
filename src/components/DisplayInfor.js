import React from "react";
import './DisplayInfo.scss';

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
                    <div className="Display-Info-Container">
                        {listUser.map((user) => {
                            return (
                                <div key={user.id} className={user.age > 18 ? "green" : "red"}>
                                    <div style={{ color: 'red', paddingTop: '50px' }}>My name's: {user.name}</div>
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