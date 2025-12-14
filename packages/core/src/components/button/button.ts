import { LitElement, html } from "lit";
import { buttonStyles } from "./button.styles";
/**
 * Headless Web Component — логика без Shadow DOM и без встроенных стилей.
 * Пользователь может подключать стили отдельно.
 */
export class UiButton extends LitElement {
  static styles = buttonStyles;
  render() {
    return html`
      <button part="button">
        <slot></slot>
      </button>
    `;
  }
}

if (!customElements.get("ui-button")) {
  customElements.define("ui-button", UiButton);
}
