import React from "react";
import { Route, Redirect } from "react-router-dom";

const protectedRoute = ({
  user,
  render,
  component: ViewComponent,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (user) {
          if (typeof render === "function") {
            return render(props);
          } else if (typeof ViewComponent !== "undefined") {
            return <ViewComponent {...props} />;
          }
        } else {
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }
      }}
    />
  );
};
export default protectedRoute;
