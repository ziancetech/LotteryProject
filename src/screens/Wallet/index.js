import React from "react";
import Walletpage from "../../components/Walletpage";

import WrapperComponent from "../../components/WrapperComponent";
const Wallet = () => {
  return (
    <WrapperComponent isHeader>
      <Walletpage />
    </WrapperComponent>
  );
};

export default Wallet;
