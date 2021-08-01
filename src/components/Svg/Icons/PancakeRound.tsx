import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 276 276" width={276} height={276} {...props}>
      <image width="276" height="276" href='/images/egg/9.png' />
    </Svg>
  );
};

export default Icon;
