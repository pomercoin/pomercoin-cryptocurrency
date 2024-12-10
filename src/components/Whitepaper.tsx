import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Shield, 
  Coins, 
  Users, 
  Globe, 
  Lock,
  BarChart3,
  Wallet
} from 'lucide-react';

export function Whitepaper() {
  const sections = [
    {
      title: "Introduction",
      icon: <Rocket className="text-orange-500" size={24} />,
      content: `PomerCoin (POMR) represents a revolutionary advancement in the cryptocurrency space, 
      combining the viral appeal of meme coins with genuine utility and technological innovation. 
      Built on the Ethereum blockchain, PomerCoin aims to create an inclusive ecosystem that rewards 
      holders while contributing to the broader cryptocurrency community.`
    },
    {
      title: "Technology",
      icon: <Shield className="text-orange-500" size={24} />,
      content: `Our smart contract is built on the ERC-20 standard with additional security features:
      • Advanced security protocols
      • Automated liquidity generation
      • Anti-whale mechanisms
      • Multi-signature wallet implementation
      • Regular security audits`
    },
    {
      title: "Tokenomics",
      icon: <Coins className="text-orange-500" size={24} />,
      content: `Total Supply: 1,000,000,000,000 POMR
      • 40% Liquidity Pool
      • 25% Community Rewards
      • 15% Development
      • 12% Marketing
      • 8% Team (locked for 2 years)
      
      Transaction Fee Structure:
      • 2% Automatic burn
      • 2% Redistribution to holders
      • 1% Development fund`
    },
    {
      title: "Community Governance",
      icon: <Users className="text-orange-500" size={24} />,
      content: `PomerCoin implements a DAO structure where token holders can:
      • Vote on project proposals
      • Suggest new features
      • Participate in key decisions
      • Influence development priorities`
    },
    {
      title: "Ecosystem",
      icon: <Globe className="text-orange-500" size={24} />,
      content: `The PomerCoin ecosystem includes:
      • PomerSwap DEX
      • NFT Marketplace
      • Staking Platform
      • Cross-chain Bridge
      • Mobile Wallet
      • PomerVerse Metaverse`
    },
    {
      title: "Security",
      icon: <Lock className="text-orange-500" size={24} />,
      content: `Security measures include:
      • Multi-layered authentication
      • Regular smart contract audits
      • Bug bounty program
      • Real-time monitoring
      • Emergency pause functionality`
    },
    {
      title: "Roadmap",
      icon: <BarChart3 className="text-orange-500" size={24} />,
      content: `Our development roadmap spans from 2024 to 2025:
      • Q1 2024: Initial Development
      • Q2 2024: Platform Launch
      • Q3 2024: Ecosystem Expansion
      • Q4 2024: Cross-chain Integration
      • 2025: Global Adoption Phase`
    },
    {
      title: "How to Participate",
      icon: <Wallet className="text-orange-500" size={24} />,
      content: `Join the PomerCoin ecosystem:
      • Purchase POMR tokens
      • Participate in governance
      • Stake tokens for rewards
      • Join community events
      • Contribute to development`
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            PomerCoin
            <span className="block bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
              Whitepaper
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technical documentation and comprehensive overview of the PomerCoin ecosystem
          </p>
        </motion.div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                {section.icon}
                <h2 className="text-2xl font-bold">{section.title}</h2>
              </div>
              <div className="prose prose-orange max-w-none">
                <p className="text-gray-600 whitespace-pre-line">{section.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}