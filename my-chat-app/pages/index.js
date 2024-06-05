import { useEffect } from "react";
import Head from "next/head";

// Função para criar o popup do chat
const createChatPopup = () => {
  // Adicionar o botão de chat
  const openChatButton = document.createElement("button");
  openChatButton.innerText = "Abrir Chat";
  openChatButton.style.padding = "10px 20px";
  openChatButton.style.fontSize = "16px";
  openChatButton.style.border = "none";
  openChatButton.style.backgroundColor = "#007bff";
  openChatButton.style.color = "#fff";
  openChatButton.style.cursor = "pointer";
  openChatButton.style.borderRadius = "5px";
  openChatButton.style.position = "fixed";
  openChatButton.style.bottom = "20px";
  openChatButton.style.right = "20px";
  openChatButton.style.zIndex = "999";
  openChatButton.onclick = function () {
    const chatPopup = document.getElementById("chatPopup");
    if (chatPopup) {
      chatPopup.style.display = "block";
    }
  };

  document.body.appendChild(openChatButton);
};

export default function Home() {
  useEffect(() => {
    // Carregar o script do chat
    const script = document.createElement("script");
    script.src = "/embedChat.js";
    script.defer = true;
    script.onload = createChatPopup; // Chamar a função createChatPopup após o carregamento do script
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>{`
          body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }
          .container {
            text-align: center;
          }
        `}</style>
      </Head>
      <div className="container">
        <h1>Bem-vindo à Home Page</h1>
      </div>
    </div>
  );
}
