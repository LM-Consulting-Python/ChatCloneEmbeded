import { useEffect } from "react";
import Head from "next/head";

export default function Home() {
  useEffect(() => {
    window.embeddedChatbotConfig = {
      chatbotId: "ziBfC3Bk4W85W_OeF95IX", // Substitua pelo ID do seu chatbot
      domain: "example.com", // Substitua pelo domínio onde o chat está hospedado
    };
    const script = document.createElement("script");
    script.src = "/embedChat.js";
    script.defer = true;
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
