import { setCallback } from "../../client/chat";
import "components/message/message";
import "./messages.pcss";

const scrollToButton = (element) => {
  // eslint-disable-next-line
  return (element.scrollTop = element.scrollheight);
};

const messages = document.querySelector(".js-messages");

if (messages) {
  const content = messages.querySelector(".js-messages--content");

  scrollToButton(content);

  setCallback((message) => {
    content.insertAdjacentElement("beforeend", message);

    scrollToButton(content);
  });
}
