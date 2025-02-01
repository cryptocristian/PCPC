import React from 'react';
import { Brain, Sparkles, Shield, Zap, MessageSquare, ArrowRight } from 'lucide-react';

function FeatureCard({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) {
  return (
    <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all">
      <Icon className="w-8 h-8 text-purple-400 mb-4" />
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center space-x-2">
            <Brain className="w-8 h-8 text-purple-400" />
            <span className="text-2xl font-bold text-white">NOVA</span>
          </div>
          <a 
            href="https://pump.fun" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-medium transition-colors"
          >
            Get Started
          </a>
        </nav>

        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold text-white mb-6">
            Meet NOVA, Your Advanced
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> AI Assistant</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Experience the next generation of AI assistance with NOVA. Powerful, intuitive, and designed to transform the way you work.
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="https://pump.fun" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 transition-colors"
            >
              Try NOVA Now <ArrowRight className="w-5 h-5" />
            </a>
            <button className="border border-white/20 hover:border-purple-400 text-white px-8 py-3 rounded-full font-medium transition-colors">
              Watch Demo
            </button>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <FeatureCard
            icon={Sparkles}
            title="Advanced Intelligence"
            description="Powered by cutting-edge AI models to understand and assist with complex tasks"
          />
          <FeatureCard
            icon={Shield}
            title="Secure & Private"
            description="Your data is encrypted and protected with enterprise-grade security measures"
          />
          <FeatureCard
            icon={Zap}
            title="Lightning Fast"
            description="Get instant responses and real-time assistance whenever you need it"
          />
          <FeatureCard
            icon={MessageSquare}
            title="Natural Conversations"
            description="Engage in fluid, context-aware conversations that feel natural and intuitive"
          />
          <FeatureCard
            icon={Brain}
            title="Continuous Learning"
            description="Adapts and improves based on your interactions and feedback"
          />
          <FeatureCard
            icon={Sparkles}
            title="Multi-talented"
            description="From coding to creative writing, NOVA excels across diverse domains"
          />
        </div>
      </div>

      {/* Social Proof */}
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 max-w-4xl mx-auto border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-8">Trusted by Industry Leaders</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-12 bg-white/10 rounded-lg animate-pulse" />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Brain className="w-6 h-6 text-purple-400" />
              <span className="text-white font-medium">NOVA AI</span>
            </div>
            <p className="text-gray-400">© 2024 NOVA AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;