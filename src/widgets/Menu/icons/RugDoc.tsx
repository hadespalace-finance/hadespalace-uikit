import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 480 275" {...props}>
      <image width="480" height="275" href='/images/egg/RugDoc.png' />
    </Svg>
  );
};

export default Icon;
