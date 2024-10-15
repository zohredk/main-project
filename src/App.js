import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout/Layout";
import Shopping from "./containers/Shopping/Shopping";
import Checkout from "./containers/Checkout/Checkout";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Layout>
            <Routes>
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/" exact element={<Shopping />} />
            </Routes>
          </Layout>
        </Router>
      </div>
    );
  }
}

export default App;
