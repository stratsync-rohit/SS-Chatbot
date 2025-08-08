import React, { useState, useRef, useEffect } from 'react';
import { Send, Loader2 } from 'lucide-react';

interface InputBarProps {
  onSendMessage: (message: string) => void;
  isDisabled?: boolean;
}

const InputBar: React.FC<InputBarProps> = ({ onSendMessage, isDisabled = false }) => {
  const [message, setMessage] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      const scrollHeight = Math.min(textarea.scrollHeight, 120);
      textarea.style.height = `${scrollHeight}px`;
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [message]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isDisabled) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="border-t border-gray-200 bg-white px-4 py-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <form onSubmit={handleSubmit} className="flex items-center gap-3">
  
  <textarea
    ref={textareaRef}
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    onKeyDown={handleKeyDown}
    placeholder="Type your message to StratSync..."
    disabled={isDisabled}
    rows={1}
    className={`
      flex-1 min-h-[48px] max-h-[120px]
      resize-none rounded-xl px-4 py-3 text-sm sm:text-base
      border-2 border-cyan-500 focus:outline-none
      focus:ring-2 focus:ring-cyan-400
      transition-all duration-200
      text-gray-900 placeholder-gray-400
      disabled:bg-gray-50 disabled:text-gray-400
    `}
  />


  <button
    type="submit"
    disabled={!message.trim() || isDisabled}
    className={`
      px-5 py-3 rounded-xl font-semibold transition duration-200
      text-white
      ${!message.trim() || isDisabled
        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
        : 'bg-gradient-to-r from-blue-800 to-emerald-700 hover:opacity-90 shadow-md'}
    `}
  >
    {isDisabled ? (
      <Loader2 className="w-5 h-5 animate-spin" />
    ) : (
      <Send className="w-5 h-5" />
    )}
  </button>
</form>

      </div>
    </div>
  );
};

export default InputBar;
