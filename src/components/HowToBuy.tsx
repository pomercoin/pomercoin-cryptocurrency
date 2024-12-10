import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, ArrowRight, ShoppingCart, Shield } from 'lucide-react';

export function HowToBuy() {
  const steps = [
    {
      icon: <Wallet className="text-orange-500" size={32} />,
      title: "Create a Wallet",
      description: "Download and install MetaMask or Trust Wallet from your app store.",
      link: "https://metamask.io/download/",
      linkText: "Get MetaMask"
    },
    {
      icon: <ShoppingCart className="text-orange-500" size={32} />,
      title: "Buy ETH",
      description: "Purchase Ethereum (ETH) from your preferred exchange.",
      link: "https://www.coinbase.com/",
      linkText: "Buy on Coinbase"
    },
    {
      icon: <ArrowRight className="text-orange-500" size={32} />,
      title: "Connect to DEX",
      description: "Visit Uniswap and connect your wallet.",
      link: "https://app.uniswap.org/",
      linkText: "Open Uniswap"
    },
    {
      icon: <Shield className="text-orange-500" size={32} />,
      title: "Swap for POMR",
      description: "Enter the PomerCoin contract address and swap your ETH for POMR.",
      contractAddress: "0x123...abc",
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            How to Buy
            <span className="block bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
              PomerCoin
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Follow these simple steps to join the PomerCoin community and own your share of the most adorable cryptocurrency!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="mb-6">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-600 mb-6">{step.description}</p>
              {'link' in step ? (
                <a
                  href={step.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-orange-500 to-pink-600 text-white px-6 py-2 rounded-full font-semibold hover:opacity-90 transition-opacity"
                >
                  {step.linkText}
                </a>
              ) : (
                <div className="flex items-center gap-2 bg-gray-100 p-3 rounded-lg">
                  <span className="text-sm font-mono text-gray-600">{step.contractAddress}</span>
                  <button
                    onClick={() => navigator.clipboard.writeText(step.contractAddress)}
                    className="text-orange-500 hover:text-orange-600"
                  >
                    Copy
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}