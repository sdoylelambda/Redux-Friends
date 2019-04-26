import React from 'react';
import Friend from './Friends';
// import moment from 'moment';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { getFriends } from "../actions";

class FriendsList extends React.Component {
    componentDidMount() {
        this.props.getFriends();
    }

    render() {
        return (
            <ul>
                {this.props.friends && this.props.friends.map(friend => {
                    return (
                        <Friend key={friend.name} friend={friend} />
                    );
                })}
            </ul>
        );
    };
}

const mapStateToProps = ({ friends, fetchingData}) => ({
    friends,
    fetchingData
});

export default withRouter(
    connect(
        mapStateToProps,
        { getFriends }
) (FriendsList)
);




















// import { connect } from 'react-redux';
// import moment from 'moment';
// import Loader from "react-loader-spinner";
// import { withRouter } from "react-router-dom";

// import { getData } from "../actions"

// class FriendsList extends React.Component {
//     componentDidMount() {
//         this.props.getData();
//     }
//     formatData
// }

// const mapStateToProps = state => ({
//     : state. ,
//     : state. ,
// });

// export default withRouter(
//     connect(
//         mapStateToProps,
//         { getData }
//     )(FriendsList)
// );