import React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ui-button": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

export {};
