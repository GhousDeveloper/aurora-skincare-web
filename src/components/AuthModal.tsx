import React, { useState } from 'react';
import { X, User, Lock, Mail, CheckCircle, Sparkles } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const AuthModal: React.FC = () => {
  const { isAuthOpen, setIsAuthOpen, showToast } = useShop();
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isAuthOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    setIsLoggedIn(true);
    showToast(
      mode === 'login' ? 'Welcome Back!' : 'Account Created!',
      `Logged in as ${email}. You earned 50 Aurora Glow Points!`
    );
  };

  const handleDemoLogin = () => {
    setEmail('camille@aurora.beauty');
    setPassword('••••••••');
    setName('Camille Rosier');
    setIsLoggedIn(true);
    showToast('Logged in as Camille', 'Aurora VIP Club Member (150 Points).');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 flex items-center justify-center animate-in fade-in duration-150">
      <div
        onClick={() => setIsAuthOpen(false)}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      <div className="relative bg-white rounded-3xl max-w-md w-full shadow-2xl border border-[#EEE6F0] p-6 sm:p-8 z-10">
        
        {/* Close Button */}
        <button
          onClick={() => setIsAuthOpen(false)}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#FAF3FC] hover:bg-[#EEE6F0] flex items-center justify-center text-[#77717D]"
        >
          <X className="w-4 h-4" />
        </button>

        {isLoggedIn ? (
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-full bg-[#FAF3FC] border border-[#EEE6F0] flex items-center justify-center mx-auto mb-3 text-[#A65AC1]">
              <Sparkles className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#24202A] mb-1">
              Hello, {name || email.split('@')[0]}
            </h3>
            <p className="text-xs text-[#77717D] mb-6">
              Aurora Glow Club · <strong>VIP Member</strong>
            </p>

            <div className="bg-[#FAF3FC] rounded-2xl p-4 text-left text-xs mb-6 border border-[#EEE6F0] space-y-2">
              <div className="flex justify-between">
                <span className="text-[#77717D]">Reward Balance</span>
                <span className="font-bold text-[#79358F]">150 Points ($15 Value)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#77717D]">Saved Addresses</span>
                <span className="font-medium text-[#24202A]">123 Beauty Lane, CA</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#77717D]">Recent Orders</span>
                <span className="font-medium text-emerald-600">1 Delivered (Oct 18)</span>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setIsLoggedIn(false)}
                className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl"
              >
                Sign Out
              </button>
              <button
                onClick={() => setIsAuthOpen(false)}
                className="flex-1 py-2.5 bg-[#A65AC1] hover:bg-[#79358F] text-white text-xs font-semibold rounded-xl"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="text-center mb-6">
              <span className="font-serif text-xl font-bold tracking-[0.16em] text-[#24202A] uppercase block">
                AURORA
              </span>
              <span className="text-[9px] tracking-[0.28em] text-[#77717D] uppercase font-medium">
                — BEAUTY CLUB —
              </span>
            </div>

            {/* Mode Switcher */}
            <div className="flex bg-[#FAF3FC] p-1 rounded-xl mb-6 border border-[#EEE6F0]">
              <button
                onClick={() => setMode('login')}
                className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
                  mode === 'login' ? 'bg-white text-[#79358F] shadow-xs' : 'text-[#77717D]'
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setMode('register')}
                className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
                  mode === 'register' ? 'bg-white text-[#79358F] shadow-xs' : 'text-[#77717D]'
                }`}
              >
                Create Account
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              {mode === 'register' && (
                <div>
                  <label className="text-[11px] font-semibold text-[#24202A] block mb-1">
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#77717D] absolute left-3 top-3" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Camille Rosier"
                      required
                      className="w-full pl-9 pr-3 py-2.5 bg-[#FAF3FC] border border-[#EEE6F0] rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-[#A65AC1]"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="text-[11px] font-semibold text-[#24202A] block mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#77717D] absolute left-3 top-3" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@domain.com"
                    required
                    className="w-full pl-9 pr-3 py-2.5 bg-[#FAF3FC] border border-[#EEE6F0] rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-[#A65AC1]"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-semibold text-[#24202A] block mb-1">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-[#77717D] absolute left-3 top-3" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="w-full pl-9 pr-3 py-2.5 bg-[#FAF3FC] border border-[#EEE6F0] rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-[#A65AC1]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#A65AC1] hover:bg-[#79358F] text-white text-xs font-semibold rounded-xl shadow-xs transition-colors cursor-pointer mt-2"
              >
                {mode === 'login' ? 'Sign In to Account' : 'Create My Account'}
              </button>
            </form>

            <div className="mt-4 pt-4 border-t border-[#EEE6F0] text-center">
              <button
                onClick={handleDemoLogin}
                className="text-xs text-[#79358F] font-semibold hover:underline"
              >
                Fast Demo Login (VIP Member Account)
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
