import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";
import { buttonStyles } from "./button.styles";

export class UiButton extends LitElement {
  static styles = buttonStyles;

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ reflect: true })
  variant: "primary" | "error" | "error_outline" | "success" = "primary";

  @property({ reflect: true })
  size: "sm" | "md" | "lg" = "md";

  private handleClick(e: MouseEvent) {
    if (this.disabled) return;

    this.dispatchEvent(
      new CustomEvent("ui-click", {
        detail: {
          variant: this.variant,
          size: this.size,
          disabled: this.disabled,
          originalEvent: e,
        },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <button
        class="
          button
          button__${this.variant}
          button__${this.size}
        "
        ?disabled=${this.disabled}
        @click=${this.handleClick}
      >
        <slot></slot>
      </button>
    `;
  }
}

customElements.define("ui-button", UiButton);
