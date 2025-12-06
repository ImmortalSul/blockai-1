// Home.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Your existing icon components (kept as-is)
import Head from "../assets/icons/Head.jsx";
import LightningIcon from "../assets/icons/Lightning";
import NotisIcon from "../assets/icons/Notis";
import SearchIcon from "../assets/icons/Search";
import TrendIcon from "../assets/icons/Trend";
import FunnelIcon from "../assets/icons/Funnel";

export default function Home() {
  const navigate = useNavigate();
  const launch = () => navigate("/dashboard");

  const features = [
    {
      icon: <LightningIcon />,
      text: "Real-time data from Solana & beyond, decoded instantly.",
      label: "ON-CHAIN ANALYTICS",
    },
    {
      icon: <Head />,
      text: "The more the chain moves, the smarter BlockAI gets — forever.",
      label: "CONTINUOUS LEARNING",
    },
    {
      icon: <NotisIcon />,
      text: "Instant notifications on whale moves & smart-money activity.",
      label: "WALLET ALERTS",
    },
    {
      icon: <SearchIcon />,
      text: "Hidden gems, airdrops, and early DeFi plays — delivered first.",
      label: "ALPHA DISCOVERY",
    },
    {
      icon: <TrendIcon />,
      text: "AI-powered forecasts on tokens, trends, and market shifts.",
      label: "PREDICTIVE INSIGHTS",
    },
    {
      icon: <FunnelIcon />,
      text: "Cuts through misinformation and shills so you see only truth.",
      label: "NOISE FILTERING",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#1a0f22] via-[#22162a] to-[#071017] text-white font-inter">
      <Nav launch={launch} />
      <main className="max-w-[1200px] mx-auto">
        <Hero launch={launch} />
        <section className="mt-20 px-6 md:px-0">
          <h3 className="text-[#10e291] font-semibold text-center tracking-wide">The Full Power of BlockAI</h3>
          <FeaturesGrid features={features} />
        </section>

        <SeeItLive />
        <ThreeSteps />
        <DashboardWidgets/>
        <Community />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

/* -------------------------
   NAVBAR
   ------------------------- */
function Nav({ launch }) {
  return (
    <nav className="w-full flex items-center justify-between py-6 px-6 md:px-12 lg:px-20">
      <div className="flex items-center gap-3">
        <LogoSVG className="w-8 h-8" />
        <div className="text-white font-semibold text-lg">BLOCKAI</div>
      </div>

      <div className="hidden md:flex gap-8 text-sm text-gray-300">
        <a className="hover:text-white cursor-pointer">Home</a>
        <a className="hover:text-white cursor-pointer">Features</a>
        <a className="hover:text-white cursor-pointer">About</a>
        <a className="hover:text-white cursor-pointer">Community</a>
      </div>

      <div className="flex items-center gap-4">
        <button className="hidden md:inline-block px-4 py-2 rounded-md text-sm font-medium bg-transparent border border-white/10 hover:border-white/20">
          Sign Up
        </button>
        <button
          onClick={launch}
          className="px-4 py-2 rounded-md text-sm font-semibold bg-gradient-to-r from-[#00E3A5] to-[#6A5BFF] shadow-md"
        >
          Launch App
        </button>
      </div>
    </nav>
  );
}


/* -------------------------
   HERO with svg background elements
   ------------------------- */
function Hero({ launch }) {
  return (
    <section className="relative overflow-visible pt-8 pb-12">
      <img
  src="/sphere.svg"
  alt="Neural Sphere"
  className="pointer-events-none select-none opacity-80 
             w-[380px] md:w-[460px] 
             absolute left-0 top-10 
             -translate-x-1/3 
             z-0 animate-spin-slower"
/>

<img
  src="/sphere.svg"
  alt="Neural Sphere"
  className="pointer-events-none select-none opacity-60 
             w-[380px] md:w-[460px] 
             absolute right-0 top-20 
             translate-x-1/3 
             z-0 animate-spin-slower"
/>


      {/* TEXT CONTENT */}
      <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
          Talk to AI. Discover Alpha.
          <br />
          <span className="text-white">Track </span>
          <span className="text-[#8E5BFF]">Everything.</span>
        </h1>

        <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
          Real-time on-chain analytics, alpha discovery & wallet alerts – all decentralized.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="px-5 py-3 rounded-md border border-white/10 hover:border-white/20 text-sm">
            Sign Up
          </button>
          <button
            onClick={launch}
            className="px-6 py-3 rounded-md text-sm font-semibold bg-gradient-to-r from-[#00E3A5] to-[#6A5BFF]"
          >
            Launch App
          </button>
        </div>
      </div>

    </section>
  );
}

/* -------------------------
   FEATURES GRID (cards)
   ------------------------- */
function FeaturesGrid({ features }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-6 md:px-0">
      {features.map((f, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="bg-[#111325] rounded-xl p-6 border border-white/8 w-full shadow-sm">
            <div className="flex justify-center mb-4">{f.icon}</div>
            <p className="text-gray-300 text-sm text-center">{f.text}</p>
          </div>
          <div className="mt-3 font-semibold text-sm tracking-wide text-center">{f.label}</div>
        </div>
      ))}
    </div>
  );
}

/* -------------------------
   SEE IT LIVE 
   ------------------------- */
function SeeItLive() {
  return (
    <section className="mt-20 px-6 md:px-0">
      <h3 className="text-[#10e291] text-center text-xl font-bold mb-10">See It Live</h3>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-10">
        {/* Left Text */}
        <div className="flex-1 text-left text-gray-300 text-sm space-y-3">
          <p>Live chain intelligence, updated every second:</p>
          <p>Whale movements & smart-money flows</p>
          <p>New airdrops and hidden opportunities</p>
          <p>Instant wallet & token alerts</p>
          <div className="text-xs text-gray-400 mt-2">Your alpha advantage starts here.</div>
        </div>

        {/* Center Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/blur-img.png"
            alt="Live preview"
            className="w-full max-w-[520px] mx-auto rounded-xl shadow-lg"
          />
        </div>

        {/* Right Text */}
        <div className="flex-1 text-right text-gray-300 text-sm space-y-3">
          <p>BlockAI never sleeps.</p>
          <p>Whales moving. Airdrops dropping. Smart money loading.</p>
          <p>All in real time — all on-chain.</p>
        </div>
      </div>
    </section>
  );
}



/* -------------------------
   3 STEPS TO ALPHA
   ------------------------- */
// function StepCircle({ title }) {
//   return (
//     <div className="relative w-36 h-36 flex items-center justify-center rounded-full bg-gray-900/5 before:absolute before:inset-0 before:rounded-full before:border-4 before:border-dashed before:border-gradient-to-br before:from-[#14F195] before:to-[#9945FF]">
//       <span className="text-[#10e291] font-bold text-center px-2">{title}</span>
//     </div>
//   );
// }

function Arrow() {
  return (
    <div className="hidden md:flex text-[#10e291] text-4xl font-bold mx-16">→</div>
  );
}

function StepCircle({ title }) {
  // Split text into words and wrap in tspans
  const words = title.split(' ');
  const lines = [];
  let currentLine = '';

  words.forEach((word, index) => {
    if ((currentLine + ' ' + word).length <= 15) {
      currentLine += (currentLine ? ' ' : '') + word;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
    if (index === words.length - 1) lines.push(currentLine);
  });

  return (
    <svg
      width="280"
      height="268"
      viewBox="0 0 280 268"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="140"
        cy="134"
        r="120"
        fill="url(#bgGradient)"
        fillOpacity="0.05"
        stroke="url(#strokeGradient)"
        strokeLinecap="round"
        strokeDasharray="19 19"
      />

      {/* Centered Text with wrapping */}
      <text
        x="140"
        y="134"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#10e291"
        fontSize="18"
        fontWeight="bold"
      >
        {lines.map((line, i) => (
          <tspan
            key={i}
            x="140"
            dy={i === 0 ? '-10' : '22'} // adjust vertical spacing
          >
            {line}
          </tspan>
        ))}
      </text>

      <defs>
        <linearGradient
          id="bgGradient"
          x1="140"
          y1="14"
          x2="140"
          y2="254"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D9D9D9" />
          <stop offset="1" stopColor="#737373" />
        </linearGradient>

        <linearGradient
          id="strokeGradient"
          x1="140"
          y1="14"
          x2="140"
          y2="254"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#14F195" />
          <stop offset="1" stopColor="#9945FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function ThreeSteps() {
  return (
    <section className="mt-20 px-6 md:px-0 text-center">
      <h3 className="text-[#10e291] text-xl font-bold mb-10">3 Steps to Alpha</h3>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <StepCircle title="Connect Wallet" />
        <Arrow />
        <StepCircle title="AI scans chains in real-time" />
        <Arrow />
        <StepCircle title="Get Instant Alpha" />
      </div>
    </section>
  );
}

function DashboardWidgets() {
  return (
    <div className="flex gap-6 items-start text-white justify-center mt-20">

      {/* --- CARD 1: Profit Graph --- */}
      <div className="bg-[#111c24] p-5 rounded-2xl w-[500px] h-[300px] shadow-lg border border-white/5 flex flex-col items-center">
        <h3 className="text-sm opacity-70 mb-4">Your Profit</h3>

        {/* SVG Graph */}
        <svg
          width="106"
          height="106"
          viewBox="0 0 106 106"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mb-3"
        >
          <path
            d="M92.7572 35.3364C86.3526 35.3364 82.7748 41.6969 84.2324 46.4231L68.552 62.1476C67.2269 61.7501 65.2834 61.7501 63.9583 62.1476L52.695 50.8843C54.1968 46.1581 50.619 39.7534 44.1702 39.7534C37.7655 39.7534 34.1436 46.1139 35.6453 50.8843L15.5038 70.9817C10.7776 69.5241 4.41711 73.1018 4.41711 79.5065C4.41711 84.3652 8.39242 88.3405 13.2511 88.3405C19.6558 88.3405 23.2336 81.98 21.7759 77.2538L41.8733 57.1123C43.1984 57.5098 45.1419 57.5098 46.467 57.1123L57.7304 68.3756C56.2286 73.1018 59.8064 79.5065 66.2552 79.5065C72.6599 79.5065 76.2818 73.146 74.78 68.3756L90.5045 52.6953C95.2307 54.1529 101.591 50.5751 101.591 44.1704C101.591 39.3117 97.6159 35.3364 92.7572 35.3364Z"
            fill="url(#paint0_linear_405_176)"
          />
          <path
            d="M66.2552 39.7533L70.4072 30.6101L79.5062 26.5022L70.4072 22.3944L66.2552 13.2512L62.1916 22.3944L53.0042 26.5022L62.1916 30.6101L66.2552 39.7533ZM15.4596 48.5873L17.6681 39.7533L26.5021 37.5448L17.6681 35.3363L15.4596 26.5022L13.2511 35.3363L4.41711 37.5448L13.2511 39.7533L15.4596 48.5873Z"
            fill="url(#paint1_linear_405_176)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_405_176"
              x1="53.0042"
              y1="35.3364"
              x2="53.0042"
              y2="88.3405"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#14F195" />
              <stop offset="1" stopColor="#9945FF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_405_176"
              x1="41.9617"
              y1="13.2512"
              x2="41.9617"
              y2="48.5873"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#14F195" />
              <stop offset="1" stopColor="#9945FF" />
            </linearGradient>
          </defs>
        </svg>

        <p className="text-green-400 font-semibold">+24.5%</p>
      </div>

      {/* --- CARD 2: Trending Stats (slightly lower) --- */}
      <div className="bg-[#111c24] p-5 rounded-2xl w-[500px] h-[300px] shadow-lg border border-white/5 mt-40 flex flex-col justify-center">
        <h3 className="text-sm opacity-70 mb-4 text-center">Trending Status</h3>

        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-xs opacity-70">Labor</p>
            <p className="text-green-400">+4.5%</p>
          </div>
          <div>
            <p className="text-xs opacity-70">E-VP</p>
            <p className="text-green-400">+10%</p>
          </div>
          <div>
            <p className="text-xs opacity-70">Products</p>
            <p className="text-green-400">+8%</p>
          </div>
        </div>
      </div>

      {/* --- CARD 3: Chat Widget --- */}
      <div className="bg-[#111c24] p-5 rounded-2xl w-[500px] h-[300px] shadow-lg border border-white/5 flex flex-col justify-between">
        <h3 className="text-sm opacity-70 mb-3 text-center">Inbox</h3>

        <div className="flex flex-col gap-2 mb-3">
          <div className="bg-blue-600 text-white px-4 py-2 rounded-xl w-fit">
            That's impressive!
          </div>

          <div className="bg-blue-600 text-white px-4 py-2 rounded-xl w-fit">
            Truly sensational
          </div>
        </div>

        {/* Input box */}
        <div className="flex items-center bg-[#0d141c] px-3 py-2 rounded-xl border border-white/10">
          <input
            type="text"
            placeholder="Type a message..."
            className="bg-transparent outline-none text-sm w-full"
          />
          <span className="text-xs opacity-50">[icon]</span>
        </div>
      </div>

    </div>
  );
}
function Community() {
  return (
    <section className="mt-20 px-6 md:px-0 text-center">
      <h3 className="text-[#10e291] text-xl font-bold mb-10">
        Join the BlockAI Community
      </h3>

      <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-16">
        {/* Telegram Card */}
        <a
          href="https://t.me/yourtelegram"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center bg-[#0f1a22] border border-white/8 rounded-lg p-6 w-40 hover:bg-[#14232c] transition mb-4 md:mb-0"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 240 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="120" cy="120" r="120" fill="#14F195" />
            <path d="M95 120l60-30-30 60-30-30z" fill="white" />
          </svg>
          <span className="mt-3 text-white font-semibold">Telegram</span>
        </a>

        {/* Discord Card */}
        <a
          href="https://discord.com/invite/yourdiscord"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center bg-[#0f1a22] border border-white/8 rounded-lg p-6 w-40 hover:bg-[#14232c] transition mb-4 md:mb-0"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 71 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 25a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm31 0a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"
              fill="#7289DA"
            />
            <path
              d="M1 1c20 10 50 10 70 0v53c-20-10-50-10-70 0V1z"
              stroke="#7289DA"
              strokeWidth="2"
            />
          </svg>
          <span className="mt-3 text-white font-semibold">Discord</span>
        </a>

        {/* Web Dashboard Card */}
        <a
          href="https://yourwebdashboard.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center bg-[#0f1a22] border border-white/8 rounded-lg p-6 w-40 hover:bg-[#14232c] transition mb-4 md:mb-0"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" stroke="#14F195" strokeWidth="2" />
            <path d="M2 12h20M12 2v20M4 4l16 16M20 4L4 20" stroke="#14F195" strokeWidth="2" />
          </svg>
          <span className="mt-3 text-white font-semibold">Web Dashboard</span>
        </a>
      </div>
    </section>
  );
}


/* -------------------------
   FAQ accordion
   ------------------------- */
function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      q: "How does BlockAI discover trading alpha and potential market movements?",
      a: "BlockAI analyzes on-chain flows, smart-money behavior, and token metrics using AI-powered models to surface likely alpha opportunities.",
    },
    {
      q: "What major blockchains and assets are supported for tracking and analysis?",
      a: "We support major chains initially, expanding continuously. Reach out for the latest supported list.",
    },
    {
      q: "What is the XToken, and is it required to access all BlockAI features?",
      a: "XToken is our utility token for premium features; basic analytics are available without it. Premium features may require XToken.",
    },
  ];

  return (
    <section className="mt-20 px-6 md:px-0 max-w-3xl mx-auto">
      <h3 className="text-[#10e291] text-xl font-bold mb-6 text-center">Frequently Asked Questions</h3>
      <div className="space-y-3">
        {faqs.map((f, i) => {
          const open = openIndex === i;
          return (
            <div key={i} className="bg-[#0f1620] border border-white/6 rounded-lg p-4">
              <button
                onClick={() => setOpenIndex(open ? null : i)}
                className="w-full text-left flex justify-between items-center"
              >
                <span className="text-sm text-gray-200">{f.q}</span>
                <span className="text-sm text-gray-400">{open ? "−" : "+"}</span>
              </button>
              {open && <div className="mt-3 text-sm text-gray-300">{f.a}</div>}
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* -------------------------
   FOOTER
   ------------------------- */
function Footer() {
  return (
    <footer className="mt-28 border-t border-white/6 pt-10 pb-12 bg-gradient-to-t from-transparent to-[#051016]">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-wrap justify-between gap-8">
        {/* Logo */}
        <div className="flex items-start gap-4 w-full md:w-auto">
          <LogoSVG className="w-10 h-10" />
          <div>
            <div className="font-semibold text-white">BLOCKAI</div>
            <div className="text-xs text-gray-400 mt-1">Real-time on-chain intelligence.</div>
          </div>
        </div>

        {/* GENERAL */}
        <div className="text-xs text-gray-400 flex flex-col gap-2 w-40">
          <div className="font-semibold text-white">GENERAL</div>
          <div>App</div>
          <div>Docs</div>
        </div>

        {/* COMMUNITY */}
        <div className="text-xs text-gray-400 flex flex-col gap-2 w-40">
          <div className="font-semibold text-white">COMMUNITY</div>
          <div>X (TWITTER)</div>
          <div>DISCORD</div>
          <div>TELEGRAM</div>
        </div>

        {/* PRODUCT */}
        <div className="text-xs text-gray-400 flex flex-col gap-2 w-40">
          <div className="font-semibold text-white">PRODUCT</div>
          <div>Live Dashboard</div>
          <div>API / Integrations</div>
        </div>

        {/* RESOURCES */}
        <div className="text-xs text-gray-400 flex flex-col gap-2 w-40">
          <div className="font-semibold text-white">RESOURCES</div>
          <div>WHITEPAPER</div>
          <div>API DOCUMENTATION</div>
          <div>SECURITY AUDITS</div>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="max-w-6xl mx-auto px-20 md:px-12 mt-8 text-center text-xs text-gray-500">
        © 2025 BLOCKAI. All rights reserved.
      </div>
    </footer>
  );
}


/* -------------------------
   SMALL REUSABLE SVGs & components
   ------------------------- */

function LogoSVG({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#00E3A5" />
          <stop offset="1" stopColor="#6A5BFF" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="10" fill="#0e1720" />
      <g transform="translate(6,6)">
        <path d="M6 0 L18 6 L18 18 L6 24 L-6 18 L-6 6 Z" transform="translate(12,0)" fill="url(#g1)" opacity="0.95" />
      </g>
    </svg>
  );
}
/* stylized geometric globe (network) */
function GeoGlobeSVG({ size = 240, stroke = "#6b5aff88" }) {
  const lines = [];
  for (let i = 0; i < 10; i++) {
    const r = 90 + i * 4;
    lines.push(
      <circle key={i} cx={size / 2} cy={size / 2} r={r} fill="none" stroke={stroke} strokeWidth="0.8" />
    );
  }

  // some connecting lines
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden>
      <g transform={`translate(0,0)`} stroke={stroke} strokeWidth="0.8" fill="none">
        {lines}
        <path d={`M${size * 0.18} ${size * 0.5} Q ${size * 0.5} ${size * 0.1}, ${size * 0.82} ${size * 0.5}`} stroke={stroke} />
        <path d={`M${size * 0.18} ${size * 0.62} Q ${size * 0.5} ${size * 0.9}, ${size * 0.82} ${size * 0.62}`} stroke={stroke} />
        <g fill={stroke}>
          <circle cx={size * 0.24} cy={size * 0.42} r="2.6" />
          <circle cx={size * 0.76} cy={size * 0.58} r="2.2" />
          <circle cx={size * 0.6} cy={size * 0.32} r="1.8" />
        </g>
      </g>
    </svg>
  );
}

/* laptop mock — simplified but styled similar to image */
// function LaptopMockSVG() {
//   return (
//     <svg width="260" height="160" viewBox="0 0 260 160" xmlns="" aria-hidden>
//       <defs>
//         <linearGradient id="lgrad" x1="0" x2="1">
//           <stop offset="0" stopColor="#2b2e36" />
//           <stop offset="1" stopColor="#121418" />
//         </linearGradient>
//       </defs>
//       <rect x="6" y="8" width="248" height="140" rx="10" fill="url(#lgrad)" stroke="#ffffff10" />
//       {/* screen area */}
//       <rect x="18" y="20" width="224" height="96" rx="6" fill="#0b1016" />
//       {/* fake UI boxes */}
//       <rect x="28" y="30" width="160" height="22" rx="8" fill="#1c2430" />
//       <rect x="28" y="60" width="180" height="26" rx="8" fill="#151824" />
//       <rect x="28" y="94" width="100" height="12" rx="6" fill="#0f1720" />
//       {/* small gradient bubble */}
//       <ellipse cx="180" cy="45" rx="28" ry="14" fill="#6A5BFF" opacity="0.18" />
//       <ellipse cx="200" cy="78" rx="22" ry="10" fill="#00E3A5" opacity="0.08" />
//       {/* base */}
//       <rect x="0" y="148" width="260" height="6" rx="3" fill="#0d1116" />
//     </svg>
//   );
// }


