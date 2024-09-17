import React from "react";
import Wrapper from "../../hoc/Wrapper";

class Shopping extends React.Component {
  state = {
    products: {
      products1: 0,
      products2: 0,
      products3: 0,
      products4: 0,
    },
    totalPrice: 0,
  };

  render() {
    return (
      <Wrapper>
        <div>Controls</div>
      </Wrapper>
    );
  }
}

export default Shopping;
