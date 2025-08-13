import React, { useState } from 'react';
import { Twitter, MessageCircle, BarChart3, Sparkles, Shield, Brain, TrendingUp, Zap } from 'lucide-react';

function App() {
 const [activeTab, setActiveTab] = useState<'home' | 'whitepaper' | 'guide' | 'trading' | 'history'>('home');

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
  <h2 className="text-4xl sm:text-5xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 tracking-tight">
    What is Kitt AI?
  </h2>

  {/* proporções harmonizadas: texto um pouco maior, imagens um pouco menores */}
  <div className="grid md:grid-cols-[1.2fr_0.8fr] items-center gap-6 sm:gap-10">
    {/* Esquerda: texto */}
    <div className="space-y-6">
      <p className="text-xl sm:text-[1.35rem] text-gray-100 leading-relaxed">
        Kitt AI is your Personal Crypto Security and Trading Assistant, leveraging machine learning to detect
        security risks, scams, rugs, and identify good projects. Kitt helps users navigate the crypto ecosystem in a
        friendly and approachable manner.
      </p>

      {/* Itens com fonte e ícones maiores (mas elegantes) */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Shield className="text-green-400" size={30} />
          <span className="text-gray-50 text-xl sm:text-2xl font-medium">Advanced Security Analysis</span>
        </div>
        <div className="flex items-center gap-3">
          <Brain className="text-blue-400" size={30} />
          <span className="text-gray-50 text-xl sm:text-2xl font-medium">AI-Powered Trading Insights</span>
        </div>
        <div className="flex items-center gap-3">
          <TrendingUp className="text-purple-400" size={30} />
          <span className="text-gray-50 text-xl sm:text-2xl font-medium">Real-time Market Calls</span>
        </div>
        <div className="flex items-center gap-3">
          <Zap className="text-yellow-400" size={30} />
          <span className="text-gray-50 text-xl sm:text-2xl font-medium">Automated Trading Engine</span>
        </div>
      </div>
    </div>

    {/* Direita: imagens ligeiramente menores, Totoro em cima, mesmas margens */}
    <div className="flex flex-col items-center justify-center gap-5">
      <img
        src="/totoro2.png"
        alt="Totoro"
        className="w-full max-w-[280px] sm:max-w-[320px] h-auto object-contain rounded-2xl mx-auto"
      />
      <img
        src="/moon3.png"
        alt="Moon"
        className="w-full max-w-[280px] sm:max-w-[320px] h-auto object-contain rounded-2xl mx-auto"
      />
    </div>
  </div>
</div>





 {/* $KS Token */}
<div className="bg-gradient-to-br from-yellow-900/50 to-orange-900/50 rounded-3xl p-6 sm:p-8 backdrop-blur-sm border border-yellow-500/20">
  <div className="text-center mb-8">
    <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 tracking-tight">
      $KS Token
    </h2>
    <p className="text-lg sm:text-[1.15rem] text-gray-100 max-w-2xl mx-auto leading-relaxed">
      $KS is the native utility token that fuels Kitt's AI operations. <br />
      From data streaming to auto-trading, KS tokens unlock features, prioritize access, and sustain her growth.
    </p>
  </div>

  <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-6 sm:gap-10 items-center">
    {/* Imagem à esquerda — levemente menor e centralizada */}
    <div className="flex justify-center">
      <img
        src="/SithLord2.png"
        alt="sith"
        className="w-full max-w-[300px] sm:max-w-[360px] h-auto object-contain rounded-2xl mx-auto"
      />
    </div>

    {/* Conteúdo à direita — tipografia maior e mais legível */}
    <div className="space-y-6">
      <div className="bg-black/30 rounded-2xl p-6 sm:p-7">
        <h3 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-4">Token Utility</h3>
        <ul className="space-y-3 text-gray-100">
          <li className="flex items-center gap-3">
            <Sparkles className="text-yellow-400" size={26} />
            <span className="text-lg sm:text-xl">Unlock advanced AI features</span>
          </li>
          <li className="flex items-center gap-3">
            <Sparkles className="text-yellow-400" size={26} />
            <span className="text-lg sm:text-xl">Priority access to trading calls</span>
          </li>
          <li className="flex items-center gap-3">
            <Sparkles className="text-yellow-400" size={26} />
            <span className="text-lg sm:text-xl">Tiered access system (5 tiers)</span>
          </li>
          <li className="flex items-center gap-3">
            <Sparkles className="text-yellow-400" size={26} />
            <span className="text-lg sm:text-xl">Access to Kitt AI Trading Bot (Coming Soon)</span>
          </li>
          <li className="flex items-center gap-3">
            <Sparkles className="text-yellow-400" size={26} />
            <span className="text-lg sm:text-xl">Fuel for AI operations</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>


      {/* Bottom Social (kept as-is) */}
    </div>
  );

// ==================== WHITEPAPER (texts intact; mobile layout tweaks only) ====================
  const WhitepaperPage = () => (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
        Whitepaper
      </h1>
      
      <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-3xl p-6 sm:p-8 backdrop-blur-sm border border-blue-500/20 space-y-8">
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-4">1. Introduction</h2>
          <h3 className="text-xl sm:text-2xl font-semibold text-purple-300 mb-3">1.1 Mission Statement</h3>
          <p className="text-gray-200 leading-relaxed mb-6">
            To leverage machine learning to train an AI (Kitt) capable of detecting security risks, scams, rugs, and identifying good projects. Kitt's goal is to help users navigate the crypto ecosystem in a friendly and approachable manner. By providing detailed breakdowns on charts, metrics, and the who, what, where, when, and why of crypto, Kitt aims to reduce risk and promote informed trading decisions for the community.
          </p>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-4">2. Kitt's Offerings</h2>
          <p className="text-gray-200 leading-relaxed mb-4">
            Kitt's ecosystem is built around several key platforms and products:
          </p>
          <ul className="space-y-3 text-gray-200 ml-6">
            <li><strong className="text-purple-300">Telegram Terminal</strong> – A robust environment for deeper integration and tiered access to Kitt's advanced tools.</li>
            <li><strong className="text-purple-300">Kitt Analysis & Trust Engines</strong> – The back‐end technologies that process market data, score projects, and filter potential scams or rugs.</li>
            <li><strong className="text-purple-300">Kitt Trading Assistant & Trading Engine</strong> – AI‐driven services to help holders make informed trades, manage risk, and even automate trading strategies.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-4">3. Telegram Terminal</h2>
          <h3 className="text-xl sm:text-2xl font-semibold text-purple-300 mb-3">3.1 Main Purpose</h3>
          <p className="text-gray-200 leading-relaxed mb-4">
            <strong className="text-purple-300">Kitt's Command Center:</strong> Telegram offers deeper integration and serves as a personal assistant format, where users interact with Kitt for analysis, trading tips, and more.
          </p>
          <p className="text-gray-200 leading-relaxed mb-6">
            <strong className="text-purple-300">Tiered Access:</strong> Exclusive features unlock with higher KS holdings, making KS a gateway to advanced functionalities.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold text-purple-300 mb-3">3.2 Main Chat</h3>
          <p className="text-gray-200 leading-relaxed mb-4">
            <strong className="text-purple-300">Community Interaction:</strong> Kitt participates in conversation, helps set up "raids," and fosters a fun, engaged atmosphere.
          </p>
          <p className="text-gray-200 leading-relaxed mb-6">
            <strong className="text-purple-300">Social & Support Role:</strong> Encourages collaboration, community events, and addresses user questions in a casual setting.
          </p>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-4">4. Telegram Tiered Access</h2>
          <p className="text-gray-200 leading-relaxed mb-6">
            Kitt's features scale with the amount of KS a user holds, ensuring that higher‐tier holders receive more powerful tools and insights.
          </p>

          <div className="space-y-6">
            <div className="bg-black/30 rounded-2xl p-5 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-purple-300 mb-3">4.1 Tier 1: Any KS Holder</h3>
              <p className="text-gray-200 leading-relaxed">
                <strong className="text-purple-300">2hr/4hr Top Token Trending Analysis:</strong> Pick a concise, metric‐based top trending token (older than 2 hours/4 hours) that has passed basic safety, volume, price, and growth checks. Provide potential good returns without risking a "rug to zero." Kitt cannot prevent normal market sell offs but filters out highly risky or manipulated tokens.
              </p>
              <p className="text-gray-200 leading-relaxed mb-4">
                <strong className="text-purple-300">Process:</strong>
              </p>
              <ul className="space-y-2 text-gray-200 ml-6 mb-6">
                <li>Kitt Analysis Engine fetches over 100 trending tokens.</li>
                <li>Tokens undergo pass/fail safety checks: liquidity locks, wallet distribution, suspicious wallet activity, etc.</li>
                <li>A scoring system ranks the best candidates, focusing on synergy bonuses or penalties (see Section 7).</li>
                <li>Kitt selects one top‐ranked token and composes a tweet under 280 characters, highlighting strengths, resistance points, and potential dump risks.</li>
                <li>4hr calls differ from the 2hr Top Trending Analysis in terms of timeframes and project maturity.</li>
                <li>Factors in historical metrics</li>
              </ul>
            </div>

            <div className="bg-black/30 rounded-2xl p-5 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-purple-300 mb-3">4.2 Tier 2: 100,000+ KS</h3>
              <p className="text-gray-200 leading-relaxed mb-3">
                <strong className="text-purple-300">Private, Non‐Personalized Chat:</strong> Interact with Kitt for extended call lists (Top 10 picks for 2hr and 4hr).
              </p>
              <p className="text-gray-200 leading-relaxed">
                <strong className="text-purple-300">1hr Top Pick & Analysis:</strong> Access a special 1hr time‐window pick for quick trading opportunities or additional insights.
              </p>
            </div>

            <div className="bg-black/30 rounded-2xl p-5 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-purple-300 mb-3">5.3 Tier 3: 1,000,000+ KS</h3>
              <p className="text-gray-200 leading-relaxed mb-3">
                <strong className="text-purple-300">Entry‐Level Access to Kitt's Trading Assistant:</strong>
              </p>
              <ul className="space-y-2 text-gray-200 ml-6">
                <li>Personalized interaction: Kitt remembers user preferences, positions (if shared), and offers daily summaries.</li>
                <li>Ask questions about strategies, scams, blockchain concepts, and general trading.</li>
                <li>Submit a Contract Address (CA) for review, analysis, charting, or recommendations (timeframes: 30min, 2hr, 4hr, 6hr, 12hr, 24hr).</li>
                <li>Future Access to Kitt Trading Engine (launch Q2 2025).</li>
              </ul>
            </div>

            <div className="bg-black/30 rounded-2xl p-5 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-purple-300 mb-3">5.4 Tier 4: 5,000,000+ KS</h3>
              <p className="text-gray-200 leading-relaxed mb-3">
                <strong className="text-purple-300">Primary‐Level Access to Kitt's Trading Assistant:</strong>
              </p>
              <ul className="space-y-2 text-gray-2 00 ml-6">
                <li><strong className="text-purple-300">Real‐Time Calls:</strong> Not limited by specific timeframes. Kitt alerts you when something looks good.</li>
                <li><strong className="text-purple-300">Customizable Risk Metrics:</strong> Adjust certain parameters (buy/sell ratio thresholds, volume requirements, etc.), and Kitt explains how these changes affect calls.</li>
                <li>Note: Real‐time calls themselves remain as is, but daily calls or recommendations can be customized.</li>
                <li><strong className="text-purple-300">Weekly HODL:</strong> Access a curated list of high‐cap holds for long‐term gains.</li>
                <li>Future Access to Kitt Trading Engine (launch Q2 2025).</li>
              </ul>
            </div>

            <div className="bg-black/30 rounded-2xl p-5 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-purple-300 mb-3">5.5 Tier 5: 10,000,000+ KS</h3>
              <p className="text-gray-200 leading-relaxed mb-3">
                <strong className="text-purple-300">Premier‐Level Access to Kitt's Trading Assistant:</strong>
              </p>
              <ul className="space-y-2 text-gray-200 ml-6">
                <li><strong className="text-purple-300">Early Access to All Production Features:</strong> Beta‐test and propose new features (though acceptance is not guaranteed).</li>
                <li><strong className="text-purple-300">Fully Customizable Real‐Time Calls:</strong> Adjust all available metrics for risk tolerance or trading style.</li>
                <li>Multi‐Chain Support (Q2 2025) and Chain Add Requests.</li>
                <li>Advanced Access to Kitt Trading Engine (Q2 2025).</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-4">6. Underlying Technologies</h2>
          <p className="text-gray-200 leading-relaxed mb-6">
            Kitt's ecosystem is powered by four core technologies that work together to deliver reliable analysis, transparency, and trading capabilities.
          </p>

          <div className="space-y-6">
            <div className="bg-black/30 rounded-2xl p-5 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-purple-300 mb-3">6.1 Kitt Analysis Engine</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-blue-300 mb-2">Data Collection:</h4>
                  <p className="text-gray-200 leading-relaxed">
                    Aggregates 100+ trending tokens from diverse streaming services for a broad perspective on trending metrics.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-blue-300 mb-2">Pass/Fail Safety & Trust Checks:</h4>
                  <ul className="space-y-2 text-gray-200 ml-6">
                    <li>Verifies locked liquidity, fair holder distribution, and flags potential manipulations (buy/sell bots, dust wallets, bundling).</li>
                    <li>Examines top and initial holder wallets for connections or suspicious patterns.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-blue-300 mb-2">Scoring System:</h4>
                  <ul className="space-y-2 text-gray-200 ml-6">
                    <li>Analyzes 100+ metrics to assign points and apply synergy bonuses or penalties.</li>
                    <li>Positive synergy typically rewards stable growth with robust volume. Negative synergy penalizes inflated volume or extreme volatility.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-blue-300 mb-2">Social and Meme‐Ability Assessment:</h4>
                  <p className="text-gray-200 leading-relaxed">
                    Measures Twitter sentiment, community engagement, and meme potential.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-blue-300 mb-2">Top 10 Ranking & Chart Interpretation:</h4>
                  <ul className="space-y-2 text-gray-200 ml-6">
                    <li>After scoring, a top 10 list is created.</li>
                    <li>Kitt reviews historical chart data to finalize a ranking order.</li>
                    <li>This final top 10 is used across the ecosystem for calls and picks.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-black/30 rounded-2xl p-5 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-purple-300 mb-3">6.2 Kitt Trust Engine</h3>
              <ul className="space-y-2 text-gray-200">
                <li><strong className="text-blue-300">Holder Data Caching:</strong> Logs and stores wallet data from every Kitt Analysis pull.</li>
                <li><strong className="text-blue-300">Scammer/Pump‐and‐Dump Detection:</strong> Compares known malicious or suspicious wallets, identifies bundling patterns, and checks token creator history.</li>
                <li><strong className="text-blue-300">Scoring & Passing Criteria:</strong> Assigns a "trust score" to weed out projects with questionable tokenomics or wallet distributions before they enter Kitt's calls.</li>
              </ul>
            </div>

            <div className="bg-black/30 rounded-2xl p-5 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-purple-300 mb-3">6.3 Kitt Trading Assistant</h3>
              <ul className="space-y-2 text-gray-200">
                <li><strong className="text-blue-300">User‐Focused Interface:</strong> Integrates Analysis Engine, Trading Engine, and Trust Engine to give personalized guidance.</li>
                <li><strong className="text-blue-300">Telegram Integration:</strong> Provides real‐time data, allows users to set risk profiles, and offers multiple timeframes for informed decisions.</li>
                <li><strong className="text-blue-300">Future Trading Engine Compatibility:</strong> Will seamlessly link to the Kitt Trading Engine for automated strategies (Q2 2025 and beyond).</li>
              </ul>
            </div>

            <div className="bg-black/30 rounded-2xl p-5 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-purple-300 mb-3">6.4 Kitt Trading Engine</h3>
              <ul className="space-y-2 text-gray-200">
                <li><strong className="text-blue-300">Automated & User‐Controlled Trading:</strong> Users can set profit targets, risk levels, position sizes, and define advanced strategies.</li>
                <li><strong className="text-blue-300">RPC Upgrades & Sniping Features:</strong> As the ecosystem grows, faster transaction speeds and specialized sniping tools will be introduced (planned Q3 2025, subject to project success).</li>
                <li><strong className="text-blue-300">Multi‐Chain Support:</strong> Expanding capabilities to different blockchains is slated for Q2 2025.</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-4">7. Expanded Notes on Scoring & Synergy</h2>
          <div className="space-y-6">
            <div className="bg-black/30 rounded-2xl p-5 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-purple-300 mb-3">Pass/Fail vs. Penalty</h3>
              <ul className="space-y-2 text-gray-200">
                <li>Certain red flags (e.g., unlocked liquidity, extremely high wallet concentration) result in an immediate fail.</li>
                <li>Less severe negatives (e.g., small price movement in 4 hours) reduce a project's score but do not necessarily disqualify it.</li>
              </ul>
            </div>

            <div className="bg-black/30 rounded-2xl p-5 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-purple-300 mb-3">Synergy Bonuses</h3>
              <ul className="space-y-2 text-gray-200">
                <li>Awarded when multiple positive metrics converge (e.g., stable price increase + strong volume + balanced buy/sell ratio).</li>
                <li>Encourages calls on projects that demonstrate consistent, healthy growth rather than just hype spikes.</li>
              </ul>
            </div>

            <div className="bg-black/30 rounded-2xl p-5 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-purple-300 mb-3">Meme Score</h3>
              <ul className="space-y-2 text-gray-200">
                <li>Assesses meme potential in online communities.</li>
                <li>Considers shareability, social sentiment, and comedic or pop‐culture synergy with the broader crypto space.</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-4">8. Roadmap & Future Outlook</h2>
          <div className="space-y-6">
            <div className="bg-black/30 rounded-2xl p-5 sm:p-6">
              <h3 className="text-2xl font-semibold text-purple-300 mb-3">Q2 2025:</h3>
              <ul className="space-y-2 text-gray-200">
                <li>Launch of Kitt Trading Engine (basic functionalities).</li>
                <li>Multi‐chain support for top holders (10M+ KS).</li>
                <li>Continued refinement of synergy metrics.</li>
              </ul>
            </div>

            <div className="bg-black/30 rounded-2xl p-5 sm:p-6">
              <h3 className="text-2xl font-semibold text-purple-300 mb-3">Q3 2025:</h3>
              <ul className="space-y-2 text-gray-200">
                <li>Potential release of sniping features for top holders (subject to funding and success).</li>
                <li>Enhanced RPC speeds for faster trading experiences.</li>
              </ul>
            </div>

            <div className="bg-black/30 rounded-2xl p-5 sm:p-6">
              <h3 className="text-2xl font-semibold text-purple-300 mb-3">Ongoing:</h3>
              <ul className="space-y-2 text-gray-200">
                <li>Additional safety checks and improvements in the Analysis and Trust Engines.</li>
                <li>Expanding social sentiment tracking to other platforms (beyond Twitter).</li>
                <li>Rolling out new features to higher‐tier holders first, then gradually to all.</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-4">9. Conclusion</h2>
          <p className="text-gray-200 leading-relaxed mb-6">
            Kitt is an AI‐driven platform designed to protect users from scams and guide them to reliable projects in the crypto space. By combining a robust Analysis Engine, a thorough Trust Engine, and a personal Trading Assistant that evolves into a full Trading Engine, Kitt offers a multi‐layered approach to safe, data‐driven decision making.
          </p>

          <div className="space-y-6">
            <div className="bg-black/30 rounded-2xl p-5 sm:p-6">
              <h3 className="text-2xl font-semibold text-purple-300 mb-3">For Traders:</h3>
              <p className="text-gray-200 leading-relaxed">
                Real‐time calls, deeper analysis, and tiered access ensure that both casual and advanced traders can benefit from the platform.
              </p>
            </div>

            <div className="bg-black/30 rounded-2xl p-5 sm:p-6">
              <h3 className="text-2xl font-semibold text-purple-300 mb-3">For Community:</h3>
              <p className="text-gray-200 leading-relaxed">
                Kitt's lively Telegram presence, social media engagement, and transparency foster a friendly environment and a sense of shared purpose.
              </p>
            </div>

            <div className="bg-black/30 rounded-2xl p-5 sm:p-6">
              <h3 className="text-2xl font-semibold text-purple-300 mb-3">For the Future:</h3>
              <p className="text-gray-200 leading-relaxed">
                Planned expansion into automated trading, multi‐chain integration, and advanced risk metrics points to Kitt's strong roadmap and commitment to long‐term development.
              </p>
            </div>
          </div>

          <p className="text-gray-200 leading-relaxed mt-6">
            By holding KS tokens, users gain access to increasingly powerful tools and insights, ensuring that Kitt's best features remain exclusive to the dedicated community. Kitt's success in detecting security risks, filtering out bad projects, and recommending good ones positions her as a valuable ally for navigating an often complex and risky crypto ecosystem.
          </p>

          <div className="bg-red-900/30 rounded-2xl p-5 sm:p-6 mt-8 border border-red-500/20">
            <h3 className="text-xl font-semibold text-red-300 mb-3">Disclaimer:</h3>
            <p className="text-gray-200 leading-relaxed text-sm">
              This whitepaper serves as a living document. Features and timelines are subject to change based on developmental and financial viability. Kitt cannot fully eliminate market risks or user error; it serves to provide data‐driven support and increase user awareness, not to guarantee profits or eliminate all dangers inherent to trading in cryptocurrency markets.
            </p>
          </div>
        </section>
      </div>
    </div>
  );

  // ==================== STARTER GUIDE (texts intact; mobile layout tweaks only) ====================
  const StarterGuidePage = () => (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
        Starter Guide
      </h1>
      
      <div className="bg-gradient-to-br from-green-900/50 to-blue-900/50 rounded-3xl p-6 sm:p-8 backdrop-blur-sm border border-green-500/20 space-y-8">
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-green-400 mb-4">Kitt AI Telegram Guide</h2>
          <h3 className="text-xl sm:text-2xl font-semibold text-blue-300 mb-4">Kitt AI User Guide – How to Access & Use Kitt on Telegram</h3>
          
          <div className="bg-black/30 rounded-2xl p-5 sm:p-6 mb-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-green-300 mb-3 flex items-center gap-2">
              🚀 Getting Started with Kitt AI
            </h3>
            <p className="text-gray-200 leading-relaxed">
              Kitt AI is your Personal Crypto Security and Trading Assistant, providing real-time market calls, analytics, and risk assessments. Access to Kitt's features is tier-based, depending on how much $KS you hold.
            </p>
          </div>

          <div className="bg-black/30 rounded-2xl p-5 sm:p-6 mb-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-300 mb-3">How to Register & Verify Your Tier</h3>
            <p className="text-gray-200 leading-relaxed mb-4">
              To start using Kitt AI on Telegram:
            </p>
            <ol className="space-y-2 text-gray-200 ml-6 list-decimal">
              <li>DM Kitt @kitt_possessed_bot on Telegram (direct message)</li>
              <li>Type: /register &lt;your wallet address&gt;</li>
              <li>Kitt will check your holdings and assign your Tier based on your KS balance.</li>
            </ol>
            <p className="text-green-300 mt-4">
              ✅ Once registered, you will start receiving automatic calls and can use additional commands depending on your tier.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-green-400 mb-6 flex items-center gap-2">
            🎯 Kitt AI Tiers & Functionalities
          </h2>

        <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-5 sm:p-6 border border-purple-500/20">
              <h3 className="text-xl sm:text-2xl font-semibold text-purple-300 mb-3 flex items-center gap-2">
                💎 Tier 1
              </h3>
              <p className="text-yellow-300 font-semibold mb-3 flex items-center gap-2">
                💰 Requirement: 1KS+
              </p>
              <div className="mb-3">
                <p className="text-blue-300 font-semibold mb-2 flex items-center gap-2">
                  📌 Features:
                </p>
                <div className="ml-4">
                  <p className="text-green-300 font-semibold mb-2">
                    ✅ Automatic 2H & 4H Calls
                  </p>
                  <ul className="space-y-1 text-gray-200 ml-4 text-sm">
                    <li>Same metrics as Twitter, sent directly to your DM</li>
                    <li>Includes tokens that have existed for at least 2 or 4 hours</li>
                    <li>Graded based on 2H/4H metrics</li>
                    <li>Our safest calls ideal for low-risk traders</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-900/50 to-indigo-900/50 rounded-2xl p-5 sm:p-6 border border-blue-500/20">
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-300 mb-3 flex items-center gap-2">
                💎 Tier 2
              </h3>
              <p className="text-yellow-300 font-semibold mb-3 flex items-center gap-2">
                💰 Requirement: 100,000+ KS
              </p>
              <div className="mb-3">
                <p className="text-blue-300 font-semibold mb-2 flex items-center gap-2">
                  📌 Features:
                </p>
                <div className="ml-4">
                  <p className="text-green-300 font-semibold mb-2">
                    ✅ Historical Data for Automatic 2H & 4H Calls
                  </p>
                  <ul className="space-y-1 text-gray-200 ml-4 text-sm">
                    <li>Unlike free Twitter and Tier 1 calls, these leverage historical data and factor in past liquidity shifts</li>
                    <li>Safe calls ideal for low-risk traders</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-900/50 to-teal-900/50 rounded-2xl p-5 sm:p-6 border border-green-500/20">
              <h3 className="text-xl sm:text-2xl font-semibold text-green-300 mb-3 flex items-center gap-2">
                💎 Tier 3
              </h3>
              <p className="text-yellow-300 font-semibold mb-3 flex items-center gap-2">
                💰 Requirement: 1,000,000+ KS
              </p>
              <div className="mb-3">
                <p className="text-blue-300 font-semibold mb-2 flex items-center gap-2">
                  📌 Features:
                </p>
                <div className="ml-4 space-y-3">
                  <p className="text-green-300 font-semibold">
                    ✅ Everything from Tier 2
                  </p>
                  <p className="text-green-300 font-semibold">
                    ✅ Ask Kitt Questions Directly – Token analysis, trends, and market insights
                  </p>
                  <div>
                    <p className="text-blue-300 font-semibold mb-2 flex items-center gap-2">
                      🔍 Example Usage:
                    </p>
                    <ul className="space-y-1 text-gray-200 ml-4 text-sm">
                      <li>Can you explain how priority fees works on Solana as well as slippage?</li>
                      <li>Give me a report on &lt;token address&gt;</li>
                      <li>Analyze this chart in details, what are some possible resistance points, entry points and what should my stop loss be? (Please attach chart image)</li>
                      <li>Analyze this chart and give me a prediction for the next 4 hours. Be as detailed as possible. (Please attach chart image)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-900/50 to-red-900/50 rounded-2xl p-5 sm:p-6 border border-orange-500/20">
              <h3 className="text-xl sm:text-2xl font-semibold text-orange-300 mb-3 flex items-center gap-2">
                💎 Tier 4
              </h3>
              <p className="text-yellow-300 font-semibold mb-3 flex items-center gap-2">
                💰 Requirement: 5,000,000+ KS
              </p>
              <div className="mb-3">
                <p className="text-blue-300 font-semibold mb-2 flex items-center gap-2">
                  📌 Features:
                </p>
                <div className="ml-4 space-y-3">
                  <p className="text-green-300 font-semibold">
                    ✅ Everything from Tier 3
                  </p>
                  <p className="text-green-300 font-semibold">
                    ✅ Automatic 1H Calls (Pull in newer contracts and analyze 1H metrics)
                  </p>
                  <ul className="space-y-1 text-gray-200 ml-4 text-sm">
                    <li>Early access to new tokens</li>
                    <li>High risk, high reward</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-900/50 to-amber-900/50 rounded-2xl p-5 sm:p-6 border border-yellow-500/20">
              <h3 className="text-2xl font-semibold text-yellow-300 mb-3 flex items-center gap-2">
                💎 Tier 5
              </h3>
              <p className="text-yellow-300 font-semibold mb-3 flex items-center gap-2">
                💰 Requirement: 10,000,000+ KS
              </p>
              <div className="mb-3">
                <p className="text-blue-300 font-semibold mb-2 flex items-center gap-2">
                  📌 Features:
                </p>
                <div className="ml-4 space-y-3">
                  <p className="text-green-300 font-semibold">
                    ✅ Everything from Tier 4
                  </p>
                  <p className="text-green-300 font-semibold">
                    ✅ On Demand calls at any Timeframe (30m, 1h, 2h, 4h, 8h, 24h)
                  </p>
                  <p className="text-green-300 font-semibold">
                    ✅ Beta Testing: Clustermap, Watch Token, and Watch Wallet
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black/30 rounded-2xl p-5 sm:p-6 mt-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-300 mb-3 flex items-center gap-2">
              📊 Timeframe Details:
            </h3>
            <ul className="space-y-2 text-gray-200">
              <li><strong className="text-blue-300">2H, 4H, 8H, and 24H Calls:</strong> Only include tokens older than the selected timeframe</li>
              <li><strong className="text-blue-300">30m & 1H Calls:</strong> No contract age requirement! These calls can include brand-new contracts that just launched, making them the earliest entries possible</li>
              <li className="text-orange-300">High risk, high reward</li>
            </ul>
          </div>

          <div className="bg-black/30 rounded-2xl p-5 sm:p-6 mt-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-purple-300 mb-3 flex items-center gap-2">
              🔬 Advanced Features:
            </h3>
            <ul className="space-y-3 text-gray-200">
              <li><strong className="text-purple-300">Clustermap:</strong> Uses advanced graph analysis to detect coordinated wallet clusters, identifying bot activity, suspicious funding sources, and pre-planned dumps</li>
              <li><strong className="text-purple-300">Watch Token:</strong> Track big buys, sells, liquidity shifts, and whale moves for any token. Get instant alerts on real-time market events</li>
              <li><strong className="text-purple-300">Watch Wallet:</strong> Monitor key wallets and get instant alerts on high-value transactions and new token interactions</li>
            </ul>
          </div>

          <div className="bg-black/30 rounded-2xl p-5 sm:p-6 mt-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-green-300 mb-3 flex items-center gap-2">
              🔍 Commands/Example Usage:
            </h3>
            <div className="space-y-4">
              <div className="overflow-x-auto">
                <ul className="space-y-1 text-gray-200 font-mono text-sm min-w-[32rem]">
                  <li>/help</li>
                  <li>/calls &lt;timeframe&gt; [chain]</li>
                  <li>/clustermap &lt;token address&gt;</li>
                  <li>/watchtoken &lt;token address&gt;</li>
                  <li>/watchwallet &lt;wallet address&gt;</li>
                  <li>/tokenstop - Stop tracking the token you are watching</li>
                  <li>/walletstop - Stop tracking the wallet you are watching</li>
                </ul>
              </div>
              
              <div className="overflow-x-auto">
                <p className="text-blue-300 font-semibold mb-2">Examples:</p>
                <ul className="space-y-1 text-gray-200 font-mono text-sm ml-4 min-w-[32rem]">
                  <li>/calls 2hr - Get 2 hour calls (for Solana by default)</li>
                  <li>/calls 1hr ethereum - Get 1 hour calls for Ethereum</li>
                  <li>/clustermap 0x1234567890123456789012345678901234567890 - Analyze a specific token's cluster</li>
                  <li>/watchtoken 0x1234567890123456789012345678901234567890 - Track a specific token</li>
                  <li>/watchwallet 0x1234567890123456789012345678901234567890 - Track a specific wallet</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );

  // ==================== TRADING BOT (texts intact; mobile layout tweaks only) ====================
  const TradingBotPage = () => (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
        Trading Bot (Coming soon)
      </h1>
      
      <div className="bg-gradient-to-br from-red-900/50 to-orange-900/50 rounded-3xl p-6 sm:p-8 backdrop-blur-sm border border-red-500/20 space-y-8">
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-red-400 mb-4">Kitt AI Auto-Trading</h2>
          
          <div className="bg-black/30 rounded-2xl p-6 mb-6">
            <h3 className="text-2xl font-semibold text-orange-300 mb-3">Executive Summary</h3>
            <p className="text-gray-200 leading-relaxed">
              Kitt AI is an autonomous trading intelligence developed by KittySpin to identify, execute, and optimise cryptocurrency trades on behalf of $KS holders. Phase 1 of the Auto-Trading system is live, providing fully monitored real-time trades and continual self-improvement without manual intervention.
            </p>
          </div>

          <div className="bg-black/30 rounded-2xl p-6 mb-6">
            <h3 className="text-2xl font-semibold text-orange-300 mb-3">Vision and Purpose</h3>
            <p className="text-gray-200 leading-relaxed">
              Kitt AI aims to deliver consistent, data-driven trading performance while maintaining full transparency. By combining modular architecture with machine learning and self-modifying code, Kitt AI continuously raises its own performance ceiling and protects community capital.
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
                  <td className="px-6 py-4">Streams on-chain data, market depth, order books, social sentiment, and macro feeds.</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="px-6 py-4 font-semibold text-red-300">Evaluators</td>
                  <td className="px-6 py-4">Decision logic</td>
                  <td className="px-6 py-4">Converts raw data into trade signals, confidence scores, and risk metrics.</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="px-6 py-4 font-semibold text-red-300">Actions</td>
                  <td className="px-6 py-4">Execution layer</td>
                  <td className="px-6 py-4">Places, edits, and closes orders, updates stop-loss and take-profit levels.</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="px-6 py-4 font-semibold text-red-300">Systems</td>
                  <td className="px-6 py-4">Deployment wrappers</td>
                  <td className="px-6 py-4">Telegram Auto-Trading interface (live), future web and mobile wrappers.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-red-300">Services</td>
                  <td className="px-6 py-4">Background utilities</td>
                  <td className="px-6 py-4">Logging, authentication, compliance checks, and alert delivery.</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-gray-200 leading-relaxed mt-4">
            This modular design enables rapid scaling across new exchanges, chains, and user interfaces.
          </p>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-red-400 mb-4">Core Functionality</h2>
          
          <div className="space-y-6">
            <div className="bg-black/30 rounded-2xl p-6">
              <h3 className="text-2xl font-semibold text-orange-300 mb-3">3.1 Autonomous Trading Engine (Phase 1 Live)</h3>
              <ul className="space-y-2 text-gray-200">
                <li>Executes live trades using pooled KS treasury funds.</li>
                <li>Supports multiple simultaneous strategies per market pair.</li>
                <li>Tracks each position in real time for PnL, exposure, and risk limits.</li>
              </ul>
            </div>

            <div className="bg-black/30 rounded-2xl p-6">
              <h3 className="text-2xl font-semibold text-orange-300 mb-3">3.2 Smart Trade Tracking</h3>
              <ul className="space-y-2 text-gray-200">
                <li><strong className="text-red-300">activeTradesManager</strong> maintains an up-to-the-second ledger of open orders.</li>
                <li><strong className="text-red-300">manageActiveTrades</strong> respects user-defined parameters such as maximum allocation or preferred risk profile.</li>
              </ul>
            </div>

            <div className="bg-black/30 rounded-2xl p-6">
              <h3 className="text-2xl font-semibold text-orange-300 mb-3">3.3 Feedback and Continuous Learning</h3>
              <ul className="space-y-2 text-gray-200">
                <li><strong className="text-red-300">feedbackAndLearning</strong> captures every win, loss, and user note.</li>
                <li>Trade outcomes are re-run through the Evaluator layer to adjust model weights, improving signal quality with each cycle.</li>
              </ul>
            </div>

            <div className="bg-black/30 rounded-2xl p-6">
              <h3 className="text-2xl font-semibold text-orange-300 mb-3">3.4 Self-Healing Code</h3>
              <p className="text-gray-200 leading-relaxed">
                Kitt AI can detect logic faults, write corrective code, test in a sandbox, document changes, and commit them to its repository. This closed loop reduces human maintenance and accelerates innovation.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-red-400 mb-4">Complete Data Lifecycle</h2>
          
          <div className="space-y-4">
            <div className="bg-black/30 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-orange-300 mb-2">Entry</h3>
              <p className="text-gray-200">Timestamp, strategy ID, and market conditions recorded.</p>
            </div>

            <div className="bg-black/30 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-orange-300 mb-2">Monitoring</h3>
              <p className="text-gray-200">Position metrics streamed to activeTradesManager.</p>
            </div>

            <div className="bg-black/30 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-orange-300 mb-2">Exit</h3>
              <p className="text-gray-200">Outcome, slippage, and execution quality logged.</p>
            </div>

            <div className="bg-black/30 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-orange-300 mb-2">Re-evaluation</h3>
              <p className="text-gray-200"><strong className="text-red-300">reCheckExitedTrade</strong> benchmarks result against fresh market context.</p>
            </div>

            <div className="bg-black/30 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-orange-300 mb-2">Storage</h3>
              <p className="text-gray-200"><strong className="text-red-300">storeTradeData</strong> archives full trade history for auditability and model training.</p>
            </div>
          </div>

          <p className="text-gray-200 leading-relaxed mt-6">
            All records persist indefinitely, ensuring that no information is lost and that historical analysis remains robust.
          </p>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-red-400 mb-4">Transparency and Reporting</h2>
          
          <div className="bg-black/30 rounded-2xl p-6 mb-6">
            <h3 className="text-2xl font-semibold text-orange-300 mb-3">Telegram Control Center (Current Release)</h3>
            <ul className="space-y-2 text-gray-200">
              <li>Automatic posts for entries, exits, real-time PnL, and periodic performance summaries.</li>
              <li>Community receives push notifications without requesting updates.</li>
              <li>Future dashboard will extend visibility to web and mobile platforms.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-red-400 mb-4">Security and Reliability</h2>
          
          <ul className="space-y-3 text-gray-200">
            <li><strong className="text-orange-300">Sandbox Testing</strong> – All code patches validate against historical data before merging.</li>
            <li><strong className="text-orange-300">Version Control with CI</strong> – Continuous integration prevents unverified logic from reaching production.</li>
            <li><strong className="text-orange-300">Encrypted API Keys</strong> – Execution credentials are stored and rotated following best-practice key-management protocols.</li>
          </ul>
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
                {/* Phase 1 */}
                <tr className="border-b border-gray-700">
                  <td className="px-6 py-4 font-semibold text-red-300 whitespace-nowrap">Phase&nbsp;1</td>
                  <td className="px-6 py-4 text-green-300 whitespace-nowrap">Live</td>
                  <td className="px-6 py-4 whitespace-nowrap">Internal capital only</td>
                  <td className="px-6 py-4">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Kitt trades with treasury funds</li>
                      <li>Every entry, exit, and rationale posted in Telegram</li>
                      <li>Profit-card recap after each closed trade</li>
                      <li>Continues until the community approves live-capital readiness</li>
                    </ul>
                  </td>
                </tr>

                {/* Phase 2 */}
                <tr className="border-b border-gray-700">
                  <td className="px-6 py-4 font-semibold text-red-300 whitespace-nowrap">Phase&nbsp;2</td>
                  <td className="px-6 py-4 text-yellow-300 whitespace-nowrap">In preparation</td>
                  <td className="px-6 py-4 whitespace-nowrap">Controlled user onboarding</td>
                  <td className="px-6 py-4">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Autotrading opens to holders</li>
                      <li>One concurrent position per user, conservative sizing</li>
                      <li>Real-time monitoring and feedback loop remains active</li>
                    </ul>
                  </td>
                </tr>

                {/* Phase 3 */}
                <tr className="border-b border-gray-700">
                  <td className="px-6 py-4 font-semibold text-red-300 whitespace-nowrap">Phase&nbsp;3</td>
                  <td className="px-6 py-4 text-blue-300 whitespace-nowrap">Planned</td>
                  <td className="px-6 py-4 whitespace-nowrap">Scaled user capacity</td>
                  <td className="px-6 py-4">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Telegram bot supports two to five simultaneous trades per user</li>
                      <li>Adaptive risk tiers introduced</li>
                      <li>Additional analytics modules activated</li>
                    </ul>
                  </td>
                </tr>

                {/* Phase 4 */}
                <tr>
                  <td className="px-6 py-4 font-semibold text-red-300 whitespace-nowrap">Phase&nbsp;4</td>
                  <td className="px-6 py-4 text-blue-300 whitespace-nowrap">Planned</td>
                  <td className="px-6 py-4 whitespace-nowrap">Full ecosystem rollout</td>
                  <td className="px-6 py-4">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Launch of web dashboard with portfolio views, strategy toggles, and performance analytics</li>
                      <li>Telegram assistant reaches feature parity with the website</li>
                      <li>Cross-platform API for future exchange integrations</li>
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
              <h3 className="text-xl font-semibold text-orange-300 mb-2">24 / 7 Automated Alpha</h3>
              <p className="text-gray-200">Market coverage without sleep.</p>
            </div>

            <div className="bg-black/30 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-orange-300 mb-2">Full Audit Trail</h3>
              <p className="text-gray-200">Every trade, parameter, and outcome is recorded for verification.</p>
            </div>

            <div className="bg-black/30 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-orange-300 mb-2">Self-Improving Edge</h3>
              <p className="text-gray-200">Performance compounds as Kitt learns from live results and community feedback.</p>
            </div>

            <div className="bg-black/30 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-orange-300 mb-2">Alignment with Treasury</h3>
              <p className="text-gray-200">Profits funnel back into KS buybacks, and development funds.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-red-400 mb-4">Conclusion</h2>
          <p className="text-gray-200 leading-relaxed">
            Kitt AI has evolved from analytics assistant to fully autonomous trader. With Phase 1 operational, holders already benefit from real-time execution and transparent reporting. Future phases will broaden platform reach, deepen adaptive intelligence, and further align trading success with the long-term value of the KS ecosystem.
          </p>
          <p className="text-orange-300 font-semibold text-center mt-6 text-lg">
            Kitt AI trades, learns, and codes so the community can focus on growth.
          </p>
        </section>
      </div>
    </div>
 );

  // 4) Nova página KS Story com tema pink/rosado escuro,

  const KSHistoryPage = () => (
  <div className="max-w-4xl mx-auto space-y-8">
    <h1 className="text-3xl sm:text-4xl font-bold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-pink-500 tracking-tight">
      KS Story – A Tribute to the Spinning Kitty
    </h1>

    {/* Imagem de abertura */}
    <div className="flex justify-center">
      <img
        src="/spinning.gif"
        alt="Spinning Kitty Tribute"
        className="w-full max-w-[280px] sm:max-w-[320px] h-auto object-contain rounded-2xl shadow-lg"
      />
    </div>

    {/* Texto introdutório */}
    <p className="text-center text-sm text-pink-200/80">
      Before Kitt, there was the Spinning Kitty — this page is our homage.
    </p>

    <div className="bg-gradient-to-br from-pink-950/70 via-pink-900/60 to-purple-900/60 rounded-3xl p-6 sm:p-8 backdrop-blur-sm border border-pink-500/20 space-y-8 shadow-[0_0_40px_-15px_rgba(236,72,153,0.35)]">
      {/* Texto principal */}
      <div className="space-y-5">
        <p className="text-lg sm:text-xl text-pink-50/95 leading-relaxed">
          Before there was Kitt, there was her. <span className="text-pink-300 font-semibold">The Spinning Kitty</span>.
        </p>
        <p className="text-lg sm:text-xl text-pink-50/95 leading-relaxed">
          Born from memes, chaos, and pure internet magic, she didn’t just spin… she pulled us all into her orbit.
        </p>
        <p className="text-lg sm:text-xl text-pink-50/95 leading-relaxed">
          We laughed, we memed, we spammed timelines.
          Every spin was a statement, every joke a piece of the lore.
        </p>
        <p className="text-lg sm:text-xl text-pink-50/95 leading-relaxed">
          She wasn’t AI. She wasn’t code. She was <span className="text-pink-300 font-semibold">Community</span>.
          She was the spark that lit the path we walk today.
        </p>
        <p className="text-lg sm:text-xl text-pink-50/95 leading-relaxed">
          From those wild, early days to the polished, AI Kitt you see now, it’s all connected.
          The Kitty still spins… just in a whole new way.
        </p>
        <p className="text-lg sm:text-xl text-pink-100 leading-relaxed font-semibold">
          Here’s to the origins, the old memes, and the journey that brought us here.
          <br />
          <span className="text-pink-300">The Kitty Keeps Spinning!</span>
        </p>
      </div>

      {/* Grade de 4 imagens lado a lado */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((num) => (
          <div
            key={num}
            className="rounded-xl overflow-hidden bg-pink-900/30 border border-pink-500/20"
          >
            <div className="aspect-[4/3]">
              <img src="/moon3.jpg" alt={`KS Story ${num}`} className="w-full h-full object-cover" />
            </div>
          </div>
        ))}
      </div>
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
      case 'history':
        return <KSHistoryPage />;
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
              { id: 'trading', label: 'Trading Bot', icon: '🤖' },
              // Nova aba depois de Trading Bot:
              { id: 'history', label: 'KS Story', icon: '💖' }, // troque para 'KS Story' se preferir tom narrativo
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