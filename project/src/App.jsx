import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import DocsPage from './pages/DocsPage';
import InstallPage from './pages/InstallPage';
import {MessageSquareWarning } from 'lucide-react';

const LOCAL_FIRST = 'butcher_firstName';
const LOCAL_LAST = 'butcher_lastName';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showContent, setShowContent] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  // load saved data
  useEffect(() => {
    const f = localStorage.getItem(LOCAL_FIRST) || '';
    const l = localStorage.getItem(LOCAL_LAST) || '';
    if (f || l) {
      setFirstName(f);
      setLastName(l);
      setShowContent(true);
      setCurrentPage('home');
    }
  }, []);

  const handleEnter = () => {
    if (!firstName.trim() || !lastName.trim()) {
      alert('Iltimos, ism va familiyani kiriting!');
      return;
    }
    // save to localStorage
    localStorage.setItem(LOCAL_FIRST, firstName.trim());
    localStorage.setItem(LOCAL_LAST, lastName.trim());

    // show content
    setShowContent(true);
    setCurrentPage('home');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage userName={firstName} userSurname={lastName} />;
      case 'docs':
        return <DocsPage />;
      case 'install':
        return <InstallPage />;
      default:
        return <HomePage userName={firstName} userSurname={lastName} />;
    }
  };

  if (!showContent) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white p-6">
      <div className="w-full max-w-md space-y-6">
        {/* Warning Banner */}
        <div className="flex items-start bg-yellow-800/20 border-l-4 border-yellow-500 p-4 rounded shadow-md">
          <MessageSquareWarning className="w-6 h-6 text-yellow-400 mt-1 mr-3 flex-shrink-0" />
          <div>
            <h2 className="text-sm font-semibold text-yellow-300 mb-1">
              Ogohlantirish: Faqat ruxsat bilan foydalaning
            </h2>
            <p className="text-sm text-yellow-200">
              Ushbu vosita faqat ruxsat olingan xavfsizlik testlari va ta'lim maqsadlari uchun mo‘ljallangan. 
              Noqonuniy foydalanish qat'iyan taqiqlanadi. Mas'uliyat to‘liq foydalanuvchiga tegishli.
            </p>
          </div>
        </div>

        {/* Input Form */}
        <div className="bg-black/70 backdrop-blur border border-green-600/30 rounded-xl shadow-lg p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-mono text-green-300">Ism</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Ismingiz"
                className="w-full px-3 py-2 bg-black border border-green-700 text-green-200 placeholder-green-400 rounded outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div>
              <label className="block text-sm font-mono text-green-300">Familiya</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Familiyangiz"
                className="w-full px-3 py-2 bg-black border border-green-700 text-green-200 placeholder-green-400 rounded outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            <button
              onClick={handleEnter}
              className="w-full py-2 mt-4 bg-green-500 hover:bg-green-600 transition-all rounded text-black font-bold tracking-wide"
            >
              Kirish
            </button>
          </div>
        </div>

        {/* Footer / Version */}
        <div className="text-center text-xs text-gray-500">
          <span>v1.0.0 – Butcher Tool</span>
        </div>
      </div>
    </div>
  );
}


  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App;
