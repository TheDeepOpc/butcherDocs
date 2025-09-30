import { Terminal, Shield, Wifi, Globe, Lock, Code } from 'lucide-react';

export default function HomePage() {
 const features = [
  {
    icon: Globe,
    title: 'Web hacking ',
    description: 'Subdomenlarni aniqlash, portlarni skanerlash, zaifliklarni aniqlash',
  },
  {
    icon: Wifi,
    title: 'Simsiz hujumlar',
    description: 'Tarmoqlarga hujum qilish imkoniyatlari',
  },
  {
    icon: Shield,
    title: 'B.I.T.M',
    description: 'Tarmoqni ushlash uchun bettercap yordamida ARP spoofing va DNS spoofing qilish ',
  },
  {
    icon: Lock,
    title: 'fizik hujumlar',
    description: 'Fizik zararli dasturlar orqali maqsadli hujumlar qilish',
  },
  {
    icon: Terminal,
    title: 'Veb fuzing',
    description: 'tarmoq havolalarini fuzz qilish',
  },
  {
    icon: Code,
    title: 'R.I.P.B',
    description: 'Server Loglariga sening haqiqiy manzilingni yozmaydi orniga soxta ip manzil jonatadi',
  },
];


  return (
    <div className="min-h-screen bg-black text-gray-100">
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-black"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDI1NSwwLDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40"></div>

      <div className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block mb-6 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full">
              <span className="text-green-400 font-mono text-sm">v1.7.1</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 font-mono">
              <span className="text-green-400">BUTCHER <p style={{fontSize: '17px'}} >Hacktool by TheDeepOpc</p> </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
             Hacktool for Web, Physical, Network, and Wireless Hacking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#features"
                className="px-8 py-4 bg-green-500 hover:bg-green-600 text-black font-bold rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center space-x-2"
              >
                <Terminal className="w-5 h-5" />
                <span>Explore Features</span>
              </a>
              <div className="px-8 py-4 bg-green-500/10 border border-green-500/50 text-green-400 font-mono rounded-lg">
                git clone https://github.com/TheDeepOpc/butcher
              </div>
            </div>
          </div>

          <div id="features" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-sm border border-green-500/20 rounded-lg p-6 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-green-500/20 rounded-lg">
                      <Icon className="w-6 h-6 text-green-400" />
                    </div>
                    <h3 className="text-lg font-bold text-green-400 font-mono">{feature.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-8 mb-20">
            <div className="flex items-start space-x-4">
              <Shield className="w-8 h-8 text-red-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-red-400 mb-2 font-mono">LEGAL DISCLAIMER</h3>
                <p className="text-gray-300 leading-relaxed">
                  Ushbu hacktool zararli maqsadlarda ishlatish uchun moʻljallanmagan. Mualliflar va tarqatuvchilar ushbu dasturdan notoʻgʻri 
                  oydalanish natijasida yuzaga kelgan har qanday zarar yoki yoʻqotishlar uchun javobgarlikni oʻz zimmasiga olmaydi. Har qanday 
                  sinov yoki testdan oldin yozma ruxsat olish majburiydir.
                </p>
              </div>
            </div>
          </div>


        </div>
      </div>

      <footer className="relative border-t border-green-500/30 bg-black/50 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500 font-mono text-sm">
            © Butcher Hack all the systems that are near you.
          </p>
        </div>
      </footer>
    </div>
  );
}
