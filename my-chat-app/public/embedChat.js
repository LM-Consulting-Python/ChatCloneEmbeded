(function () {
  window.addEventListener("DOMContentLoaded", function () {
    createChatPopup(window.embeddedChatbotConfig);
  });

  function createChatPopup(config) {
    // Criar o elemento do popup de chat
    var chatPopup = document.createElement("div");
    chatPopup.id = "chatPopup";
    chatPopup.style.display = "none";
    chatPopup.style.position = "fixed";
    chatPopup.style.bottom = "20px";
    chatPopup.style.right = "20px";
    chatPopup.style.width = "350px";
    chatPopup.style.height = "500px";
    chatPopup.style.border = "1px solid #ccc";
    chatPopup.style.borderRadius = "10px";
    chatPopup.style.backgroundColor = "#fff";
    chatPopup.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    chatPopup.style.zIndex = "1000";

    // Criar o cabeçalho do chat
    var chatHeader = document.createElement("div");
    chatHeader.style.padding = "10px";
    chatHeader.style.backgroundColor = "#007bff";
    chatHeader.style.color = "#fff";
    chatHeader.style.textAlign = "center";
    chatHeader.style.fontSize = "18px";
    chatHeader.style.fontWeight = "bold";
    chatHeader.style.borderTopLeftRadius = "10px";
    chatHeader.style.borderTopRightRadius = "10px";
    chatHeader.innerText = "Chat";

    // Criar o botão de fechar
    var closeButton = document.createElement("button");
    closeButton.innerHTML = "×";
    closeButton.style.position = "absolute";
    closeButton.style.top = "10px";
    closeButton.style.right = "10px";
    closeButton.style.background = "transparent";
    closeButton.style.border = "none";
    closeButton.style.color = "#fff";
    closeButton.style.fontSize = "20px";
    closeButton.style.cursor = "pointer";
    closeButton.onclick = function () {
      chatPopup.style.display = "none";
    };

    // Adicionar o botão de fechar ao cabeçalho
    chatHeader.appendChild(closeButton);
    // Adicionar o cabeçalho ao popup de chat
    chatPopup.appendChild(chatHeader);

    // Criar o iframe do chat
    var iframe = document.createElement("iframe");
    iframe.src = "https://" + config.domain + "/" + config.chatbotId + ".html";
    iframe.style.width = "100%";
    iframe.style.height = "calc(100% - 40px)"; // Adjusting for header height
    iframe.style.border = "none";

    // Adicionar o iframe ao popup de chat
    chatPopup.appendChild(iframe);
    // Adicionar o popup de chat ao corpo do documento
    document.body.appendChild(chatPopup);

    return chatPopup;
  }
})();
