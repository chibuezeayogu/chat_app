import { setCallback } from "../../client/chat";
import "components/message/message";
import "./messages.pcss";

const scrollToButton = (element) => {
  // eslint-disable-next-line
  element.scrollTop = element.scrollheight;
};

const messages = document.querySelector(".js-messages");

if (messages) {
  const content = messages.querySelector(".js-messages--content");

  scrollToButton(content);

  setCallback((message) => {
    content.insertAdjacentHTML("beforeend", message);

    scrollToButton(content);
  });
}
