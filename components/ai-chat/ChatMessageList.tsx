import { User, Sparkles } from 'lucide-react';
import TypingIndicator from './TypingIndicator';

export type Message = {
  id: string;
  role: 'user' | 'ai';
  content: string;
};

interface ChatMessageListProps {
  messages: Message[];
  isTyping: boolean;
}

export default function ChatMessageList({ messages, isTyping }: ChatMessageListProps) {
  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
      {messages.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
          <Sparkles className="w-12 h-12 text-indigo-300 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-1">How can I help you today?</h3>
          <p className="text-sm max-w-sm">I can review your roadmap, suggest courses, or help prepare for interviews.</p>
        </div>
      ) : (
        <>
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex max-w-[85%] md:max-w-[75%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                
                {/* Avatar */}
                <div className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full ${
                  msg.role === 'user' ? 'bg-indigo-600 text-white ml-3' : 'bg-indigo-100 text-indigo-600 mr-3'
                }`}>
                  {msg.role === 'user' ? <User className="w-5 h-5" /> : <Sparkles className="w-4 h-4" />}
                </div>

                {/* Bubble */}
                <div className={`px-4 py-3 rounded-2xl ${
                  msg.role === 'user' 
                    ? 'bg-indigo-600 text-white rounded-tr-sm' 
                    : 'bg-white border border-gray-200 text-gray-800 shadow-sm rounded-tl-sm'
                }`}>
                  <p className="text-sm whitespace-pre-wrap leading-relaxed">{msg.content}</p>
                </div>
                
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex max-w-[85%] flex-row">
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 mr-3">
                  <Sparkles className="w-4 h-4" />
                </div>
                <TypingIndicator />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
