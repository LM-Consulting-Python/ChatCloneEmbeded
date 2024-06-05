import { useEffect } from "react";
import Head from "next/head";

export default function Home() {
  useEffect(() => {
    // Configuração do chatbot
    window.embeddedChatbotConfig = {
      chatbotId: "ziBfC3Bk4W85W_OeF95IX", // Substitua pelo ID do seu chatbot
      domain: "example.com", // Substitua pelo domínio onde o chat está hospedado
    };

    // Carregar o script do chat
    const script = document.createElement("script");
    script.src = "/embedChat.js";
    script.defer = true;
    document.body.appendChild(script);

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
      document.getElementById("chatPopup").style.display = "block";
    };

    document.body.appendChild(openChatButton);
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
