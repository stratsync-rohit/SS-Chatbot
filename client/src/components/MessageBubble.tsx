import React from "react";


interface Message {
  id: string;
  content: string;
  sender: "user" | "assistant";
  timestamp: Date;
}

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isUser = message.sender === "user";

  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      } items-start space-x-3`}
    >
      {!isUser && (
        <img
          src="images/logo-bg.jpeg"
          alt="Stratsync Logo"
          className="h-10 w-auto"
        />
      )}

      <div
        className={`max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-xl ${
          isUser ? "order-first" : ""
        }`}
      >
        <div
          className={`px-4 py-3 rounded-2xl ${
            isUser
              ? "bg-gray-100 text-grey rounded-br-md"
              : "bg-gray-100 text-gray-900 rounded-bl-md"
          }`}
        >
          <p className="text-sm sm:text-base leading-relaxed whitespace-pre-wrap break-words">
            {message.content}
          </p>
        </div>

        <div
          className={`mt-1 text-xs text-gray-500 ${
            isUser ? "text-right" : "text-left"
          }`}
        >
          
        </div>
      </div>

      {isUser && (
        <img
          src="images/user-avatar.png"
          alt="User"
          className="h-10 w-10 rounded-full"
          onError={(e) => {
            
            e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='%236B7280'/%3E%3Ctext x='20' y='25' text-anchor='middle' fill='white' font-size='16'%3EU%3C/text%3E%3C/svg%3E";
          }}
        />
      )}
    </div>
  );
};

export default MessageBubble;
