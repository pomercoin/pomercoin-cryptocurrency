import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Rocket, Globe, Shield, Users } from 'lucide-react';

export function Roadmap() {
  const roadmapItems = [
    {
      quarter: "Q1 2025",
      title: "Launch & Community Building",
      icon: <Rocket className="text-orange-500" size={24} />,
      items: [
        "Initial Exchange Listing",
        "Community Growth Initiative",
        "Marketing Campaign Launch",
        "Website Launch & Social Media Presence"
      ]
    },
    {
      quarter: "Q2 2025",
      title: "Platform Development",
      icon: <Globe className="text-orange-500" size={24} />,
      items: [
        "PomerSwap Development",
        "Mobile Wallet Beta Release",
        "Strategic Partnerships",
        "Community Governance Implementation"
      ]
    },
    {
      quarter: "Q3 2025",
      title: "Ecosystem Expansion",
      icon: <Shield className="text-orange-500" size={24} />,
      items: [
        "NFT Marketplace Launch",
        "Cross-chain Bridge Development",
        "DeFi Features Integration",
        "Security Audit Completion"
      ]
    },
    {
      quarter: "Q4 2025",
      title: "Global Adoption",
      icon: <Users className="text-orange-500" size={24} />,
      items: [
        "Major Exchange Listings",
        "PomerVerse Metaverse Alpha",
        "Merchant Integration Program",
        "Global Marketing Campaign"
      ]
    }
  ];

  return (
    <section id="roadmap" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Roadmap</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our strategic plan for PomerCoin's growth and development through 2025
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {roadmapItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                {item.icon}
                <h3 className="text-xl font-semibold">{item.quarter}</h3>
              </div>
              <h4 className="text-lg font-medium text-orange-500 mb-4">{item.title}</h4>
              <ul className="space-y-2">
                {item.items.map((listItem, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2">
                    <Calendar className="text-orange-500 w-4 h-4 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">{listItem}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}