import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Globe, MessageCircle, Github, MessagesSquare } from 'lucide-react';

export function Community() {
  const socialLinks = [
    {
      icon: <Twitter size={24} />,
      label: "Twitter",
      href: "https://twitter.com/PomerCoin",
      color: "bg-blue-500 hover:bg-blue-600"
    },
    {
      icon: <Globe size={24} />,
      label: "Website",
      href: "https://pomercoin.com",
      color: "bg-orange-500 hover:bg-orange-600"
    },
    {
      icon: <MessageCircle size={24} />,
      label: "Telegram",
      href: "https://t.me/PomerCoin",
      color: "bg-sky-500 hover:bg-sky-600"
    },
    {
      icon: <MessagesSquare size={24} />,
      label: "Discord",
      href: "https://discord.gg/pomercoin",
      color: "bg-indigo-500 hover:bg-indigo-600"
    },
    {
      icon: <Github size={24} />,
      label: "GitHub",
      href: "https://github.com/PomerCoin",
      color: "bg-gray-800 hover:bg-gray-900"
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Join Our Community</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Be part of the PomerCoin revolution! Join our vibrant community across various platforms 
            and stay updated with the latest news and developments.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${link.color} rounded-lg p-4 text-white flex flex-col items-center justify-center gap-3 transition-colors`}
            >
              {link.icon}
              <span className="font-medium">{link.label}</span>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
            <a href="#tokenomics" className="text-gray-400 hover:text-white transition-colors">Tokenomics</a>
            <a href="#roadmap" className="text-gray-400 hover:text-white transition-colors">Roadmap</a>
            <a href="#how-to-buy" className="text-gray-400 hover:text-white transition-colors">How to Buy</a>
            <a href="/whitepaper.pdf" className="text-gray-400 hover:text-white transition-colors">Whitepaper</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}