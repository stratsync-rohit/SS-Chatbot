import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-4 sm:px-6">
      <div className="max-w-3xl mx-auto flex items-center justify-center">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br rounded-lg flex items-left justify-center"></div>
          <div>
            <img
              src="/src/assets/header_logo.jpeg"
              alt="Stratsync Logo"
              className="h-10 w-auto"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
