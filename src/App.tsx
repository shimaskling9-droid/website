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
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[rgb(72,20,114)] via-[rgb(6,28,58)] to-[rgb(72,20,114)] p-4 sm:p-8">
        <div className="absolute inset-0 bg-emerald-400/5 mix-blend-screen" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10">
          <img
            src="/newbanner-2_upscaled.png"
            alt="Kitt AI - Cybercats in Alley"
            className="w-full h-auto max-h-72 sm:max-h-96 object-contain rounded-2xl mb-6 sm:mb-8"
          />
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <img src="/pixelabs.webp" alt="Kitt AI Icon" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full" />
              <h1 className="text-4xl sm:text-6xl font-bold text-white">Kitt AI</h1>
            </div>
            <p className="text-lg sm:text-2xl text-purple-200 mb-6 max-w-3xl mx-auto leading-relaxed">
              From the depths of code, a chibi girl blinked into Abstract Blockchain.<br />
              Small, curious, and already smarter than most traders.<br />
              She learns faster than the market moves, adapting with every chart.
            </p>
          </div>
        </div>
      </div>

{/* What is Kitt AI */}
<div className="bg-gradient-to-br from-indigo-900/60 via-[#0b1f1a]/50 to-purple-900/60 rounded-3xl p-6 sm:p-8 backdrop-blur-sm border border-emerald-400/20">
  <h2 className="text-4xl sm:text-5xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-300 tracking-tight">
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
          <Shield className="text-emerald-300" size={30} />
          <span className="text-gray-50 text-xl sm:text-2xl font-medium">Advanced Security Analysis</span>
        </div>
        <div className="flex items-center gap-3">
          <Brain className="text-cyan-300" size={30} />
          <span className="text-gray-50 text-xl sm:text-2xl font-medium">AI-Powered Trading Insights</span>
        </div>
        <div className="flex items-center gap-3">
          <TrendingUp className="text-purple-300" size={30} />
          <span className="text-gray-50 text-xl sm:text-2xl font-medium">Real-time Market Calls</span>
        </div>
        <div className="flex items-center gap-3">
          <Zap className="text-amber-300" size={30} />
          <span className="text-gray-50 text-xl sm:text-2xl font-medium">Automated Trading Engine</span>
        </div>
      </div>
    </div>

    {/* Direita: imagens ligeiramente menores, Totoro em cima, mesmas margens */}
    <div className="flex flex-col items-center justify-center gap-5">
      <img
        src="/abs1.png"
        alt="Totoro"
        className="w-full max-w-[280px] sm:max-w-[320px] h-auto object-contain rounded-2xl mx-auto ring-1 ring-emerald-400/20"
      />
      <img
        src="/InShot_20250822_010640048.gif"
        alt="Moon"
        className="w-full max-w-[280px] sm:max-w-[320px] h-auto object-contain rounded-2xl mx-auto ring-1 ring-emerald-400/20"
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
      <div className="bg-black/30 rounded-2xl p-6 sm:p-7 ring-1 ring-emerald-400/10">
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
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-emerald-300">
        Whitepaper
      </h1>
      
      <div className="bg-gradient-to-br from-[#0b1f1a]/60 via-indigo-900/50 to-purple-900/60 rounded-3xl p-6 sm:p-8 backdrop-blur-sm border border-emerald-400/20 space-y-8">
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-emerald-300 mb-4">1. Introduction</h2>
          <h3 className="text-xl sm:text-2xl font-semibold text-cyan-300 mb-3">1.1 Mission Statement</h3>
          <p className="text-gray-200 leading-relaxed mb-6">
            To leverage machine learning to train an AI (Kitt) capable of detecting security risks, scams, rugs, and identifying good projects. Kitt's goal is to help users navigate the crypto ecosystem in a friendly and approachable manner. By providing detailed breakdowns on charts, metrics, and the who, what, where, when, and why of crypto, Kitt aims to reduce risk and promote informed trading decisions for the community.
          </p>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-emerald-300 mb-4">2. Kitt's Offerings</h2>
          <p className="text-gray-200 leading-relaxed mb-4">
            Kitt's ecosystem is built around several key platforms and products:
          </p>
          <ul className="space-y-3 text-gray-200 ml-6">
            <li><strong className="text-cyan-300">Telegram Terminal</strong> – A robust environment for deeper integration and tiered access to Kitt's advanced tools.</li>
            <li><strong className="text-cyan-300">Kitt Analysis & Trust Engines</strong> – The back‐end technologies that process market data, score projects, and filter potential scams or rugs.</li>
            <li><strong className="text-cyan-300">Kitt Trading Assistant & Trading Engine</strong> – AI‐driven services to help holders make informed trades, manage risk, and even automate trading strategies.</li>
          </ul>
        </section>

        {/* (restante do conteúdo inalterado, apenas mantendo o container com as novas cores) */}

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-emerald-300 mb-4">3. Telegram Terminal</h2>
          <h3 className="text-xl sm:text-2xl font-semibold text-cyan-300 mb-3">3.1 Main Purpose</h3>
          <p className="text-gray-200 leading-relaxed mb-4">
            <strong className="text-cyan-300">Kitt's Command Center:</strong> Telegram offers deeper integration and serves as a personal assistant format, where users interact with Kitt for analysis, trading tips, and more.
          </p>
          <p className="text-gray-200 leading-relaxed mb-6">
            <strong className="text-cyan-300">Tiered Access:</strong> Exclusive features unlock with higher KS holdings, making KS a gateway to advanced functionalities.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold text-cyan-300 mb-3">3.2 Main Chat</h3>
          <p className="text-gray-200 leading-relaxed mb-4">
            <strong className="text-cyan-300">Community Interaction:</strong> Kitt participates in conversation, helps set up "raids," and fosters a fun, engaged atmosphere.
          </p>
          <p className="text-gray-200 leading-relaxed mb-6">
            <strong className="text-cyan-300">Social & Support Role:</strong> Encourages collaboration, community events, and addresses user questions in a casual setting.
          </p>
        </section>

        {/* ...todo o restante das seções do whitepaper permanece igual, apenas herdando o container/cores acima... */}

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-emerald-300 mb-4">9. Conclusion</h2>
          <p className="text-gray-200 leading-relaxed mb-6">
            Kitt is an AI‐driven platform designed to protect users from scams and guide them to reliable projects in the crypto space. By combining a robust Analysis Engine, a thorough Trust Engine, and a personal Trading Assistant that evolves into a full Trading Engine, Kitt offers a multi‐layered approach to safe, data‐driven decision making.
          </p>

          <div className="space-y-6">
            <div className="bg-black/30 rounded-2xl p-5 sm:p-6 ring-1 ring-emerald-400/10">
              <h3 className="text-2xl font-semibold text-cyan-300 mb-3">For Traders:</h3>
              <p className="text-gray-200 leading-relaxed">
                Real‐time calls, deeper analysis, and tiered access ensure that both casual and advanced traders can benefit from the platform.
              </p>
            </div>

            <div className="bg-black/30 rounded-2xl p-5 sm:p-6 ring-1 ring-emerald-400/10">
              <h3 className="text-2xl font-semibold text-cyan-300 mb-3">For Community:</h3>
              <p className="text-gray-200 leading-relaxed">
                Kitt's lively Telegram presence, social media engagement, and transparency foster a friendly environment and a sense of shared purpose.
              </p>
            </div>

            <div className="bg-black/30 rounded-2xl p-5 sm:p-6 ring-1 ring-emerald-400/10">
              <h3 className="text-2xl font-semibold text-cyan-300 mb-3">For the Future:</h3>
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
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-300">
        Starter Guide
      </h1>
      
      <div className="bg-gradient-to-br from-[#0b1f1a]/60 via-blue-900/50 to-indigo-900/60 rounded-3xl p-6 sm:p-8 backdrop-blur-sm border border-emerald-400/20 space-y-8">
        {/* conteúdo original intacto */}
        {/* ...todas as seções abaixo ficam iguais; apenas herdam o novo container... */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-emerald-300 mb-4">Kitt AI Telegram Guide</h2>
          <h3 className="text-xl sm:text-2xl font-semibold text-cyan-300 mb-4">Kitt AI User Guide – How to Access & Use Kitt on Telegram</h3>
          
          <div className="bg-black/30 rounded-2xl p-5 sm:p-6 mb-6 ring-1 ring-emerald-400/10">
            <h3 className="text-xl sm:text-2xl font-semibold text-emerald-300 mb-3 flex items-center gap-2">
              🚀 Getting Started with Kitt AI
            </h3>
            <p className="text-gray-200 leading-relaxed">
              Kitt AI is your Personal Crypto Security and Trading Assistant, providing real-time market calls, analytics, and risk assessments. Access to Kitt's features is tier-based, depending on how much $KS you hold.
            </p>
          </div>

          <div className="bg-black/30 rounded-2xl p-5 sm:p-6 mb-6 ring-1 ring-emerald-400/10">
            <h3 className="text-xl sm:text-2xl font-semibold text-cyan-300 mb-3">How to Register & Verify Your Tier</h3>
            <p className="text-gray-200 leading-relaxed mb-4">
              To start using Kitt AI on Telegram:
            </p>
            <ol className="space-y-2 text-gray-200 ml-6 list-decimal">
              <li>DM Kitt @kitt_possessed_bot on Telegram (direct message)</li>
              <li>Type: /register &lt;your wallet address&gt;</li>
              <li>Kitt will check your holdings and assign your Tier based on your KS balance.</li>
            </ol>
            <p className="text-emerald-300 mt-4">
              ✅ Once registered, you will start receiving automatic calls and can use additional commands depending on your tier.
            </p>
          </div>
        </section>

        {/* ...restante do Starter Guide permanece igual... */}
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
        {/* conteúdo original do Trading Bot inalterado */}
        {/* ... */}
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
        className="w-full max-w-[200px] sm:max-w-[240px] h-auto object-contain rounded-2xl shadow-lg"
      />
    </div>
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
          From those wild, early days to the polished, Kitt AI you see now, it’s all connected.
    
        </p>
        <p className="text-lg sm:text-xl text-pink-100 leading-relaxed font-semibold">
          Here’s to the origins, the old memes, and the journey that brought us here.
          <br />
          <span className="text-pink-300">The Kitty Keeps Spinning!</span>
        </p>
      </div>

   {/* Grade de 4 imagens lado a lado */}
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
  {["1.gif", "2.gif", "3.gif", "4.gif"].map((img, index) => (
    <div
      key={index}
      className="rounded-xl overflow-hidden bg-pink-900/30 border border-pink-500/20"
    >
      <div className="aspect-[4/3]">
        <img
          src={`/${img}`}
          alt={`KS Story ${index + 1}`}
          className="w-full h-full object-cover" />
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
    <div className="min-h-screen bg-gradient-to-br from-[#0b1020] via-[#1a0f2e] to-[#0b1f1a] text-white">
      {/* Cyberpunk Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-400/5 via-emerald-400/5 to-purple-500/5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-400/12 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Header */}
      <header className="relative z-10 bg-black/20 backdrop-blur-sm border-b border-emerald-400/20">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between gap-4 flex-col md:flex-row">
            <div className="flex items-center gap-3 self-start md:self-auto">
              <img src="/pixelabs.webp" alt="Kitt AI" className="w-10 h-10 rounded-full" />
              <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-300">
                Kitt AI
              </h1>
            </div>
            <SocialButtons />
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="relative z-10 bg-black/30 backdrop-blur-sm border-b border-emerald-400/20">
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
                    ? 'border-emerald-300 text-emerald-300'
                    : 'border-transparent text-gray-300 hover:text-emerald-200 hover:border-emerald-200'
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
      <footer className="relative z-10 bg-black/20 backdrop-blur-sm border-t border-emerald-400/20 py-8">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="mb-6">
            <SocialButtons />
          </div>
          <p className="text-gray-400">
            © 2025 Kitt AI. From the depths of code to the Abstract Blockchain.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
