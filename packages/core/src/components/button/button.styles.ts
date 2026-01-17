import { css } from "lit";

export const buttonStyles = css`
  :host {
    display: inline-block;
  }

  .button {
    padding: 8px 12px;
    user-select: none;
    cursor: pointer;
    background-color: var(--grey);
    text-align: center;
    color: var(--text-primary);
    border-radius: 10px;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    transition: opacity 200ms;
    box-sizing: border-box;
    border: none;
  }

  /* ================== variants ================== */

  .button__primary {
    background-color: var(--main-primary);
    color: var(--cards-white);
    outline: none;
  }

  .button__error {
    background-color: var(--error);
    border: 1px solid var(--error);
    color: var(--cards-white);
    padding: 7px 12px;
  }

  .button__error_outline {
    background-color: var(--cards-white);
    border: 1px solid var(--error);
    color: var(--error);
    padding: 7px 12px;
  }

  .button__success {
    background-color: var(--success);
    border: 1px solid var(--success);
    color: var(--cards-white);
    outline: none;
  }

  /* ================== sizes ================== */

  .button__lg {
    padding: 12px 20px;
    line-height: 20px;
    font-size: 16px;
  }

  .button__md {
    padding: 10px 12px;
    line-height: 20px;
  }

  .button__sm {
    padding: 8px 12px;
    line-height: 16px;
    font-size: 12px;
  }

  /* ================== states ================== */

  .button:hover {
    opacity: 0.85;
  }

  .button:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .button:disabled:hover {
    opacity: 0.4;
  }
`;
