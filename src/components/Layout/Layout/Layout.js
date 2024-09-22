import React from "react";
import Wrapper from "../../../hoc/Wrapper";
import Navbar from "../../Navigation/Navbar/Navbar";
import "./Layout.css";

const Layout = (props) => {
  return (
    <Wrapper>
      <div>
        <Navbar />
        <main className="content">{props.children}</main>
      </div>
    </Wrapper>
  );
};

export default Layout;
