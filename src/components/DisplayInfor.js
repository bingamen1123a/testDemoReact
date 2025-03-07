import React from "react";
import './DisplayInfo.scss';
import logo from '../logo.svg'; // import logo


class UserInfor extends React.Component {
    // props => Viet tat cua propeties(tai san)
    state = {
        displayShow: true
    }
    // ham se chay bat dau tu contructor -> render -> componentDidMount
    componentDidMount() {
        console.log("call me component did mount:")
        setTimeout(() => { document.title = "React with PhcHai" }, 3000);
    }
    // ham nay se duoc thuc hien khi co thay doi tren trang || qua khu cua prop hay state co gi
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("call me component did update:", this.props, prevProps);
        if (this.props.listUser !== prevProps.listUser) { // nay la dieu kien thua de lai de hieu thoi :))
            if (this.props.listUser.length === 5) { // neu du 5 users se thong bao
                alert('you got 5 users')
            }
        }
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
            <>
                <div>
                    <button onClick={() => { this.handleShowHide() }}>{this.state.displayShow === true ? 'Hide' : 'Show'} list user:</button>
                </div>
                {this.state.displayShow &&
                    <div className="Display-Info-Container">
                        <img src={logo} />
                        {listUser.map((user) => {
                            return (
                                <div key={user.id} className={user.age > 18 ? "green" : "red"}>
                                    <div>My name's: {user.name}</div>
                                    <div>Age: {user.age}</div>
                                    <hr />
                                    <button onClick={() => { this.props.handelDeleteUser(user.id) }}>Delete</button>
                                </div>
                            )
                        })}
                    </div>
                }
            </>

        )
    }
}

export default UserInfor;