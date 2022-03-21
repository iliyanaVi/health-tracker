import React from "react";

const loggedInContext = React.createContext({
  isLoggedIn: false,
  token: "",
  login: (token) => {},
  logout: () => {},
});
export default loggedInContext;
