import React from "react";
// import { Route, Redirect, withRouter } from "react-router-dom";
import { Route, Redirect } from "react-router-dom";

const privateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={() => {
                if (localStorage.getItem("token")) {
                // if (localStorage.getItem("esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ"))
                    return <Component />

                } else {
                    return <Redirect to="/login" />;
                }
            }}
        />
    );
};

export default privateRoute;