import { useRef, useState } from "react";
import {TooltipWrapper,TooltipTarget,CenterContainer,TooltipBox} from "./styled";

function Tooltip({ position, text, children, background, styleMe = true }) {
  
  const [isHovered, setIsHovered] = useState(false);  // Hooks for Link 
  const [isFocused, setIsFocused] = useState(false);
  const showTooltip = isHovered || isFocused; // tooltip will be shown if element is Hovered or focused


  return (
    <TooltipWrapper>
      <TooltipTarget
        onMouseEnter={() => setIsHovered(true)} // if Mouse is hovered then show tooltip
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        styleMe={styleMe}
        showOnFocus={isFocused}
      >
        {children}
      </TooltipTarget>
      
      {/*tooltip box and container both should have position*/ }

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