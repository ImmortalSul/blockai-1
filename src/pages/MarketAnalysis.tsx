"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Sparkles, User, LogOut, AlertTriangle, Activity, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

// Mock chart data
const chartData = [
  { time: "00:00", price: 1.15 },
  { time: "04:00", price: 1.18 },
  { time: "08:00", price: 1.12 },
  { time: "12:00", price: 1.25 },
  { time: "16:00", price: 1.20 },
  { time: "20:00", price: 1.35 },
  { time: "24:00", price: 1.42 },
];

// Trending tokens data
const trendingTokens = [
  {
    symbol: "SUI",
    change: "+15%",
    signal: "High Smart Money Inflow",
    color: "#10B981",
    bgGradient: "from-emerald-500/20 to-emerald-500/5",
  },
  {
    symbol: "SOL",
    change: "+5.7%",
    signal: "High Smart Money Inflow",
    color: "#06B6D4",
    bgGradient: "from-cyan-500/20 to-cyan-500/5",
  },
  {
    symbol: "ETH",
    change: "+7%",
    signal: "High Smart Money Inflow",
    color: "#6B7280",
    bgGradient: "from-gray-500/20 to-gray-500/5",
  },
];

const quickActions = ["Macro Report", "Whale Movement", "Technical Analysis"];

export function MarketAnalysisPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [aiPrompt, setAiPrompt] = useState("");
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [selectedToken, setSelectedToken] = useState(trendingTokens[0]);

  const handleLogout = () => {
    window.location.href = "/home";
  };

  return (
    <div className="min-h-screen bg-[#0d0f18] text-white">
      {/* Gradient accent on left */}
      <div className="fixed left-0 top-0 w-1 h-full bg-gradient-to-b from-emerald-500 via-cyan-500 to-emerald-500/50 opacity-50" />
      
      <div className="p-6 lg:p-10">
        {/* Top Bar */}
        <div className="flex items-center justify-between gap-6 mb-10">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-3xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#16181f] border border-cyan-500/30 rounded-lg pl-12 pr-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 transition-all"
            />
          </div>

          {/* Profile Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="relative h-11 w-11 rounded-full p-0 border border-white/10 hover:border-white/20"
              >
                <Avatar className="h-11 w-11">
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-[#16181f] text-gray-400">
                    <User className="h-5 w-5" />
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 bg-[#16181f] border-white/10" align="end">
              <DropdownMenuItem
                onClick={handleLogout}
                className="cursor-pointer text-gray-300 hover:text-white focus:text-white focus:bg-white/5"
              >
                <LogOut className="mr-3 h-4 w-4" />
                <span>Log Out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Market Intelligence Section */}
        <section className="mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl lg:text-4xl font-bold text-white mb-6"
          >
            Market Intelligence
          </motion.h1>

          {/* AI Prompt Input */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="relative mb-6"
          >
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400">
              <Sparkles size={18} />
            </div>
            <input
              type="text"
              placeholder="Ask AI to generate a market report, analyze a trend, or find alpha..."
              value={aiPrompt}
              onChange={(e) => setAiPrompt(e.target.value)}
              className="w-full bg-[#16181f]/50 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all"
            />
          </motion.div>

          {/* Quick Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-3"
          >
            {quickActions.map((action) => (
              <button
                key={action}
                onClick={() => setActiveFilter(activeFilter === action ? null : action)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all ${
                  activeFilter === action
                    ? "bg-white text-[#0d0f18] border-white"
                    : "bg-transparent text-gray-300 border-white/20 hover:border-white/40 hover:text-white"
                }`}
              >
                {action}
              </button>
            ))}
          </motion.div>
        </section>

        {/* Potential Alpha / Trending Section */}
        <section className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl lg:text-3xl font-bold text-white mb-6"
          >
            Potential Alpha / Trending
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingTokens.map((token, index) => (
              <motion.div
                key={token.symbol}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15 }}
                whileHover={{ y: -6, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedToken(token)}
                className={`relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br ${token.bgGradient} backdrop-blur-sm cursor-pointer hover:border-white/30 ${
                  selectedToken.symbol === token.symbol ? "ring-2 ring-offset-2 ring-offset-[#0d0f18]" : ""
                }`}
                style={{ 
                  borderLeftWidth: "3px", 
                  borderLeftColor: token.color,
                  boxShadow: selectedToken.symbol === token.symbol ? `0 0 20px ${token.color}40` : undefined
                }}
              >
                <div className="p-6">
                  {/* Token Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-bold text-white">{token.symbol}</span>
                    <span 
                      className="text-sm font-bold px-2 py-1 rounded"
                      style={{ color: token.color, backgroundColor: `${token.color}20` }}
                    >
                      {token.change}
                    </span>
                  </div>

                  {/* Signal */}
                  <p className="text-sm text-gray-400 mb-4">{token.signal}</p>

                  {/* View Chart Button */}
                  <button
                    className="px-4 py-2 rounded-lg text-xs font-bold text-white transition-all hover:opacity-80"
                    style={{ backgroundColor: token.color }}
                  >
                    View Chart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Chart Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#16181f] to-[#0d0f18] overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-4">
            {/* Chart Area */}
            <div className="lg:col-span-3 p-6 lg:p-8">
              <div className="h-[300px] lg:h-[350px] relative">
                {/* Glow effect behind chart */}
                <div 
                  className="absolute inset-0 opacity-30 blur-3xl"
                  style={{ 
                    background: `radial-gradient(ellipse at center, ${selectedToken.color}40 0%, transparent 70%)` 
                  }}
                />
                
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={selectedToken.color} stopOpacity={0.4} />
                        <stop offset="100%" stopColor={selectedToken.color} stopOpacity={0} />
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    <XAxis 
                      dataKey="time" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: "#6B7280", fontSize: 12 }}
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: "#6B7280", fontSize: 12 }}
                      tickFormatter={(value) => `$${value.toFixed(2)}`}
                      domain={['auto', 'auto']}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(22, 24, 31, 0.95)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: "12px",
                        backdropFilter: "blur(8px)",
                      }}
                      itemStyle={{ color: "#fff" }}
                      labelStyle={{ color: "#9CA3AF" }}
                      formatter={(value: number) => [`$${value.toFixed(2)}`, "Price"]}
                    />
                    <Area
                      type="monotone"
                      dataKey="price"
                      stroke={selectedToken.color}
                      strokeWidth={3}
                      fill="url(#chartGradient)"
                      filter="url(#glow)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Stats Panel */}
            <div className="lg:col-span-1 p-6 lg:p-8 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 border-t lg:border-t-0 lg:border-l border-white/10">
              <div className="flex flex-col justify-center h-full space-y-8">
                {/* Risk Level */}
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-amber-500/10 text-amber-500">
                    <AlertTriangle size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Risk Level</p>
                    <p className="text-xl font-bold text-white">Medium</p>
                  </div>
                </div>

                {/* Sentiment */}
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500">
                    <Activity size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Sentiment</p>
                    <p className="text-xl font-bold text-emerald-400">Bullish</p>
                  </div>
                </div>

                {/* Support */}
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-500">
                    <DollarSign size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Support</p>
                    <p className="text-xl font-bold text-white">$1.20</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

export default MarketAnalysisPage;
