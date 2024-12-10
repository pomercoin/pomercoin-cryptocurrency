import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, ArrowRight, ShoppingCart, Shield, X } from 'lucide-react';

interface BuyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BuyModal({ isOpen, onClose }: BuyModalProps) {
  if (!isOpen) return null;

  const steps = [
    {
      icon: <Wallet className="text-orange-500" size={24} />,
      title: "Connect Wallet",
      description: "Connect your MetaMask or Trust Wallet",
      action: "Connect",
      onClick: () => window.open('https://metamask.io/download/', '_blank')
    },
    {
      icon: <ShoppingCart className="text-orange-500" size={24} />,
      title: "Buy ETH",
      description: "Purchase ETH from your preferred exchange",
      action: "Buy ETH",
      onClick: () => window.open('https://www.coinbase.com/', '_blank')
    },
    {
      icon: <ArrowRight className="text-orange-500" size={24} />,
      title: "Swap ETH for POMR",
      description: "Swap your ETH for PomerCoin (POMR)",
      action: "Swap Now",
      onClick: () => window.open('https://app.uniswap.org/', '_blank')
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-2xl p-6 max-w-lg w-full mx-4 relative"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold mb-6">Buy PomerCoin (POMR)</h2>

        <div className="space-y-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 p-4 rounded-lg"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1">{step.icon}</div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">{step.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{step.description}</p>
                  <button
                    onClick={step.onClick}
                    className="bg-gradient-to-r from-orange-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
                  >
                    {step.action}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Shield size={16} />
            <p>All transactions are secure and encrypted</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}