import React from "react";

class Friends extends React.Component {
    constructor(props) {
        super(props)
    }

        render() {
        return (
            <li>
                <div className="card">
                <h2>{this.props.friend.name}</h2>
                </div>
            </li>
        );
    };
}

export default Friends;