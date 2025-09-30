import { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import DocsPage from './pages/DocsPage';
import InstallPage from './pages/InstallPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'docs':
        return <DocsPage />;
      case 'install':
        return <InstallPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App;
