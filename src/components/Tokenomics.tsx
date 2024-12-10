import React from 'react';
import { motion } from 'framer-motion';
import { Coins, Flame, PieChart, Wallet, Building, Heart } from 'lucide-react';
import CountUp from 'react-countup';

export function Tokenomics() {
  const tokenInfo = [
    {
      icon: <Coins className="text-orange-500" size={32} />,
      label: "Total Supply",
      value: "1,000,000,000,000",
      suffix: " POMR"
    },
    {
      icon: <Flame className="text-orange-500" size={32} />,
      label: "Burned Tokens",
      value: "400,000,000,000",
      suffix: " POMR"
    },
    {
      icon: <Wallet className="text-orange-500" size={32} />,
      label: "Circulating Supply",
      value: "600,000,000,000",
      suffix: " POMR"
    }
  ];

  const distribution = [
    { label: "Liquidity Pool", percentage: 40, color: "from-orange-500 to-orange-600" },
    { label: "Community Rewards", percentage: 25, color: "from-pink-500 to-pink-600" },
    { label: "Development", percentage: 15, color: "from-purple-500 to-purple-600" },
    { label: "Marketing", percentage: 12, color: "from-blue-500 to-blue-600" },
    { label: "Team", percentage: 8, color: "from-green-500 to-green-600" }
  ];

  return (
    <section id="tokenomics" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Tokenomics</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            PomerCoin (POMR) is designed with a sustainable tokenomics model to ensure long-term growth and community benefits
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {tokenInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-xl text-center"
            >
              <div className="flex justify-center mb-4">{info.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{info.label}</h3>
              <p className="text-2xl font-bold text-orange-500">
                <CountUp
                  end={parseInt(info.value.replace(/,/g, ''))}
                  duration={2.5}
                  separator=","
                />
                {info.suffix}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Token Distribution</h3>
            <div className="space-y-4">
              {distribution.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{item.label}</span>
                    <span className="font-medium">{item.percentage}%</span>
                  </div>
                  <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className={`h-full bg-gradient-to-r ${item.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 p-8 rounded-xl"
          >
            <h3 className="text-2xl font-bold mb-6">Token Features</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Building className="text-orange-500 w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-semibold">Built on Ethereum</h4>
                  <p className="text-gray-600">ERC-20 token with smart contract security</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Heart className="text-orange-500 w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-semibold">Community Driven</h4>
                  <p className="text-gray-600">Governance and voting rights for holders</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <PieChart className="text-orange-500 w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-semibold">Deflationary Model</h4>
                  <p className="text-gray-600">2% burn on each transaction</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}