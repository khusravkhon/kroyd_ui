import { default as React } from 'react';

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
export declare const UirButton: React.FC<UiButtonProps>;
