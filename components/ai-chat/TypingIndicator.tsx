export default function TypingIndicator() {
  return (
    <div className="flex space-x-1.5 p-4 bg-gray-100 rounded-2xl rounded-tl-sm max-w-fit items-center h-10">
      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
    </div>
  );
}
