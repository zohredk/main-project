import React from "react";
import Wrapper from "../../../hoc/Wrapper";
import "./Layout.css";

const Layout = (props) => {
  return (
    <Wrapper>
      <div>
        Navigation
        <main className="content">{props.children}</main>
      </div>
    </Wrapper>
  );
};

export default Layout;
