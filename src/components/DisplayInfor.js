import React from "react";

class DisplayInfo extends React.Component {
    render() {
        // props -> viet tat cua properties de thua ke lai thuoc tinh tu cha va goi su dung
        //destructuring array/subject -> giup gian luoc code thay vi phai this.value. thi chi can gan
        const { age, name } = this.props;
        console.log(this.props)
        return (
            <div>
                <div>My name's {name}</div>
                <div>I'm {this.props.age} years old</div>
            </div>
        )
    }
}

export default DisplayInfo;