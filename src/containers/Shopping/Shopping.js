import React from "react";

import Wrapper from "../../hoc/Wrapper";
import Controls from "../../components/Controls/Controls";

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
        <Controls />
      </Wrapper>
    );
  }
}

export default Shopping;
