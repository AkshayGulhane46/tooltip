import { useRef, useState } from "react";
import {
  TooltipWrapper,
  TooltipTarget,
  CenterContainer,
  TooltipBox
} from "./styled";

function Tooltip({ position, text, children, background, styleMe = true }) {
  
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const targetRef = useRef(null);
  const showTooltip = isHovered || isFocused;


  return (
    <TooltipWrapper>
      <TooltipTarget
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
       
        ref={targetRef}
        styleMe={styleMe}
        showOnFocus={isFocused}
      >
        {children}
      </TooltipTarget>
      {showTooltip && (
        <CenterContainer position={position}>
          <TooltipBox background={background} position={position}>
            {text}
          </TooltipBox>
        </CenterContainer>
      )}
    </TooltipWrapper>
  );
}

export default Tooltip;