import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
// import Loader from "react-loader-spinner";
import { withRouter } from "react-router-dom";

import { getData } from "../actions"

class FriendsList extends React.Component {
    componentDidMount() {
        this.props.getData();
    }
    formatData
}

const mapStateToProps = state => ({
    : state. ,
    : state. ,
});

export default withRouter(
    connect(
        mapStateToProps,
        { getData }
    )(FriendsList)
);