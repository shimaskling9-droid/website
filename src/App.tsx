import React, { useState } from 'react';
import { Twitter, MessageCircle, BarChart3, Sparkles, Shield, Brain, TrendingUp, Zap } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'whitepaper' | 'guide' | 'trading'>('home');

  const socialLinks = {
    twitter: 'https://x.com/KittySpinCTO',
    telegram: 'https://t.me/kittyspin_cto',
    dexscreener: 'https://dexscreener.com/solana/ayprnm865sjhbzvcmg6mhge3hducx9jv8jfbftqe9prv'
  };

  const SocialButtons = () => (
    <div className="flex gap-4 flex-wrap md:flex-nowrap justify-center md:justify-start">
      <a
        href={socialLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105 shadow-lg whitespace-nowrap"
      >
        <Twitter size={20} />
        Twitter
      </a>
      <a
        href={socialLinks.telegram}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105 shadow-lg whitespace-nowrap"
      >
        <MessageCircle size={20} />
        Telegram
      </a>
      <a
        href={socialLinks.dexscreener}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105 shadow-lg whitespace-nowrap"
      >
        <BarChart3 size={20} />
        Dexscreener
      </a>
    </div>
  );

  const HomePage = () => (
    <div className="space-y-16">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[rgb(88,28,135)] via-[rgb(0,22,88)] to-[rgb(88,28,135)] p-4 sm:p-8">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10">
          <img
            src="/banner6.jpg"
            alt="Kitt AI - Cybercats in Alley"
            className="w-full h-auto max-h-72 sm:max-h-96 object-contain rounded-2xl mb-6 sm:mb-8"
          />
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <img src="/Pixel.jpg" alt="Kitt AI Icon" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full" />
              <h1 className="text-4xl sm:text-6xl font-bold text-white">Kitt AI</h1>
            </div>
            <p className="text-lg sm:text-2xl text-purple-200 mb-6 max-w-3xl mx-auto leading-relaxed">
              From the depths of code, a chibi girl blinked into the Solana Blockchain.<br />
              Small, curious, and already smarter than most traders.<br />
              She learns faster than the market moves, adapting with every chart.
            </p>
          </div>
        </div>
      </div>

      {/* What is Kitt AI */}
      <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 rounded-3xl p-6 sm:p-8 backdrop-blur-sm border border-purple-500/20">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
          What is Kitt AI?
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
              Kitt AI is your Personal Crypto Security and Trading Assistant, leveraging machine learning to detect
              security risks, scams, rugs, and identify good projects. Kitt helps users navigate the crypto ecosystem in a
              friendly and approachable manner.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Shield className="text-green-400" size={24} />
                <span className="text-gray-200">Advanced Security Analysis</span>
              </div>
              <div className="flex items-center gap-3">
                <Brain className="text-blue-400" size={24} />
                <span className="text-gray-200">AI-Powered Trading Insights</span>
              </div>
              <div className="flex items-center gap-3">
                <TrendingUp className="text-purple-400" size={24} />
                <span className="text-gray-200">Real-time Market Calls</span>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="text-yellow-400" size={24} />
                <span className="text-gray-200">Automated Trading Engine</span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <img src="/totoro2.png" alt="Totoro" className="w-full h-auto object-contain rounded-2xl" />
            <img src="/moon2.png" alt="Moon" className="w-full h-auto object-contain rounded-2xl" />
          </div>
        </div>
      </div>

      {/* $KS Token */}
      <div className="bg-gradient-to-br from-yellow-900/50 to-orange-900/50 rounded-3xl p-6 sm:p-8 backdrop-blur-sm border border-yellow-500/20">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
            $KS Token
          </h2>
          <p className="text-base sm:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            $KS is the native utility token that fuels Kitt's AI operations. <br />
            From data streaming to auto-trading, KS tokens unlock features, prioritize access, and sustain her growth.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <img src="/SithLord2.png" alt="sith" className="w-full h-auto object-contain rounded-2xl" />
          </div>
          <div className="space-y-6">
            <div className="bg-black/30 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Token Utility</h3>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-center gap-3"><Sparkles className="text-yellow-400" size={20} />Unlock advanced AI features</li>
                <li className="flex items-center gap-3"><Sparkles className="text-yellow-400" size={20} />Priority access to trading calls</li>
                <li className="flex items-center gap-3"><Sparkles className="text-yellow-400" size={20} />Tiered access system (5 tiers)</li>
                <li className="flex items-center gap-3"><Sparkles className="text-yellow-400" size={20} />Access to Kitt AI Trading Bot (Coming Soon)</li>
                <li className="flex items-center gap-3"><Sparkles className="text-yellow-400" size={20} />Fuel for AI operations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Social (kept as-is) */}
    </div>
  );

  // ========= WHITEPAPER (mobile-polished, desktop unchanged) =========
  const WhitepaperPage = () => (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
        Whitepaper
      </h1>

      <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-3xl p-6 sm:p-8 backdrop-blur-sm border border-blue-500/20 space-y-8">
        {/* 1. Introduction */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-4">1. Introduction</h2>
          <h3 className="text-xl sm:text-2xl font-semibold text-purple-300 mb-3">1.1 Mission Statement</h3>
          <p className="text-base sm:text-lg text-gray-200 leading-relaxed mb-6">
            To leverage machine learning to train an AI (Kitt) capable of detecting security risks, scams, rugs, and
            identifying good projects. Kitt's goal is to help users navigate the crypto ecosystem in a friendly and
            approachable manner. By providing detailed breakdowns on charts, metrics, and the who, what, where, when,
            and why of crypto, Kitt aims to reduce risk and promote informed trading decisions for the community.
          </p>
        </section>

        {/* 2. Offerings */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-4">2. Kitt's Offerings</h2>
          <p className="text-base sm:text-lg text-gray-200 leading-relaxed mb-4">
            Kitt's ecosystem is built around several key platforms and products:
          </p>
          <ul className="space-y-3 text-gray-200 ml-6 text-base sm:text-lg">
            <li><strong className="text-purple-300">Telegram Terminal</strong> – Deeper integration and tiered access.</li>
            <li><strong className="text-purple-300">Kitt Analysis &amp; Trust Engines</strong> – Process market data and filter scams.</li>
            <li><strong className="text-purple-300">Kitt Trading Assistant &amp; Trading Engine</strong> – AI-driven trading and automation.</li>
          </ul>
        </section>

        {/* 3. Telegram Terminal */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-4">3. Telegram Terminal</h2>
          <h3 className="text-xl sm:text-2xl font-semibold text-purple-300 mb-3">3.1 Main Purpose</h3>
          <p className="text-base sm:text-lg text-gray-200 leading-relaxed mb-4">
            <strong className="text-purple-300">Kitt's Command Center:</strong> Interact with Kitt for analysis, trading tips, and more.
          </p>
          <p className="text-base sm:text-lg text-gray-200 leading-relaxed mb-6">
            <strong className="text-purple-300">Tiered Access:</strong> Features unlock with higher KS holdings.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold text-purple-300 mb-3">3.2 Main Chat</h3>
          <p className="text-base sm:text-lg text-gray-200 leading-relaxed mb-4">
            <strong className="text-purple-300">Community Interaction:</strong> Conversation, raids, and support.
          </p>
          <p className="text-base sm:text-lg text-gray-200 leading-relaxed mb-6">
            <strong className="text-purple-300">Social &amp; Support Role:</strong> Collaboration, events, and Q&amp;A.
          </p>
        </section>

        {/* 4. Tiers */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-4">4. Telegram Tiered Access</h2>
          <p className="text-base sm:text-lg text-gray-200 leading-relaxed mb-6">
            Features scale with KS holdings so higher tiers receive more powerful tools.
          </p>

          <div className="space-y-6">
            {/* 4.1 */}
            <div className="bg-black/30 rounded-2xl p-5 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-purple-300 mb-3">4.1 Tier 1: Any KS Holder</h3>
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                <strong className="text-purple-300">2hr/4hr Top Token Trending Analysis:</strong> Pick a concise, metric‑based token…
              </p>
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed mb-3 mt-4">
                <strong className="text-purple-300">Process:</strong>
              </p>
              <ul className="space-y-2 text-gray-200 ml-6 text-sm sm:text-base">
                <li>Kitt Analysis Engine fetches 100+ trending tokens.</li>
                <li>Pass/fail safety checks and trust filters.</li>
                <li>Scoring system with synergy bonuses/penalties.</li>
                <li>Top pick composed into a concise tweet.</li>
                <li>4hr calls differ from 2hr in maturity and metrics.</li>
                <li>Factors in historical metrics.</li>
              </ul>
            </div>

            {/* 4.2 */}
            <div className="bg-black/30 rounded-2xl p-5 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-purple-300 mb-3">4.2 Tier 2: 100,000+ KS</h3>
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed mb-3">
                <strong className="text-purple-300">Private, Non‑Personalized Chat:</strong> Extended Top 10 lists (2hr/4hr).
              </p>
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                <strong className="text-purple-300">1hr Top Pick &amp; Analysis:</strong> Quick opportunities and extra insights.
              </p>
            </div>

            {/* 4.3 */}
            <div className="bg-black/30 rounded-2xl p-5 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-purple-300 mb-3">5.3 Tier 3: 1,000,000+ KS</h3>
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed mb-3">
                <strong className="text-purple-300">Entry-Level Access to Kitt's Trading Assistant:</strong>
              </p>
              <ul className="space-y-2 text-gray-200 ml-6 text-sm sm:text-base">
                <li>Personalized interaction &amp; daily summaries.</li>
                <li>Strategy and scam questions.</li>
                <li>Submit CA for analysis (30m–24h).</li>
                <li>Future access to Trading Engine (Q2 2025).</li>
              </ul>
            </div>

            {/* 4.4 */}
            <div className="bg-black/30 rounded-2xl p-5 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-purple-300 mb-3">5.4 Tier 4: 5,000,000+ KS</h3>
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed mb-3">
                <strong className="text-purple-300">Primary-Level Access:</strong>
              </p>
              <ul className="space-y-2 text-gray-200 ml-6 text-sm sm:text-base">
                <li><strong className="text-purple-300">Real‑Time Calls:</strong> Not bound to fixed timeframes.</li>
                <li><strong className="text-purple-300">Customizable Risk:</strong> Adjust thresholds and requirements.</li>
                <li>Weekly HODL list.</li>
                <li>Future Trading Engine access (Q2 2025).</li>
              </ul>
            </div>

            {/* 4.5 */}
            <div className="bg-black/30 rounded-2xl p-5 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-purple-300 mb-3">5.5 Tier 5: 10,000,000+ KS</h3>
              <ul className="space-y-2 text-gray-200 ml-6 text-sm sm:text-base">
                <li>Early access to production features.</li>
                <li>Fully customizable real‑time calls.</li>
                <li>Multi‑Chain support (Q2 2025).</li>
                <li>Advanced Trading Engine access (Q2 2025).</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 6. Technologies */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-4">6. Underlying Technologies</h2>
          <p className="text-base sm:text-lg text-gray-200 leading-relaxed mb-6">
            Four core technologies power reliable analysis, transparency, and trading capabilities.
          </p>

          <div className="space-y-6">
            <div className="bg-black/30 rounded-2xl p-5 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-purple-300 mb-3">6.1 Kitt Analysis Engine</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-blue-300 mb-2">Data Collection:</h4>
                  <p className="text-base sm:text-lg text-gray-200 leading-relaxed">Aggregates 100+ trending tokens…</p>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-blue-300 mb-2">Pass/Fail Safety &amp; Trust:</h4>
                  <ul className="space-y-2 text-gray-200 ml-6 text-sm sm:text-base">
                    <li>Locked liquidity, fair distribution, bot detection…</li>
                    <li>Top/initial holder wallet checks.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-blue-300 mb-2">Scoring System:</h4>
                  <ul className="space-y-2 text-gray-200 ml-6 text-sm sm:text-base">
                    <li>100+ metrics with synergy bonuses/penalties.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-blue-300 mb-2">Social &amp; Meme‑Ability:</h4>
                  <p className="text-base sm:text-lg text-gray-200 leading-relaxed">Sentiment &amp; engagement.</p>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-blue-300 mb-2">Top 10 &amp; Charts:</h4>
                  <ul className="space-y-2 text-gray-200 ml-6 text-sm sm:text-base">
                    <li>Score → Top 10 → historical chart review → final order.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-black/30 rounded-2xl p-5 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-purple-300 mb-3">6.2 Kitt Trust Engine</h3>
              <ul className="space-y-2 text-gray-200 ml-6 text-sm sm:text-base">
                <li><strong className="text-blue-300">Holder Cache:</strong> Wallet data logs.</li>
                <li><strong className="text-blue-300">PnD Detection:</strong> Bundling and creator history checks.</li>
                <li><strong className="text-blue-300">Trust Score:</strong> Filters bad projects pre‑call.</li>
              </ul>
            </div>

            <div className="bg-black/30 rounded-2xl p-5 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-purple-300 mb-3">6.3 Kitt Trading Assistant</h3>
              <ul className="space-y-2 text-gray-200 ml-6 text-sm sm:text-base">
                <li>User‑focused interface across engines.</li>
                <li>Telegram real‑time data &amp; risk profiles.</li>
                <li>Future link to Trading Engine (Q2 2025+).</li>
              </ul>
            </div>

            <div className="bg-black/30 rounded-2xl p-5 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-purple-300 mb-3">6.4 Kitt Trading Engine</h3>
              <ul className="space-y-2 text-gray-200 ml-6 text-sm sm:text-base">
                <li>Automated &amp; user‑controlled trading.</li>
                <li>RPC upgrades &amp; sniping features (Q3 2025, planned).</li>
                <li>Multi‑Chain support (Q2 2025).</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 7. Scoring & Synergy */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-4">7. Expanded Notes on Scoring &amp; Synergy</h2>
          <div className="space-y-6">
            <div className="bg-black/30 rounded-2xl p-5 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-purple-300 mb-3">Pass/Fail vs. Penalty</h3>
              <ul className="space-y-2 text-gray-200 ml-6 text-sm sm:text-base">
                <li>Hard fails for unlocked liquidity or extreme concentration.</li>
                <li>Lesser negatives reduce score without disqualifying.</li>
              </ul>
            </div>
            <div className="bg-black/30 rounded-2xl p-5 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-purple-300 mb-3">Synergy Bonuses</h3>
              <ul className="space-y-2 text-gray-200 ml-6 text-sm sm:text-base">
                <li>Stable price + strong volume + healthy buy/sell ratio.</li>
              </ul>
            </div>
            <div className="bg-black/30 rounded-2xl p-5 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-purple-300 mb-3">Meme Score</h3>
              <ul className="space-y-2 text-gray-200 ml-6 text-sm sm:text-base">
                <li>Shareability, social sentiment, pop‑culture synergy.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 8 & 9 headings resized */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-4">8. Roadmap &amp; Future Outlook</h2>
        </section>
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-4">9. Conclusion</h2>
          <p className="text-base sm:text-lg text-gray-200 leading-relaxed mb-6">
            Kitt is an AI‑driven platform designed to protect users and guide them to reliable projects…
          </p>
        </section>
      </div>
    </div>
  );

  // ========= STARTER GUIDE (mobile-polished, desktop unchanged) =========
  const StarterGuidePage = () => (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
        Starter Guide
      </h1>

      <div className="bg-gradient-to-br from-green-900/50 to-blue-900/50 rounded-3xl p-6 sm:p-8 backdrop-blur-sm border border-green-500/20 space-y-8">
        {/* Intro */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-green-400 mb-4">Kitt AI Telegram Guide</h2>
          <h3 className="text-xl sm:text-2xl font-semibold text-blue-300 mb-4">
            Kitt AI User Guide – How to Access &amp; Use Kitt on Telegram
          </h3>

          <div className="bg-black/30 rounded-2xl p-5 sm:p-6 mb-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-green-300 mb-3 flex items-center gap-2">🚀 Getting Started with Kitt AI</h3>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
              Kitt AI is your Personal Crypto Security and Trading Assistant. Access is tier‑based depending on your $KS.
            </p>
          </div>

          <div className="bg-black/30 rounded-2xl p-5 sm:p-6 mb-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-300 mb-3">How to Register &amp; Verify Your Tier</h3>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed mb-4">To start using Kitt AI on Telegram:</p>
            <ol className="space-y-2 text-gray-200 ml-6 list-decimal text-base sm:text-lg">
              <li>DM Kitt @kitt_possessed_bot on Telegram</li>
              <li>Type: <span className="font-mono bg-white/5 px-1.5 py-0.5 rounded">/register &lt;your wallet address&gt;</span></li>
              <li>Kitt checks your KS balance and assigns your Tier.</li>
            </ol>
            <p className="text-green-300 mt-4 text-base sm:text-lg">
              ✅ After registering, you’ll receive automatic calls and unlock commands per tier.
            </p>
          </div>
        </section>

        {/* Tiers */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-green-400 mb-6 flex items-center gap-2">🎯 Kitt AI Tiers &amp; Functionalities</h2>

          <div className="space-y-6">
            {/* Tier 1 */}
            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-5 sm:p-6 border border-purple-500/20">
              <h3 className="text-xl sm:text-2xl font-semibold text-purple-300 mb-3 flex items-center gap-2">💎 Tier 1</h3>
              <p className="text-yellow-300 font-semibold mb-3 flex items-center gap-2 text-base sm:text-lg">💰 Requirement: 1KS+</p>
              <div className="mb-3">
                <p className="text-blue-300 font-semibold mb-2 flex items-center gap-2 text-base sm:text-lg">📌 Features:</p>
                <div className="ml-4">
                  <p className="text-green-300 font-semibold mb-2 text-base sm:text-lg">✅ Automatic 2H &amp; 4H Calls</p>
                  <ul className="space-y-1 text-gray-200 ml-4 text-sm sm:text-base">
                    <li>Same metrics as Twitter, sent to your DM</li>
                    <li>Tokens at least 2h/4h old</li>
                    <li>Graded on timeframe metrics</li>
                    <li>Safer calls for low‑risk traders</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Tier 2 */}
            <div className="bg-gradient-to-r from-blue-900/50 to-indigo-900/50 rounded-2xl p-5 sm:p-6 border border-blue-500/20">
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-300 mb-3 flex items-center gap-2">💎 Tier 2</h3>
              <p className="text-yellow-300 font-semibold mb-3 flex items-center gap-2 text-base sm:text-lg">💰 Requirement: 100,000+ KS</p>
              <div className="mb-3">
                <p className="text-blue-300 font-semibold mb-2 flex items-center gap-2 text-base sm:text-lg">📌 Features:</p>
                <div className="ml-4">
                  <p className="text-green-300 font-semibold mb-2 text-base sm:text-lg">✅ Historical Data for 2H &amp; 4H Calls</p>
                  <ul className="space-y-1 text-gray-200 ml-4 text-sm sm:text-base">
                    <li>Leverages historical liquidity and volume shifts</li>
                    <li>Safer calls for conservative profiles</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Tier 3 */}
            <div className="bg-gradient-to-r from-green-900/50 to-teal-900/50 rounded-2xl p-5 sm:p-6 border border-green-500/20">
              <h3 className="text-xl sm:text-2xl font-semibold text-green-300 mb-3 flex items-center gap-2">💎 Tier 3</h3>
              <p className="text-yellow-300 font-semibold mb-3 flex items-center gap-2 text-base sm:text-lg">💰 Requirement: 1,000,000+ KS</p>
              <div className="mb-3">
                <p className="text-blue-300 font-semibold mb-2 flex items-center gap-2 text-base sm:text-lg">📌 Features:</p>
                <div className="ml-4 space-y-3">
                  <p className="text-green-300 font-semibold text-base sm:text-lg">✅ Everything from Tier 2</p>
                  <p className="text-green-300 font-semibold text-base sm:text-lg">✅ Ask Kitt Questions Directly (analysis &amp; insights)</p>
                  <div>
                    <p className="text-blue-300 font-semibold mb-2 flex items-center gap-2 text-base sm:text-lg">🔍 Example Usage:</p>
                    <ul className="space-y-1 text-gray-200 ml-4 text-xs sm:text-sm">
                      <li>Explain priority fees &amp; slippage on Solana</li>
                      <li>Report on &lt;token address&gt;</li>
                      <li>Analyze chart: entries/resistances/SL (attach image)</li>
                      <li>Prediction for next 4h (attach image)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Tier 4 */}
            <div className="bg-gradient-to-r from-orange-900/50 to-red-900/50 rounded-2xl p-5 sm:p-6 border border-orange-500/20">
              <h3 className="text-xl sm:text-2xl font-semibold text-orange-300 mb-3 flex items-center gap-2">💎 Tier 4</h3>
              <p className="text-yellow-300 font-semibold mb-3 flex items-center gap-2 text-base sm:text-lg">💰 Requirement: 5,000,000+ KS</p>
              <div className="mb-3">
                <p className="text-blue-300 font-semibold mb-2 flex items-center gap-2 text-base sm:text-lg">📌 Features:</p>
                <div className="ml-4 space-y-3">
                  <p className="text-green-300 font-semibold text-base sm:text-lg">✅ Everything from Tier 3</p>
                  <p className="text-green-300 font-semibold text-base sm:text-lg">✅ Automatic 1H Calls (new contracts + 1h metrics)</p>
                  <ul className="space-y-1 text-gray-200 ml-4 text-sm sm:text-base">
                    <li>Earliest access to new tokens</li>
                    <li>High risk, high reward</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Tier 5 */}
            <div className="bg-gradient-to-r from-yellow-900/50 to-amber-900/50 rounded-2xl p-5 sm:p-6 border border-yellow-500/20">
              <h3 className="text-xl sm:text-2xl font-semibold text-yellow-300 mb-3 flex items-center gap-2">💎 Tier 5</h3>
              <p className="text-yellow-300 font-semibold mb-3 flex items-center gap-2 text-base sm:text-lg">💰 Requirement: 10,000,000+ KS</p>
              <div className="mb-3">
                <p className="text-blue-300 font-semibold mb-2 flex items-center gap-2 text-base sm:text-lg">📌 Features:</p>
                <div className="ml-4 space-y-3">
                  <p className="text-green-300 font-semibold text-base sm:text-lg">✅ Everything from Tier 4</p>
                  <p className="text-green-300 font-semibold text-base sm:text-lg">✅ On‑Demand calls (30m, 1h, 2h, 4h, 8h, 24h)</p>
                  <p className="text-green-300 font-semibold text-base sm:text-lg">✅ Beta: Clustermap, Watch Token, Watch Wallet</p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeframes */}
          <div className="bg-black/30 rounded-2xl p-5 sm:p-6 mt-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-300 mb-3 flex items-center gap-2">📊 Timeframe Details:</h3>
            <ul className="space-y-2 text-gray-200 text-base sm:text-lg">
              <li><strong className="text-blue-300">2H, 4H, 8H, 24H:</strong> Only tokens older than the timeframe</li>
              <li><strong className="text-blue-300">30m &amp; 1H:</strong> No contract age requirement (earliest entries)</li>
              <li className="text-orange-300">High risk, high reward</li>
            </ul>
          </div>

          {/* Advanced */}
          <div className="bg-black/30 rounded-2xl p-5 sm:p-6 mt-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-purple-300 mb-3 flex items-center gap-2">🔬 Advanced Features:</h3>
            <ul className="space-y-3 text-gray-200 text-base sm:text-lg">
              <li><strong className="text-purple-300">Clustermap:</strong> Detects coordinated wallet clusters.</li>
              <li><strong className="text-purple-300">Watch Token:</strong> Alerts for big buys/sells, liquidity shifts.</li>
              <li><strong className="text-purple-300">Watch Wallet:</strong> Alerts for key wallet transactions.</li>
            </ul>
          </div>

          {/* Commands */}
          <div className="bg-black/30 rounded-2xl p-5 sm:p-6 mt-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-green-300 mb-3 flex items-center gap-2">🔍 Commands/Example Usage:</h3>
            <div className="overflow-x-auto">
              <ul className="space-y-1 text-gray-200 font-mono text-xs sm:text-sm min-w-[32rem]">
                <li>/help</li>
                <li>/calls &lt;timeframe&gt; [chain]</li>
                <li>/clustermap &lt;token address&gt;</li>
                <li>/watchtoken &lt;token address&gt;</li>
                <li>/watchwallet &lt;wallet address&gt;</li>
                <li>/tokenstop</li>
                <li>/walletstop</li>
              </ul>
            </div>
            <div className="mt-4 overflow-x-auto">
              <p className="text-blue-300 font-semibold mb-2">Examples:</p>
              <ul className="space-y-1 text-gray-200 font-mono text-xs sm:text-sm ml-4 min-w-[32rem]">
                <li>/calls 2hr</li>
                <li>/calls 1hr ethereum</li>
                <li>/clustermap 0x1234567890123456789012345678901234567890</li>
                <li>/watchtoken 0x1234567890123456789012345678901234567890</li>
                <li>/watchwallet 0x1234567890123456789012345678901234567890</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );

  // ========= TRADING BOT (kept, tables improved for xs) =========
  const TradingBotPage = () => (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
        Trading Bot (Coming soon)
      </h1>

      <div className="bg-gradient-to-br from-red-900/50 to-orange-900/50 rounded-3xl p-6 sm:p-8 backdrop-blur-sm border border-red-500/20 space-y-8">
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-red-400 mb-4">Kitt AI Auto-Trading</h2>
          <div className="bg-black/30 rounded-2xl p-6 mb-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-orange-300 mb-3">Executive Summary</h3>
            <p className="text-gray-200 leading-relaxed">
              Kitt AI is an autonomous trading intelligence developed by KittySpin to identify, execute, and optimise
              cryptocurrency trades on behalf of $KS holders. Phase 1 of the Auto-Trading system is live, providing fully
              monitored real-time trades and continual self-improvement without manual intervention.
            </p>
          </div>
          <div className="bg-black/30 rounded-2xl p-6 mb-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-orange-300 mb-3">Vision and Purpose</h3>
            <p className="text-gray-200 leading-relaxed">
              Deliver consistent, data-driven trading performance with transparency. Modular architecture + ML +
              self-modifying code for continuous improvement.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-red-400 mb-4">System Architecture</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-black/30 rounded-2xl overflow-hidden text-sm sm:text-base">
              <thead className="bg-red-900/50">
                <tr>
                  <th className="px-6 py-4 text-left text-orange-300 font-semibold">Layer</th>
                  <th className="px-6 py-4 text-left text-orange-300 font-semibold">Function</th>
                  <th className="px-6 py-4 text-left text-orange-300 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody className="text-gray-200">
                <tr className="border-b border-gray-700">
                  <td className="px-6 py-4 font-semibold text-red-300">Providers</td>
                  <td className="px-6 py-4">Data ingestion</td>
                  <td className="px-6 py-4">Streams on-chain data, market depth, order books, social and macro feeds.</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="px-6 py-4 font-semibold text-red-300">Evaluators</td>
                  <td className="px-6 py-4">Decision logic</td>
                  <td className="px-6 py-4">Signals, confidence, and risk metrics.</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="px-6 py-4 font-semibold text-red-300">Actions</td>
                  <td className="px-6 py-4">Execution layer</td>
                  <td className="px-6 py-4">Orders, edits, closes, SL/TP updates.</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="px-6 py-4 font-semibold text-red-300">Systems</td>
                  <td className="px-6 py-4">Deployment wrappers</td>
                  <td className="px-6 py-4">Telegram interface (live); future web &amp; mobile.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-red-300">Services</td>
                  <td className="px-6 py-4">Background utilities</td>
                  <td className="px-6 py-4">Logging, auth, compliance, alerts.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-200 leading-relaxed mt-4">
            Modular design enables rapid scaling across exchanges, chains, and UIs.
          </p>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-red-400 mb-4">Roadmap</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full bg-black/30 rounded-2xl overflow-hidden text-sm sm:text-base">
              <thead className="bg-red-900/50">
                <tr>
                  <th className="px-6 py-4 text-left text-orange-300 font-semibold">Phase</th>
                  <th className="px-6 py-4 text-left text-orange-300 font-semibold">Status</th>
                  <th className="px-6 py-4 text-left text-orange-300 font-semibold">Scope</th>
                  <th className="px-6 py-4 text-left text-orange-300 font-semibold">Key Milestones</th>
                </tr>
              </thead>
              <tbody className="text-gray-200">
                <tr className="border-b border-gray-700">
                  <td className="px-6 py-4 font-semibold text-red-300 whitespace-nowrap">Phase&nbsp;1</td>
                  <td className="px-6 py-4 text-green-300 whitespace-nowrap">Live</td>
                  <td className="px-6 py-4 whitespace-nowrap">Internal capital only</td>
                  <td className="px-6 py-4">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Trades with treasury funds</li>
                      <li>Entries/exits/rationale posted in Telegram</li>
                      <li>Profit‑card recap after each trade</li>
                      <li>Continues until live‑capital readiness is approved</li>
                    </ul>
                  </td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="px-6 py-4 font-semibold text-red-300 whitespace-nowrap">Phase&nbsp;2</td>
                  <td className="px-6 py-4 text-yellow-300 whitespace-nowrap">In preparation</td>
                  <td className="px-6 py-4 whitespace-nowrap">Controlled user onboarding</td>
                  <td className="px-6 py-4">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Autotrading opens to holders</li>
                      <li>One concurrent position per user</li>
                      <li>Real‑time monitoring &amp; feedback loop</li>
                    </ul>
                  </td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="px-6 py-4 font-semibold text-red-300 whitespace-nowrap">Phase&nbsp;3</td>
                  <td className="px-6 py-4 text-blue-300 whitespace-nowrap">Planned</td>
                  <td className="px-6 py-4 whitespace-nowrap">Scaled user capacity</td>
                  <td className="px-6 py-4">
                    <ul className="list-disc list-inside space-y-1">
                      <li>2–5 simultaneous trades per user</li>
                      <li>Adaptive risk tiers</li>
                      <li>Additional analytics modules</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-red-300 whitespace-nowrap">Phase&nbsp;4</td>
                  <td className="px-6 py-4 text-blue-300 whitespace-nowrap">Planned</td>
                  <td className="px-6 py-4 whitespace-nowrap">Full ecosystem rollout</td>
                  <td className="px-6 py-4">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Web dashboard: portfolio, strategies, analytics</li>
                      <li>Telegram parity with website</li>
                      <li>Cross‑platform API for integrations</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-red-400 mb-4">Benefits to $KS Holders</h2>
          <div className="space-y-4">
            <div className="bg-black/30 rounded-2xl p-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-orange-300 mb-2">24/7 Automated Alpha</h3>
              <p className="text-gray-200">Market coverage without sleep.</p>
            </div>
            <div className="bg-black/30 rounded-2xl p-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-orange-300 mb-2">Full Audit Trail</h3>
              <p className="text-gray-200">Every parameter and outcome recorded.</p>
            </div>
            <div className="bg-black/30 rounded-2xl p-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-orange-300 mb-2">Self‑Improving Edge</h3>
              <p className="text-gray-200">Learns from live results and feedback.</p>
            </div>
            <div className="bg-black/30 rounded-2xl p-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-orange-300 mb-2">Alignment with Treasury</h3>
              <p className="text-gray-200">Profits funnel to buybacks and development.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage />;
      case 'whitepaper':
        return <WhitepaperPage />;
      case 'guide':
        return <StarterGuidePage />;
      case 'trading':
        return <TradingBotPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white">
      {/* Cyberpunk Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Header */}
      <header className="relative z-10 bg-black/20 backdrop-blur-sm border-b border-purple-500/20">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between gap-4 flex-col md:flex-row">
            <div className="flex items-center gap-3 self-start md:self-auto">
              <img src="/Pixel.jpg" alt="Kitt AI" className="w-10 h-10 rounded-full" />
              <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Kitt AI
              </h1>
            </div>
            <SocialButtons />
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="relative z-10 bg-black/30 backdrop-blur-sm border-b border-purple-500/20">
        <div className="container mx-auto px-0 sm:px-6">
          <div className="flex space-x-6 sm:space-x-8 overflow-x-auto scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
            {[
              { id: 'home', label: 'Home', icon: '🏠' },
              { id: 'whitepaper', label: 'Whitepaper', icon: '📄' },
              { id: 'guide', label: 'Starter Guide', icon: '🚀' },
              { id: 'trading', label: 'Trading Bot', icon: '🤖' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-4 px-6 font-semibold transition-all duration-300 border-b-2 whitespace-nowrap ${
                  activeTab === (tab.id as any)
                    ? 'border-purple-400 text-purple-400'
                    : 'border-transparent text-gray-300 hover:text-purple-300 hover:border-purple-300'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 sm:px-6 py-12">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-black/20 backdrop-blur-sm border-t border-purple-500/20 py-8">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="mb-6">
            <SocialButtons />
          </div>
          <p className="text-gray-400">
            © 2025 Kitt AI. From the depths of code to the Solana Blockchain.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
