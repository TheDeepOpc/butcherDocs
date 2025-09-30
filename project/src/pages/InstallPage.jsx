import { Download, Terminal, CheckCircle, AlertCircle, Copy } from 'lucide-react';
import { useState } from 'react';

export default function InstallPage() {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const commands = [
    {
      title: "1. Repository ni klonlash",
      command: "git clone https://github.com/TheDeepOpc/butcher.git",
      description: "GitHub dan loyihani yuklab oling"
    },
    {
      title: "2. Katalogga kirish",
      command: "cd butcher",
      description: "Loyiha papkasiga o'ting"
    },
    {
      title: "3. Skriptlarga ruxsat berish",
      command: "chmod +x setup.sh || chmod +x *.sh",
      description: "Barcha skriptlarni bajarilishi mumkin qilish"
    },
    {
      title: "4. Setup ni ishga tushirish",
      command: "sudo ./setup.sh",
      description: "Asosiy dasturni ishga tushiring"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-gray-100 pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 via-black to-black"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <Download className="w-10 h-10 text-green-400" />
            <h1 className="text-4xl font-bold text-green-400 font-mono">O'RNATISH</h1>
          </div>
          <p className="text-gray-400 text-lg">
            Butcher Toolkit ni o'rnatish bo'yicha to'liq qo'llanma
          </p>
        </div>

        <div className="space-y-8">
          <section className="bg-gray-900/50 border border-green-500/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-green-400 mb-6 font-mono">TALABLAR</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="bg-black/50 p-6 rounded border border-green-500/30">
                <h3 className="text-green-400 font-bold mb-4 flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>tizim talablari</span>
                </h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• 2GB bo'sh disk xotirasi</li>
                  <li>• 4GB RAM (8GB tavsiya etiladi)</li>
                  <li>• 2GHz yoki undan yuqori protsessor</li>

                  
                  
                </ul>
              </div>
              <div className="bg-black/50 p-6 rounded border border-green-500/30">
                <h3 className="text-green-400 font-bold mb-4 flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Operatsion tizim</span>
                </h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Linux (Debian/Ubuntu tavsiya)</li>
                  <li>• Kali Linux (VM tavsiya etilmaydi)</li>
                  <li>• Arch Linux</li>
                  <li>• Windows Subsystem for Linux (tavsiya etilmaydi)</li>
                  <li>• Dual Boot</li>
                </ul>
              </div>
               <div className="bg-black/50 p-6 rounded border border-green-500/30">
                <h3 className="text-green-400 font-bold mb-4 flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Butcher istaydi</span>
                </h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Root huquqlari bo'lishini</li>
                  <li>• Git o'rnatilgan bo'lishini</li>
                  <li>• Bash shellda ishlash imkoniyati</li>
                  <li>• Internet aloqasi bo'lishini</li>
                </ul>
              </div>
   <div className="bg-black/50 p-6 rounded border border-green-500/30">
                <h3 className="text-green-400 font-bold mb-4 flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Mr/Miss_Butcher Talablari</span>
                </h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Linux Basics </li>
                  <li>• Windows Basics </li>
                  <li>• Programming language more than 0</li>
                  <li>• coffee(optional)</li>
                </ul>
              </div>
               
          {/* bitta bolib tursin  toliq */}
          
            </div>
          </section>

          <section className="bg-gray-900/50 border border-green-500/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-green-400 mb-6 font-mono">BOSQICHMA-BOSQICH O'RNATISH</h2>
            <div className="space-y-4">
              {commands.map((item, index) => (
                <div key={index} className="bg-black/50 border border-green-500/30 rounded-lg overflow-hidden">
                  <div className="bg-green-500/10 px-6 py-3 border-b border-green-500/30">
                    <h3 className="text-green-400 font-bold font-mono">{item.title}</h3>
                    <p className="text-gray-400 text-sm mt-1">{item.description}</p>
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <code className="text-green-400 font-mono text-sm flex-1">{item.command}</code>
                    <button
                      onClick={() => copyToClipboard(item.command, index)}
                      className="ml-4 px-3 py-2 bg-green-500/20 hover:bg-green-500/30 text-green-400 rounded transition-all duration-200 flex items-center space-x-2"
                    >
                      <Copy className="w-4 h-4" />
                      <span className="text-xs">{copiedIndex === index ? 'Copied!' : 'Copy'}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gray-900/50 border border-green-500/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-green-400 mb-6 font-mono">QOIDA VA TAVSIYALAR</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 bg-black/50 p-4 rounded border border-green-500/30">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-green-400 font-bold mb-2">Internet aloqasi</h3>
                  <p className="text-gray-300 text-sm">
                    O'rnatish jarayonida paketlar yuklab olinadi. Barqaror internet aloqasiga ega bo'ling.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 bg-black/50 p-4 rounded border border-green-500/30">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-green-400 font-bold mb-2">Root huquqlari</h3>
                  <p className="text-gray-300 text-sm">
                    Ba'zi paketlar sudo orqali o'rnatiladi. Sizdan parol so'ralishi mumkin.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 bg-black/50 p-4 rounded border border-green-500/30">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-green-400 font-bold mb-2">Xotira</h3>
                  <p className="text-gray-300 text-sm">
                    Kamida 2GB bo'sh disk xotirasi tavsiya etiladi barcha paketlar uchun.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gray-900/50 border border-green-500/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-green-400 mb-6 font-mono">O'RNATILADIGAN PAKETLAR</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { name: 'nmap', desc: 'Port scanner' },
                { name: 'nikto', desc: 'Web vuln scanner' },
                { name: 'ffuf', desc: 'Web fuzzer' },
                { name: 'whatweb', desc: 'Tech identifier' },
                { name: 'wpscan', desc: 'WordPress scanner' },
                { name: 'wget', desc: 'Web downloader' },
                { name: 'bettercap', desc: 'MITM framework' },
                { name: 'torsocks', desc: 'Tor wrapper' },
                { name: 'aircrack-ng', desc: 'WiFi security' },
                { name: 'jq', desc: 'JSON processor' },
                { name: 'dig', desc: 'DNS lookup' },
                { name: 'curl', desc: 'HTTP client' },
              ].map((pkg, index) => (
                <div key={index} className="bg-black/50 p-4 rounded border border-green-500/30">
                  <p className="text-green-400 font-bold font-mono">{pkg.name}</p>
                  <p className="text-gray-400 text-sm mt-1">{pkg.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-yellow-900/20 border border-yellow-500/30 rounded p-4">
              <p className="text-yellow-400 text-sm">
                <strong>Eslatma:</strong> settings.sh barcha kerakli paketlarni avtomatik tekshiradi va o'rnatadi.
                Qo'lda o\'rnatish shart emas.
              </p>
            </div>
          </section>

          <section className="bg-gray-900/50 border border-green-500/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-green-400 mb-6 font-mono">MUAMMOLARNI BARTARAF ETISH</h2>
            <div className="space-y-4">
              <div className="bg-black/50 border-l-4 border-red-500 p-4">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-red-400 font-bold mb-2">Permission denied</h3>
                    <p className="text-gray-300 text-sm mb-2">
                      Agar "permission denied" xatosi chiqsa:
                    </p>
                    <code className="text-green-400 text-sm bg-black/50 px-3 py-1 rounded">
                      chmod +x *.sh
                    </code>
                  </div>
                </div>
              </div>

              <div className="bg-black/50 border-l-4 border-red-500 p-4">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-red-400 font-bold mb-2">Command not found</h3>
                    <p className="text-gray-300 text-sm mb-2">
                      Agar buyruq topilmasa, paketlarni qayta o'rnatib ko'ring:
                    </p>
                    <code className="text-green-400 text-sm bg-black/50 px-3 py-1 rounded">
                      sudo ./settings.sh
                    </code>
                  </div>
                </div>
              </div>

              <div className="bg-black/50 border-l-4 border-red-500 p-4">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-red-400 font-bold mb-2">Network error</h3>
                    <p className="text-gray-300 text-sm mb-2">
                      Agar tarmoq xatosi yuz bersa:
                    </p>
                    <ul className="text-gray-300 text-sm space-y-1 ml-4 list-disc">
                      <li>Internet aloqangizni tekshiring</li>
                      <li>DNS sozlamalarini tekshiring</li>
                      <li>Proxy/VPN sozlamalarini o'chiring</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-green-900/20 to-gray-900/50 border border-green-500/30 rounded-lg p-8">
            <div className="text-center">
              <Terminal className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-400 mb-3 font-mono">
                O'rnatish muvaffaqiyatli!
              </h3>
              <p className="text-gray-300 mb-6">
                Endi Butcher Toolkit dan foydalanishni boshlashingiz mumkin
              </p>
              <div className="bg-black/50 p-4 rounded border border-green-500/30 font-mono text-sm inline-block">
                <p className="text-green-400">$ ./setup.sh</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
