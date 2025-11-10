"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.25 }}
            className="bg-white text-gray-800 rounded-2xl shadow-2xl p-4 w-80 h-96 border border-gray-200 flex flex-col"
          >
            <div className="flex justify-between items-center border-b pb-2 mb-2">
              <h3 className="font-semibold text-lg">AI Chatbot</h3>
              <button
                onClick={toggleChat}
                className="text-gray-500 hover:text-gray-700 transition"
              >
                ✖
              </button>
            </div>
            <div className="flex-1 overflow-y-auto text-sm text-gray-600">
              <p className="italic mt-4 text-center text-gray-400">
                👋 Zdravo! Chatbot uskoro dolazi.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={toggleChat}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-[#3CB878] text-white p-4 rounded-full shadow-lg hover:bg-[#34a46b] transition"
      >
        💬
      </motion.button>
    </div>
  );
}
