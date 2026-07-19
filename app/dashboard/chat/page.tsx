"use client";

import { useState, useRef, useEffect } from 'react';
import ChatSidebar from '@/components/ai-chat/ChatSidebar';
import ChatMessageList, { Message } from '@/components/ai-chat/ChatMessageList';
import ChatInput from '@/components/ai-chat/ChatInput';
import ContextMemoryWidget from '@/components/ai-chat/ContextMemoryWidget';

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = (content: string) => {
    // 1. Add User Message
    const userMessage: Message = {
      id: Math.random().toString(36).substring(7),
      role: 'user',
      content,
    };
    setMessages((prev) => [...prev, userMessage]);
    
    // 2. Set Typing Indicator
    setIsTyping(true);

    // 3. Mock AI Response Delay
    setTimeout(() => {
      setIsTyping(false);
      const aiMessage: Message = {
        id: Math.random().toString(36).substring(7),
        role: 'ai',
        content: "That's a great question! Based on your target role as a Senior Frontend Engineer, I recommend focusing on architectural patterns. Here are a few things to consider:\n\n1. How do you currently handle global state?\n2. Are you familiar with Server Components in Next.js 14?\n\nLet me know if you want to dive deeper into any of these!",
      };
      setMessages((prev) => [...prev, aiMessage]);
    }, 1500);
  };

  return (
    <div className="flex h-[calc(100vh-4rem)] overflow-hidden bg-white">
      {/* Left Sidebar: History */}
      <ChatSidebar />

      {/* Center: Main Chat Area */}
      <div className="flex-1 flex flex-col min-w-0 bg-white">
        {/* Messages */}
        <ChatMessageList messages={messages} isTyping={isTyping} />
        
        {/* Input area */}
        <ChatInput onSendMessage={handleSendMessage} disabled={isTyping} />
      </div>

      {/* Right Sidebar: Context Memory */}
      <ContextMemoryWidget />
    </div>
  );
}