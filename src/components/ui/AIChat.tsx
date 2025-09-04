import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrainCircuit, User, Send, Mic, Image, FileText } from 'lucide-react';

type Message = {
  id: number;
  text: string;
  sender: 'ai' | 'user';
  timestamp: Date;
  type?: 'text' | 'image' | 'file';
};

const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const conversation: Omit<Message, 'id' | 'timestamp'>[] = [
    {
      text: "Olá! Sou a Sarah, sua assistente de IA. Como posso ajudar você hoje?",
      sender: 'ai'
    },
    {
      text: "Preciso automatizar o atendimento da minha empresa. Vocês podem ajudar?",
      sender: 'user'
    },
    {
      text: "Claro! Posso criar um sistema completo de atendimento automatizado. Vou analisar suas necessidades e propor a melhor solução.",
      sender: 'ai'
    },
    {
      text: "Que tipo de análise vocês fazem?",
      sender: 'user'
    },
    {
      text: "Analiso o volume de atendimentos, tipos de dúvidas mais comuns, horários de pico e integro com seus sistemas existentes. Posso mostrar um exemplo?",
      sender: 'ai'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep < conversation.length) {
        const newMessage = {
          ...conversation[currentStep],
          id: Date.now(),
          timestamp: new Date()
        };

        if (newMessage.sender === 'ai') {
          setIsTyping(true);
          setTimeout(() => {
            setIsTyping(false);
            setMessages(prev => [...prev, newMessage]);
            setCurrentStep(prev => prev + 1);
          }, 1500);
        } else {
          setMessages(prev => [...prev, newMessage]);
          setCurrentStep(prev => prev + 1);
        }
      } else {
        // Reset conversation
        setTimeout(() => {
          setMessages([]);
          setCurrentStep(0);
        }, 3000);
      }
    }, currentStep === 0 ? 1000 : 2500);

    return () => clearTimeout(timer);
  }, [currentStep, conversation.length]);

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-500/20 to-accent-500/20 rounded-3xl blur-xl opacity-75" />
      <div className="relative bg-dark-800/50 backdrop-blur-sm rounded-3xl border border-dark-700/50 hover:border-primary-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/10 overflow-hidden">
        {/* Chat Header */}
        <div className="bg-dark-900/50 border-b border-dark-700/50 p-6">
          <div className="flex items-center gap-4">
            <motion.div 
              className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <BrainCircuit className="w-6 h-6 text-white" />
            </motion.div>
            <div>
              <h4 className="font-bold text-lg">Sarah - Assistente IA</h4>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <p className="text-sm text-white/60">Online • Automatik Labs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="h-[400px] overflow-y-auto p-6 space-y-4">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] ${
                  message.sender === 'ai'
                    ? 'bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20'
                    : 'bg-dark-700/50 border border-dark-600/30'
                } p-4 rounded-2xl backdrop-blur-sm`}>
                  <div className="flex items-start gap-3">
                    {message.sender === 'ai' && (
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0">
                        <BrainCircuit className="w-4 h-4 text-white" />
                      </div>
                    )}
                    {message.sender === 'user' && (
                      <div className="w-8 h-8 rounded-full bg-dark-600 flex items-center justify-center flex-shrink-0">
                        <User className="w-4 h-4 text-white/70" />
                      </div>
                    )}
                    <div className="flex-1">
                      <p className="text-white/90 leading-relaxed">{message.text}</p>
                      <p className="text-xs text-white/50 mt-2">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Typing indicator */}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex justify-start"
            >
              <div className="bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20 p-4 rounded-2xl backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                    <BrainCircuit className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex gap-1">
                    <motion.div 
                      className="w-2 h-2 rounded-full bg-primary-400"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                    />
                    <motion.div 
                      className="w-2 h-2 rounded-full bg-primary-400"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                    />
                    <motion.div 
                      className="w-2 h-2 rounded-full bg-primary-400"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Chat Input */}
        <div className="border-t border-dark-700/50 p-6">
          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Digite sua mensagem..."
                className="w-full bg-dark-700/50 border border-dark-600/50 rounded-xl px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-primary-500/50 transition-colors"
                disabled
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                <Mic className="w-4 h-4 text-white/40" />
                <Image className="w-4 h-4 text-white/40" />
                <FileText className="w-4 h-4 text-white/40" />
              </div>
            </div>
            <button className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center hover:scale-105 transition-transform">
              <Send className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChat;