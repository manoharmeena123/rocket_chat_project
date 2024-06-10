import { createContext, useContext, useEffect, useState, useRef } from "react";

const WSStateContext = createContext();

function WSProvider({ children }) {
  const [wsInstance, setWsInstance] = useState(null);
  const wsRef = useRef(null);

  useEffect(() => {
    const connectWebSocket = () => {
      const ws = new WebSocket(process.env.NEXT_PUBLIC_ROCKET_CHAT_URL);

      ws.onopen = () => {
        console.log(
          "WebSocket connection opened:",
          process.env.NEXT_PUBLIC_ROCKET_CHAT_URL
        );
        ws.send(
          JSON.stringify({ msg: "connect", version: "1", support: ["1"] })
        );
      };

      ws.onmessage = (event) => {
        const message = JSON.parse(event.data);
        if (message.msg === "ping") {
          ws.send(JSON.stringify({ msg: "pong" }));
        }
        console.log("WebSocket message received:", message);
      };

      ws.onerror = (error) => {
        console.error("WebSocket error:", error);
      };

      ws.onclose = () => {
        console.log("WebSocket connection closed");
        connectWebSocket();
      };

      wsRef.current = ws;
      setWsInstance(ws);
    };

    connectWebSocket();

    return () => {
      if (wsRef.current) {
        wsRef.current.close();
        console.log("WebSocket instance closed on cleanup");
      }
    };
  }, []);

  return (
    <WSStateContext.Provider value={{ wsInstance }}>
      {children}
    </WSStateContext.Provider>
  );
}

function useWS() {
  const context = useContext(WSStateContext);
  if (context === undefined) {
    throw new Error("useWS must be used within a WSProvider");
  }
  return context;
}

export { WSProvider, useWS };
