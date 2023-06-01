<!-- markdownlint-disable MD030 -->

# Flowise Embed

Javascript library to display flowise chatbot on your website

![Flowise](https://github.com/FlowiseAI/FlowiseChatEmbed/blob/main/images/ChatEmbed.gif?raw=true)

Install:

```bash
yarn install
```

Dev:

```bash
yarn dev
```

Build:

```bash
yarn build
```

## Embed in your HTML

```html
<script type="module">
  import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js";
  Chatbot.init({
    chatflowid: "<chatflowid>",
    apiHost: "http://localhost:3000",
  });
</script>
```

## Configuration

You can also customize chatbot with different configuration

```html
<script type="module">
  import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js";
  Chatbot.init({
    chatflowid: "91e9c803-5169-4db9-8207-3c0915d71c5f",
    apiHost: "http://localhost:3000",
    theme: {
      button: {
        backgroundColor: "#3B81F6",
        right: 20,
        bottom: 20,
        size: "medium",
        iconColor: "white",
        customIconSrc:
          "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg",
      },
      chatWindow: {
        welcomeMessage: "Hello! This is custom welcome message",
        backgroundColor: "#ffffff",
        poweredByTextColor: "#303235",
        botMessage: {
          backgroundColor: "#f7f8ff",
          textColor: "#303235",
          showAvatar: true,
          avatarSrc:
            "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/parroticon.png",
        },
        userMessage: {
          backgroundColor: "#3B81F6",
          textColor: "#ffffff",
          showAvatar: true,
          avatarSrc:
            "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png",
        },
        textInput: {
          placeholder: "Type your question",
          backgroundColor: "#ffffff",
          textColor: "#303235",
          sendButtonColor: "#3B81F6",
        },
      },
    },
  });
</script>
```

## License

Source code in this repository is made available under the [MIT License](https://github.com/FlowiseAI/Flowise/blob/master/LICENSE.md).
