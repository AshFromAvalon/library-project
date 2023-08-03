import React from "react";

import "./title.css";

export type TitleProps = {
  children?: React.ReactNode;
};

export function Title({ children }: TitleProps) {
  return <h1 data-title>{children}</h1>;
}
