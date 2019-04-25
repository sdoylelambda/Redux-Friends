import React from "react";

const Friends = props => {
    return (
        <li>
            <div className="card">
            <h2>{props.friends.name}</h2>
            </div>
        </li>
    );
};

export default Friends;