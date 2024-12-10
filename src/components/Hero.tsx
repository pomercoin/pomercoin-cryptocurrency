import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, TrendingUp, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface HeroProps {
  onBuyClick: () => void;
}

export function Hero({ onBuyClick }: HeroProps) {
  const navigate = useNavigate();

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Welcome to the
              <span className="block bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
                PomerCoin Revolution
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              The most adorable and powerful meme coin in the crypto universe. 
              Join our growing community of Pomeranian lovers and crypto enthusiasts!
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onBuyClick}
                className="bg-gradient-to-r from-orange-500 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow"
              >
                Buy PomerCoin
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/whitepaper')}
                className="border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-orange-50 transition-colors"
              >
                Read Whitepaper
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-600 rounded-full blur-3xl opacity-20" />
            <img
              src="/pomer-coin.png"
              alt="PomerCoin"
              className="w-full max-w-[500px] mx-auto relative z-10"
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {[
            {
              icon: <Rocket className="text-orange-500" size={32} />,
              title: "Fast Transactions",
              description: "Lightning-fast transfers with minimal fees"
            },
            {
              icon: <Shield className="text-orange-500" size={32} />,
              title: "Secure Platform",
              description: "Built on advanced blockchain technology"
            },
            {
              icon: <TrendingUp className="text-orange-500" size={32} />,
              title: "Growing Community",
              description: "Join thousands of PomerCoin holders worldwide"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-orange-100"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}