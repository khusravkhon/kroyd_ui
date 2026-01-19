import React, { useEffect, useRef } from "react";

export type UiButtonClickEvent = CustomEvent<{
  variant: string;
  size: string;
  originalEvent: MouseEvent;
}>;

export interface UiButtonProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "primary" | "error" | "error_outline" | "success";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;

  onUiClick?: (e: UiButtonClickEvent) => void;
}

export const UirButton: React.FC<UiButtonProps> = ({
  onUiClick,
  children,
  ...props
}) => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !onUiClick) return;

    const handler = (e: Event) => {
      onUiClick(e as UiButtonClickEvent);
    };

    el.addEventListener("ui-click", handler);

    return () => {
      el.removeEventListener("ui-click", handler);
    };
  }, [onUiClick]);

  return (
    <ui-button ref={ref} {...props}>
      {children}
    </ui-button>
  );
};
