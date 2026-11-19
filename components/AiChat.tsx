"use client";

import { useState } from "react";

// Floating AI assistant button and chat panel.
export default function AiChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<
  { role: "user" | "assistant"; content: string }[]
   >([]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  async function sendMessage() {
  if (!input.trim() || loading) return;

  const userMessage = {
    role: "user" as const,
    content: input.trim(),
  };

  const updatedMessages = [...messages, userMessage];

  setMessages(updatedMessages);
  setInput("");
  setLoading(true);

  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages: updatedMessages }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Something went wrong");
    }

    setMessages([
      ...updatedMessages,
      { role: "assistant", content: data.message },
    ]);
  } catch (error) {
    console.error("Albert error:", error);
  } finally {
    setLoading(false);
  }
}

  return (
    <>
      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-300 w-[90%] max-w-95 h-125 bg-purple-dark border border-gold rounded-2xl flex flex-col overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-gold">
            <span className="font-display text-gold text-lg">Ask Albert</span>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close chat" className="text-gold text-2xl leading-none">×</button>
          </div>
          <div className="flex-1 p-5 text-cream text-sm overflow-y-auto space-y-4">
  <p>Hi, I&apos;m Albert. Ask me anything about our tours, meeting points, or Dublin.</p>

  {messages.map((message, index) => (
    <div
      key={index}
      className={message.role === "user" ? "text-right" : "text-left"}
    >
      <span className="inline-block bg-purple-light rounded-lg px-3 py-2">
        {message.content}
      </span>
    </div>
  ))}

  {loading && <p className="text-gold">Albert is thinking...</p>}
</div>
          <div className="p-4 border-t border-gold flex gap-2">
  <input
    type="text"
    value={input}
    onChange={(e) => setInput(e.target.value)}
    onKeyDown={(e) => {
      if (e.key === "Enter") sendMessage();
    }}
    placeholder="Type your question..."
    disabled={loading}
    className="flex-1 min-w-0 bg-purple-light text-cream border border-gold rounded px-3 py-2"
  />

  <button
    type="button"
    onClick={sendMessage}
    disabled={loading || !input.trim()}
    className="bg-gold text-purple-dark font-bold px-4 py-2 rounded disabled:opacity-50"
  >
    Send
  </button>
</div>
        </div>
      )}

      {/* Floating button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label="Open Albert assistant"
        className="fixed bottom-6 right-6 z-300 bg-gold text-purple-dark w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:opacity-90 transition-opacity"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3C7.03 3 3 6.58 3 11c0 2.1.92 4 2.43 5.42L4 21l4.1-1.35A10.3 10.3 0 0 0 12 20c4.97 0 9-3.58 9-8s-4.03-9-9-9z" />
        </svg>
      </button>
    </>
  );
}