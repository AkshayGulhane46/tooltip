import styled from "styled-components";
import Tooltip from "./components/tooltip";
import "./index";

const TooltipTarget = styled.span``;

export default function App() {
  return (
    <div className="App">

      <Tooltip text="Thanks for hovering! i'm a tooltip" position="left" background="393e46">
        <TooltipTarget><u>Hover over me</u></TooltipTarget>
      </Tooltip>
      
    </div>
  );
}