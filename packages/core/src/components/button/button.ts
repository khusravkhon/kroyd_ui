import { LitElement, html } from "lit";

/**
 * Headless Web Component — логика без Shadow DOM и без встроенных стилей.
 * Пользователь может подключать стили отдельно.
 */
export class UiButton extends LitElement {
  createRenderRoot() {
    return this; // отключаем Shadow DOM, чтобы стили применялись извне
  }

  render() {
    return html`<button class="ui-button"><slot></slot></button>`;
  }
}

if (!customElements.get("ui-button")) {
  customElements.define("ui-button", UiButton);
}
