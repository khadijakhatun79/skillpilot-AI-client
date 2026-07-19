import { Send } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const SUGGESTIONS = [
  "Review my learning roadmap",
  "How do I ask for a promotion?",
  "What courses do I need next?",
];

interface ChatInputProps {
  onSendMessage: (content: string) => void;
  disabled: boolean;
}

export default function ChatInput({ onSendMessage, disabled }: ChatInputProps) {
  const [input, setInput] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
    }
  }, [input]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || disabled) return;
    onSendMessage(input);
    setInput('');
  };

  return (
    <div className="p-4 bg-white border-t border-gray-200">
      
      {/* Suggestions */}
      <div className="flex overflow-x-auto hide-scrollbar space-x-2 mb-3 pb-1">
        {SUGGESTIONS.map((suggestion, idx) => (
          <button
            key={idx}
            onClick={() => onSendMessage(suggestion)}
            disabled={disabled}
            className="flex-shrink-0 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-200 transition-colors disabled:opacity-50 whitespace-nowrap"
          >
            {suggestion}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="relative">
        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything..."
          className="w-full bg-gray-50 border border-gray-300 rounded-2xl pl-4 pr-12 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none overflow-y-auto"
          rows={1}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSubmit(e);
            }
          }}
        />
        <button 
          type="submit"
          disabled={!input.trim() || disabled}
          className="absolute right-2 bottom-2 p-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
      <p className="text-[10px] text-center text-gray-400 mt-2">
        AI Career Coach can make mistakes. Consider verifying important career advice.
      </p>
    </div>
  );
}
