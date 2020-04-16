import React from "react";
export const themes = {
  isSignedIn: false,
  shortHeader: "navbar-green",
};

export const HeaderContext = React.createContext();

export const HeaderProvider = HeaderContext.Provider;
export const HeaderConsumer = HeaderContext.Consumer;

export default HeaderContext;
