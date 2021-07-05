import React from 'react';
import { connect } from "react-redux";
import { login } from "../actions"
// import Loader from "react-loader-spinner";

class Login extends React.Component {
    state = {
        credentials: {
            username: "",
            password: ""
        }
    };

    handleChanges = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        this.props
            .login(this.state.credentials)
            .then(() => this.props.history.push("/protected"))
    };

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChanges}
                    />
                       <input
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChanges}
                    />
                        <button>
                            {this.props.isLogginIn ? (
                                "Loading"
                            ) : (
                                "Log In"
                            )}
                        </button> 
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        isLogginIn: state.isLogginIn
    };
};

export default connect(
    mapStateToProps,
    { login }
)(Login)