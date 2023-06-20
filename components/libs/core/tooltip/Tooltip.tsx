import { ReactElement } from "react";
import "./tooltip.scss";

type propsType = {
  text: String;
  type: String;
};
const Tooltip = ({
  children,
  props,
}: {
  children: ReactElement;
  props: propsType;
}) => {
  const { text, type } = props;
  return (
    <div className="tooltip-parent">
      {/* <div
        className={`tooltip-indicator ${
          type === "primary"
            ? "tooltip-primary"
            : type === "secondary"
            ? "tooltip-secondary"
            : "tooltip-error"
        }`}
      ></div> */}
      <div
        className={`tooltip 
        ${
          type === "primary"
            ? "tooltip-primary"
            : type === "secondary"
            ? "tooltip-secondary"
            : "tooltip-error"
        }`}
      >
        {text}
      </div>
      {children}
    </div>
  );
};

export default Tooltip;
