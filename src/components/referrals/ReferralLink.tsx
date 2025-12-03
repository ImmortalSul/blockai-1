"use client";

import { ReferralCard } from "./ReferralCard";
import { Copy, Check, Twitter, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ReferralLink() {
  const [copied, setCopied] = useState(false);
  const referralLink = "https://blockai.io/ref/blockai_trader";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-6">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
      >
        <ReferralCard gradientBorder className="p-8 md:p-16 relative overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#9945FF]/5 via-[#14F195]/5 to-[#9945FF]/5 -z-10" />
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#9945FF]/20 rounded-full blur-[100px]" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#14F195]/20 rounded-full blur-[100px]" />
          
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Share & Earn
              </h2>
              <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
                Invite friends to <span className="text-white font-bold">BLOCK AI</span> and earn up to <span className="text-[#9945FF] font-bold">20% commission</span> across 3 levels of your network.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-center justify-center max-w-2xl mx-auto">
              <div className="relative w-full group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#9945FF] to-[#14F195] rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative flex items-center bg-[#0d0f18] border border-white/10 rounded-xl p-2 transition-colors group-hover:border-white/20">
                  <div className="pl-4 pr-2 text-gray-400 select-none">
                    <span className="text-[#9945FF]">$</span>
                  </div>
                  <input 
                    type="text" 
                    readOnly 
                    value={referralLink}
                    className="w-full bg-transparent border-none py-3 px-2 text-white font-mono text-sm md:text-base focus:outline-none focus:ring-0"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={copyToClipboard}
                    className="px-6 py-3 bg-white text-black rounded-lg font-bold flex items-center gap-2 hover:bg-gray-200 transition-colors shadow-lg shadow-white/10"
                  >
                    {copied ? <Check size={18} className="text-green-600" /> : <Copy size={18} />}
                    <span className="hidden md:inline">Copy</span>
                  </motion.button>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-6">
              <motion.button whileHover={{ y: -4 }} className="p-4 bg-[#1DA1F2]/10 text-[#1DA1F2] rounded-2xl hover:bg-[#1DA1F2]/20 transition-all border border-[#1DA1F2]/20 hover:shadow-[0_0_20px_rgba(29,161,242,0.2)]">
                <Twitter size={24} />
              </motion.button>
              <motion.button whileHover={{ y: -4 }} className="p-4 bg-[#0088cc]/10 text-[#0088cc] rounded-2xl hover:bg-[#0088cc]/20 transition-all border border-[#0088cc]/20 hover:shadow-[0_0_20px_rgba(0,136,204,0.2)]">
                <Send size={24} />
              </motion.button>
              <motion.button whileHover={{ y: -4 }} className="p-4 bg-[#5865F2]/10 text-[#5865F2] rounded-2xl hover:bg-[#5865F2]/20 transition-all border border-[#5865F2]/20 hover:shadow-[0_0_20px_rgba(88,101,242,0.2)]">
                <MessageCircle size={24} />
              </motion.button>
            </div>
          </div>
        </ReferralCard>
      </motion.div>
    </section>
  );
}
