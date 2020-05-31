import * as React from "react";
import { omit } from "../util/omit";
import "./Button.css";

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & { isLoading?: boolean };

export const Button = (props: ButtonProps) => {
  const [showLoader, setShowLoader] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (props.isLoading) {
      setShowLoader(true);
    }

    if (!props.isLoading && showLoader) {
      const timeout = setTimeout(() => {
        setShowLoader(false);
      }, 400);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [props.isLoading, showLoader]);

  return (
    <button
      {...omit(props, ["isLoading"])}
      disabled={showLoader}
      className={`button ${props.className ? props.className : ""}`}
    >
      {showLoader ? "Loading..." : props.children}
    </button>
  );
};

Button.defaultProps = {
  isLoading: false,
};
