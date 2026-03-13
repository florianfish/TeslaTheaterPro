/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Youtube, 
  Tv, 
  Music, 
  Search, 
  Maximize2, 
  ExternalLink, 
  Info, 
  Settings,
  Clock,
  Battery,
  Wifi,
  ChevronRight
} from 'lucide-react';
import { SERVICES } from './constants';

const TeslaTheaterLogo = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* TV/Screen Frame */}
    <rect x="2" y="4" width="20" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
    
    {/* Tesla-inspired T */}
    <g transform="translate(5.5, 7) scale(0.55)">
      <path 
        d="M0 2C8 -1 16 -1 24 2V4C16 1 8 1 0 4V2Z" 
        fill="currentColor" 
      />
      <path 
        d="M10.5 5C11.5 5 12.5 5 13.5 5L12.5 17C12.3 18 11.7 18 11.5 17L10.5 5Z" 
        fill="currentColor" 
      />
    </g>
    
    {/* Stand */}
    <path d="M9 17L10 20H14L15 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [customUrl, setCustomUrl] = useState('');
  const [showFullscreenInfo, setShowFullscreenInfo] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('fr-FR', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const handleLaunch = (url: string, name: string = "URL personnalisée") => {
    // Standard launch
    setTimeout(() => {
      window.location.href = url;
    }, 500);
  };

  const handleFullscreenLaunch = (url: string, name: string) => {
    // The famous Tesla fullscreen trick using YouTube redirect
    const fullscreenUrl = `https://www.youtube.com/redirect?q=${encodeURIComponent(url)}`;
    setTimeout(() => {
      window.location.href = fullscreenUrl;
    }, 800);
  };

  const handleCustomLaunch = (e: FormEvent) => {
    e.preventDefault();
    if (!customUrl) return;
    let url = customUrl;
    if (!url.startsWith('http')) {
      url = `https://${url}`;
    }
    handleLaunch(url);
  };

  const getIcon = (iconName: string, color: string) => {
    const props = { size: 32, color, strokeWidth: 1.5 };
    switch (iconName) {
      case 'Youtube': return <Youtube {...props} />;
      case 'Tv': return <Tv {...props} />;
      case 'Music': return <Music {...props} />;
      case 'Search': return <Search {...props} />;
      default: return <ExternalLink {...props} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navigation Bar */}
      <nav className="glass-nav sticky top-0 z-50 px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-[#E31937] rounded-lg flex items-center justify-center shadow-lg shadow-[#E31937]/20">
            <TeslaTheaterLogo className="text-white" size={28} />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight">Tesla Theater <span className="text-[#E31937]">Pro</span></h1>
            <p className="status-label">Système de divertissement embarqué</p>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 text-secondary">
            <Wifi size={18} className="text-[#E31937]" />
            <span className="timer-display">LTE</span>
          </div>
          <div className="flex items-center gap-2 text-secondary">
            <Battery size={18} className="text-[#E31937]" />
            <span className="timer-display">82%</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={18} className="text-[#E31937]" />
            <span className="text-lg font-medium timer-display">{formatTime(currentTime)}</span>
          </div>
        </div>
      </nav>

      <main className="flex-1 max-w-7xl mx-auto w-full px-8 py-12">
        {/* Hero Section / Custom URL */}
        <section className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="tesla-card rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8"
          >
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-2">Lancer une URL personnalisée</h2>
              <p className="text-[#8E9299] mb-6">Accédez à n'importe quel site web optimisé pour votre Tesla.</p>
              
              <form onSubmit={handleCustomLaunch} className="relative flex items-center">
                <div className="absolute left-4 text-[#8E9299]">
                  <Search size={20} />
                </div>
                <input 
                  type="text"
                  placeholder="Ex: plex.tv, mycanal.fr..."
                  value={customUrl}
                  onChange={(e) => setCustomUrl(e.target.value)}
                  className="w-full bg-[#0A0A0A] border border-white/10 rounded-2xl py-4 pl-12 pr-32 focus:outline-none focus:border-[#E31937] transition-colors text-lg"
                />
                <button 
                  type="submit"
                  className="absolute right-2 bg-[#E31937] hover:bg-[#C1152E] text-white px-6 py-2 rounded-xl font-medium transition-colors flex items-center gap-2"
                >
                  Lancer <ChevronRight size={18} />
                </button>
              </form>
            </div>

            <div className="hidden md:flex flex-col gap-4">
              <button 
                onClick={() => setShowFullscreenInfo(!showFullscreenInfo)}
                className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <Maximize2 size={20} className="text-[#E31937]" />
                </div>
                <div className="text-left">
                  <p className="font-medium">Mode Plein Écran</p>
                  <p className="text-xs text-[#8E9299]">Comment ça marche ?</p>
                </div>
              </button>
            </div>
          </motion.div>

          <AnimatePresence>
            {showFullscreenInfo && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="mt-4 p-6 bg-[#E31937]/10 border border-[#E31937]/20 rounded-2xl text-sm leading-relaxed">
                  <div className="flex gap-4">
                    <Info className="text-[#E31937] shrink-0" size={20} />
                    <div>
                      <p className="font-bold mb-1">Astuce Plein Écran Tesla :</p>
                      <p>Pour passer en plein écran, nous utilisons une redirection via YouTube. Une fois sur YouTube, cliquez sur le lien de redirection. Le navigateur Tesla passera automatiquement en mode application plein écran.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* Services Grid */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold tracking-tight">Services de Streaming</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {SERVICES.map((service, index) => (
              <motion.button
                key={service.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => handleLaunch(service.url, service.name)}
                className="tesla-card group relative aspect-square rounded-3xl p-6 flex flex-col items-center justify-center gap-4 text-center overflow-hidden"
              >
                {/* Background Glow */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at center, ${service.color}, transparent 70%)` }}
                />
                
                <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300 w-full flex justify-center">
                  {service.logoSvg ? (
                    <svg 
                      viewBox="0 0 24 24" 
                      className="h-16 w-16"
                      dangerouslySetInnerHTML={{ __html: service.logoSvg }}
                    />
                  ) : (
                    getIcon(service.icon, service.color)
                  )}
                </div>
                
                <div className="relative z-10">
                  <p className="font-semibold text-lg">{service.name}</p>
                  <p className="status-label opacity-0 group-hover:opacity-100 transition-opacity">Lancer</p>
                </div>

                {/* Fullscreen Shortcut */}
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleFullscreenLaunch(service.url, service.name);
                  }}
                  className="absolute top-4 right-4 p-2 rounded-xl bg-white/5 opacity-0 group-hover:opacity-100 hover:bg-[#E31937] hover:text-white transition-all text-[#8E9299]"
                  title="Plein écran"
                >
                  <Maximize2 size={16} />
                </button>
              </motion.button>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-auto py-12 px-8 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-[#8E9299] text-sm">
            <p>© 2026 Tesla Theater Pro</p>
            <span className="w-1 h-1 rounded-full bg-white/10" />
            <p>Inspiré par s3xytheater.fr</p>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-[#8E9299] hover:text-white transition-colors text-sm">Aide</a>
            <a href="#" className="text-[#8E9299] hover:text-white transition-colors text-sm">Confidentialité</a>
            <a href="#" className="text-[#8E9299] hover:text-white transition-colors text-sm">Conditions</a>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="status-label">Systèmes Opérationnels</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

