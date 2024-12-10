import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Heart, Trophy, Sparkles } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: <Heart className="text-orange-500" size={24} />,
      title: "Community First",
      description: "Built by Pomeranian lovers, for Pomeranian lovers. Our community drives every decision."
    },
    {
      icon: <Trophy className="text-orange-500" size={24} />,
      title: "Meme Power",
      description: "Combining the cuteness of Pomeranians with the power of blockchain technology."
    },
    {
      icon: <Sparkles className="text-orange-500" size={24} />,
      title: "Real Utility",
      description: "More than just a meme - PomerCoin powers a whole ecosystem of Pomeranian-themed DeFi products."
    },
    {
      icon: <Rocket className="text-orange-500" size={24} />,
      title: "Growing Ecosystem",
      description: "From NFTs to decentralized applications, we're building a complete Pomeranian-powered future."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              The Most Adorable 
              <span className="block text-orange-500">Cryptocurrency Ever</span>
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              PomerCoin isn't just another meme coin – it's a movement inspired by the 
              internet's favorite fluffballs. Born from the idea that cryptocurrency 
              should be as fun and lovable as a Pomeranian puppy, POMR combines the 
              best of both worlds: cutting-edge blockchain technology and the 
              irresistible charm of these tiny, majestic creatures.
            </p>
            <p className="text-gray-600 text-lg mb-8">
              Our mission is to create a vibrant ecosystem where Pomeranian 
              enthusiasts and crypto lovers unite. With features like PomerSwap, 
              PomerNFTs, and our upcoming PomerVerse metaverse, we're building more 
              than just a currency – we're creating a whole new world of fluffy 
              possibilities!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-orange-50 p-6 rounded-xl"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
