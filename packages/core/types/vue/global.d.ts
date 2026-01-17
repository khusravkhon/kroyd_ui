import type { DefineComponent } from "vue";
import type { UiButtonProps } from "../core/ui-button.props";

declare module "vue" {
  export interface GlobalComponents {
    "ui-button": DefineComponent<UiButtonProps>;
  }
}
