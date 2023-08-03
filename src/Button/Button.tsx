import React from "react";

import "./button.css";

export type ButtonProps = React.ComponentProps<"button"> & {
  variant?: "primary" | "secondary";
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", ...props }, ref) => {
    return <button data-button={`variant:${variant}`} ref={ref} {...props} />;
  }
);
