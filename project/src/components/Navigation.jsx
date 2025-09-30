import { Terminal, FileText, Download, Mail } from 'lucide-react';

export default function Navigation({ currentPage, onNavigate }) {
  const navItems = [
    { id: 'home', label: 'Home', icon: Terminal },
    { id: 'docs', label: 'Documentation', icon: FileText },
    { id: 'install', label: 'Get Started', icon: Download },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-green-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Terminal className="w-8 h-8 text-green-400" />
            <span className="text-xl font-bold text-green-400 font-mono">The Butcher</span>
          </div>
          <div className="flex space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`px-4 py-2 rounded-md transition-all duration-200 flex items-center space-x-2 ${
                    currentPage === item.id
                      ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                      : 'text-gray-400 hover:text-green-400 hover:bg-green-500/10'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline font-mono text-sm">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
