import React from 'react';
import Friend from './Friends'

const FriendsList = props => {
    return (
        <ul>
            {props.friends && props.friends.map(friend => {
                return (
                    <Friend key={friend.name} friend={friend} />
                );
            })}
        </ul>
    );
};

export default FriendsList;




















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