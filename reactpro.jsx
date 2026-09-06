import React, { useState } from 'react';

export default function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      {/* Navigation */}
      <nav className="w-full bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="h-6 w-6 bg-indigo-600 rounded-md"></div>
          <span className="font-bold text-xl tracking-tight text-slate-900">SimpleApp</span>
        </div>
        <div className="space-x-4">
          <a href="#features" className="text-sm font-medium text-slate-600 hover:text-indigo-600">Features</a>
          <a href="#about" className="text-sm font-medium text-slate-600 hover:text-indigo-600">About</a>
          <button className="text-sm font-medium bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 max-w-4xl mx-auto px-6 py-16 text-center flex flex-col items-center justify-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100 mb-4">
          React + Tailwind CSS
        </span>
        
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
          Build modern interfaces faster without extra dependencies.
        </h1>
        
        <p className="text-lg text-slate-600 max-w-2xl mb-8">
          A lightweight starting template designed using pure React state and utility-first Tailwind styling. Clean, fast, and completely responsive out of the box.
        </p>

        {/* Email Signup Form */}
        {submitted ? (
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-800 font-medium max-w-md w-full">
            Thanks for subscribing! Check your inbox soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
            <input
              type="email"
              required
              placeholder="Enter your email address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}

        {/* Feature Cards Grid */}
        <div id="features" className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-left w-full">
          <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
            <div className="w-10 h-10 bg-indigo-100 text-indigo-600 font-bold rounded-lg flex items-center justify-center mb-4">
              01
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Zero Extra Dependencies</h3>
            <p className="text-slate-600 text-sm">Keeps bundle size small by relying purely on core React hooks and standard Tailwind CSS.</p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
            <div className="w-10 h-10 bg-indigo-100 text-indigo-600 font-bold rounded-lg flex items-center justify-center mb-4">
              02
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Fully Responsive</h3>
            <p className="text-slate-600 text-sm">Uses Tailwind breakpoints to adapt cleanly across mobile, tablet, and desktop views.</p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
            <div className="w-10 h-10 bg-indigo-100 text-indigo-600 font-bold rounded-lg flex items-center justify-center mb-4">
              03
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Interactive State</h3>
            <p className="text-slate-600 text-sm">Includes basic form handling and state switching without needing complex form libraries.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-white border-t border-slate-200 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} SimpleApp. Built with React & Tailwind CSS.
      </footer>
    </div>
  );
}