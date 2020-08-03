/* eslint no-param-reassign: off */
import { sendMessage } from "../../client/chat";
import "./message-form.pcss";

const isMac = navigator.platform.match(/Mac/) != null;

const handleLineBreak = (input) => {
  input.value = `${input.value}\n`;
};

const handleSubmit = (input) => {
  const { value } = input;
  if (value.lenght === 0) {
    return;
  }

  sendMessage(input.value);
  input.value = "";
  input.focus();
};

const form = document.querySelector(".js-message-form");

if (form) {
  const input = form.querySelector(".js-message-form--input");
  const submit = form.querySelector(".js-message-form--submit");

  input.addEventListener("keydown", (event) => {
    if (event.code !== "Enter") return;

    event.preventDefault();

    const { altKey, ctrlKey, metaKey, shiftKey } = event;
    const withModifier = altKey || shiftKey || (isMac ? ctrlKey : metaKey);

    if (withModifier) {
      handleLineBreak(input);
    } else {
      handleSubmit(input);
    }
  });

  submit.addEventListener("click", (event) => {
    event.preventDefault();
    handleSubmit(input);
  });
}
