import React, { useState } from 'react';
import { ShieldCheck, ShieldAlert, AlertTriangle, ArrowUpRight, ArrowDownRight, RefreshCw, Download, Search } from 'lucide-react';
import { CRYPTO_SIMULATION_COINS } from '../data/portfolioData';

export const InteractiveCryptoDemo: React.FC = () => {
  const [coins, setCoins] = useState(CRYPTO_SIMULATION_COINS);
  const [selectedCoin, setSelectedCoin] = useState(CRYPTO_SIMULATION_COINS[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [holdings, setHoldings] = useState<{ [key: string]: number }>({
    btc: 0.25,
    eth: 1.5,
    sol: 10
  });
  const [isExporting, setIsExporting] = useState(false);
  const [feedbackMsg, setFeedbackMsg] = useState('');

  const filteredCoins = coins.filter(
    (c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPortfolioValue = Object.entries(holdings).reduce((total, [coinId, amount]) => {
    const coin = coins.find((c) => c.id === coinId);
    return total + (coin ? coin.price * amount : 0);
  }, 0);

  const simulateMarketTick = () => {
    setCoins((prev) =>
      prev.map((c) => {
        const deltaPercent = (Math.random() * 2 - 1) * (c.safe ? 1.5 : 8.0);
        const newPrice = Math.max(0.000001, c.price * (1 + deltaPercent / 100));
        return {
          ...c,
          price: Number(newPrice.toFixed(newPrice < 1 ? 6 : 2)),
          change24h: Number((c.change24h + deltaPercent * 0.2).toFixed(2))
        };
      })
    );
    setFeedbackMsg('Refreshed real-time prices via simulated market stream!');
    setTimeout(() => setFeedbackMsg(''), 3000);
  };

  const handleExportCSV = () => {
    setIsExporting(true);
    const headers = 'Asset,Symbol,Holdings,Live Price ($),Total Value ($),Risk Status\n';
    const rows = Object.entries(holdings)
      .map(([id, amount]) => {
        const coin = coins.find((c) => c.id === id);
        if (!coin) return null;
        return `${coin.name},${coin.symbol},${amount},${coin.price},${(coin.price * amount).toFixed(2)},${coin.risk}`;
      })
      .filter(Boolean)
      .join('\n');

    const blob = new Blob([headers + rows], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Crypto_Portfolio_Statement_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    setIsExporting(false);
    setFeedbackMsg('CSV Portfolio Statement downloaded successfully!');
    setTimeout(() => setFeedbackMsg(''), 4000);
  };

  return (
    <div className="rounded-2xl p-4 sm:p-6 bg-slate-900/90 dark:bg-[#0e1f1b] border-2 border-emerald-500/30 text-white shadow-xl">
      
      {/* Simulation Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-emerald-900/40">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold">
              Infosys Springboard 6.0 Engine Preview
            </span>
          </div>
          <h3 className="text-base sm:text-lg font-bold mt-0.5">
            Live Crypto & Scam Risk Simulator
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={simulateMarketTick}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-700/60 text-xs font-mono text-emerald-300 transition-colors cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Tick Prices</span>
          </button>

          <button
            onClick={handleExportCSV}
            disabled={isExporting}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-xs font-semibold text-white transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {feedbackMsg && (
        <div className="mb-4 px-4 py-2 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-medium animate-in fade-in">
          ✓ {feedbackMsg}
        </div>
      )}

      {/* Grid: Left Column Portfolio & Coin Picker, Right Column Scam Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Coins & Holdings */}
        <div className="lg:col-span-7 space-y-4">
          
          {/* Portfolio Metric Strip */}
          <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-black/30 border border-emerald-900/30">
            <div>
              <span className="text-xs text-slate-400 block">Total Portfolio Value</span>
              <span className="text-xl font-bold font-mono text-emerald-400">
                ${totalPortfolioValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            </div>
            <div>
              <span className="text-xs text-slate-400 block">Risk Monitoring</span>
              <span className="text-xs font-semibold text-emerald-300 inline-flex items-center gap-1.5 mt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Active Heuristics Engine
              </span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search coin name or symbol (e.g. BTC, ETH, PepeMoonSafe)..."
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-black/40 border border-emerald-900/40 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500"
            />
          </div>

          {/* Coin Rows */}
          <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
            {filteredCoins.map((coin) => {
              const isSelected = selectedCoin.id === coin.id;
              const isPositive = coin.change24h >= 0;

              return (
                <div
                  key={coin.id}
                  onClick={() => setSelectedCoin(coin)}
                  className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-emerald-950/60 border-emerald-500'
                      : 'bg-black/20 hover:bg-black/40 border-emerald-900/20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center font-bold text-xs font-mono text-emerald-400">
                      {coin.symbol.slice(0, 3)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm">{coin.name}</span>
                        <span className="text-xs font-mono text-slate-400">({coin.symbol})</span>
                      </div>
                      <span className="text-xs font-mono text-slate-300">
                        ${coin.price < 1 ? coin.price.toFixed(6) : coin.price.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className={`text-xs font-mono flex items-center justify-end ${isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {isPositive ? <ArrowUpRight className="w-3 h-3 mr-0.5" /> : <ArrowDownRight className="w-3 h-3 mr-0.5" />}
                      {coin.change24h > 0 ? `+${coin.change24h}%` : `${coin.change24h}%`}
                    </div>
                    <span
                      className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                        coin.safe
                          ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                          : 'bg-rose-950 text-rose-300 border border-rose-800'
                      }`}
                    >
                      {coin.safe ? 'Verified Safe' : 'Scam Warning'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Right Column: Automated Scam Detection Heuristic Inspector */}
        <div className="lg:col-span-5 p-5 rounded-2xl bg-black/40 border border-emerald-900/40 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-emerald-900/30">
              <span className="text-xs font-mono uppercase text-slate-400">
                Security Scanner
              </span>
              <span className="text-xs font-mono text-emerald-400">
                Rule Engine v6.0
              </span>
            </div>

            <h4 className="text-lg font-bold flex items-center gap-2 mb-1">
              {selectedCoin.safe ? (
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              ) : (
                <ShieldAlert className="w-5 h-5 text-rose-500 animate-pulse" />
              )}
              <span>{selectedCoin.name} Analysis</span>
            </h4>

            {/* Risk Gauge */}
            <div className="mt-4 mb-6">
              <div className="flex justify-between text-xs mb-1.5 font-mono">
                <span className="text-slate-400">Threat Score</span>
                <span className={selectedCoin.safe ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>
                  {selectedCoin.riskScore} / 100
                </span>
              </div>
              <div className="h-2.5 w-full bg-slate-800 rounded-full overflow-hidden p-[1px]">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    selectedCoin.safe ? 'bg-emerald-500' : 'bg-rose-500'
                  }`}
                  style={{ width: `${selectedCoin.riskScore}%` }}
                />
              </div>
            </div>

            {/* Findings */}
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2">
                <span className="text-slate-400 shrink-0 font-medium">Contract Audit:</span>
                <span className={selectedCoin.safe ? 'text-emerald-300' : 'text-rose-300 font-semibold'}>
                  {selectedCoin.safe ? 'Verified open source, no honeypot flags.' : 'High risk honeypot code detected.'}
                </span>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-slate-400 shrink-0 font-medium">Liquidity Lock:</span>
                <span className={selectedCoin.safe ? 'text-emerald-300' : 'text-rose-300'}>
                  {selectedCoin.safe ? 'Multi-sig lock verified (>12 months).' : 'Unlocked liquidity; creator can rug-pull.'}
                </span>
              </div>

              {selectedCoin.warning && (
                <div className="p-3 rounded-xl bg-rose-950/60 border border-rose-700/60 text-rose-200 mt-2 flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span className="leading-tight">{selectedCoin.warning}</span>
                </div>
              )}
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-emerald-900/30 text-[11px] text-slate-400">
            Engineered using Spring Boot backend rules & live market price polling.
          </div>
        </div>

      </div>

    </div>
  );
};
