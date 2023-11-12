import * as React from "react";
import { TouchableOpacity } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";
const SvgComponent = (props) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handlePressIn = () => {
    setIsHovered(true);
  };

  const handlePressOut = () => {
    setIsHovered(false);
  };

  const svgColor = isHovered ? "#BDBDBD" : "#FF6C00";
  return (
    <TouchableOpacity onPressIn={handlePressIn} onPressOut={handlePressOut} activeOpacity={1}>
      <Svg xmlns="http://www.w3.org/2000/svg" width={37} height={37} fill="none" {...props}>
        <Circle cx={18.5} cy={18.5} r={12} fill="#fff" stroke={svgColor} transform="rotate(-45 18.5 18.5)" />
        <Path
          fill={svgColor}
          fillRule="evenodd"
          d="m14.257 13.55-.707.707 4.243 4.243-4.243 4.243.707.707 4.243-4.243 4.243 4.243.707-.707-4.243-4.243 4.243-4.243-.707-.707-4.243 4.243-4.243-4.243Z"
          clipRule="evenodd"
        />
      </Svg>
    </TouchableOpacity>
  );
};
export default SvgComponent;
