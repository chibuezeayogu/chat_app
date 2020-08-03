import createChannel from "./cable";

let callback;

const chat = createChannel("ChatChannel", {
  received({ message }) {
    if (callback) callback.call(null, message);
  },
});

const sendMessage = (message) => chat.perform("send_message", { message });

const setCallback = (fn) => {
  callback = fn;
};

export { sendMessage, setCallback };
