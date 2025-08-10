import React, { useState, useEffect } from 'react';
import { Bot, MessageSquare, Send, User, Sparkles, Zap, Shield, Globe } from 'lucide-react';

const App = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm KITT AI, your advanced AI assistant. How can I help you today?", sender: 'bot' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage = { id: Date.now(), text: inputMessage, sender: 'user' };
      setMessages([...messages, newMessage]);
      setInputMessage('');
      setIsTyping(true);

      // Simulate bot response
      setTimeout(() => {
        const botResponse = {
          id: Date.now() + 1,
          text: "I understand your request. As an advanced AI system, I'm processing your input and will provide you with the most accurate and helpful response possible.",
          sender: 'bot'
        };
        setMessages(prev => [...prev, botResponse]);
        setIsTyping(false);
      }, 2000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-white">KITT AI</h1>
                <p className="text-xs sm:text-sm text-blue-200">Advanced AI Assistant</p>
              </div>
            </div>
            <div className="hidden sm:flex items-center space-x-2 text-green-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Online</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Chat Interface */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
              <div className="p-4 sm:p-6 border-b border-white/10">
                <div className="flex items-center space-x-3">
                  <MessageSquare className="w-5 h-5 text-blue-400" />
                  <h2 className="text-lg sm:text-xl font-semibold text-white">Chat Interface</h2>
                </div>
              </div>
              
              {/* Messages */}
              <div className="h-64 sm:h-80 lg:h-96 overflow-y-auto p-4 sm:p-6 space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs sm:max-w-sm lg:max-w-md px-4 py-3 rounded-2xl ${
                      message.sender === 'user' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-white/20 text-white border border-white/20'
                    }`}>
                      <div className="flex items-start space-x-2">
                        {message.sender === 'bot' && <Bot className="w-4 h-4 mt-1 text-blue-400 flex-shrink-0" />}
                        {message.sender === 'user' && <User className="w-4 h-4 mt-1 text-white flex-shrink-0" />}
                        <p className="text-sm leading-relaxed break-words">{message.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white/20 text-white border border-white/20 px-4 py-3 rounded-2xl max-w-xs sm:max-w-sm">
                      <div className="flex items-center space-x-2">
                        <Bot className="w-4 h-4 text-blue-400" />
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Input */}
              <div className="p-4 sm:p-6 border-t border-white/10">
                <div className="flex space-x-3">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white p-3 rounded-xl transition-all duration-200 transform hover:scale-105 flex-shrink-0"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="order-1 lg:order-2 space-y-6">
            {/* AI Capabilities */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl p-4 sm:p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Sparkles className="w-5 h-5 mr-2 text-yellow-400" />
                AI Capabilities
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                  <Zap className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium text-sm">Lightning Fast</p>
                    <p className="text-white/70 text-xs">Instant responses</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                  <Shield className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium text-sm">Secure & Private</p>
                    <p className="text-white/70 text-xs">End-to-end encryption</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                  <Globe className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium text-sm">Global Knowledge</p>
                    <p className="text-white/70 text-xs">Vast information database</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl p-4 sm:p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
              <div className="grid grid-cols-1 gap-3">
                <button className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 hover:from-blue-500/30 hover:to-purple-600/30 text-white p-3 rounded-lg transition-all duration-200 text-left border border-white/10">
                  <p className="font-medium text-sm">Ask a Question</p>
                  <p className="text-white/70 text-xs">Get instant answers</p>
                </button>
                <button className="bg-gradient-to-r from-green-500/20 to-blue-600/20 hover:from-green-500/30 hover:to-blue-600/30 text-white p-3 rounded-lg transition-all duration-200 text-left border border-white/10">
                  <p className="font-medium text-sm">Generate Content</p>
                  <p className="text-white/70 text-xs">Create text, code, ideas</p>
                </button>
                <button className="bg-gradient-to-r from-purple-500/20 to-pink-600/20 hover:from-purple-500/30 hover:to-pink-600/30 text-white p-3 rounded-lg transition-all duration-200 text-left border border-white/10">
                  <p className="font-medium text-sm">Analyze Data</p>
                  <p className="text-white/70 text-xs">Process information</p>
                </button>
              </div>
            </div>

            {/* Status */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl p-4 sm:p-6">
              <h3 className="text-lg font-semibold text-white mb-4">System Status</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white/70 text-sm">Response Time</span>
                  <span className="text-green-400 text-sm font-medium">0.2s</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70 text-sm">Accuracy</span>
                  <span className="text-green-400 text-sm font-medium">99.8%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70 text-sm">Uptime</span>
                  <span className="text-green-400 text-sm font-medium">99.9%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-lg border-t border-white/10 mt-8 sm:mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="text-center">
            <p className="text-white/70 text-sm">
              © 2024 KITT AI. Advanced artificial intelligence at your service.
            </p>
            <p className="text-white/50 text-xs mt-2">
              Powered by next-generation neural networks
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;