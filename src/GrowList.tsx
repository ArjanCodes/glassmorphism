import { Grow } from "@material-ui/core";
import React from "react";

export interface GrowListProps extends React.HTMLAttributes<HTMLDivElement> {
  interval?: number;
}

export function GrowList(props: GrowListProps) {
  const { interval = 200, children, ...rest } = props;

  return (
    <div {...rest}>
      {React.Children.map(children, (child, index) =>
        React.isValidElement(child) ? (
          <Grow in timeout={(index + 1) * interval}>
            {child}
          </Grow>
        ) : null
      )}
    </div>
  );
}
