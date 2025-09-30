import { Book, AlertTriangle, FileCode, Terminal, Shield, Wifi, Globe, Lock } from 'lucide-react';

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-black text-gray-100 pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 via-black to-black"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <Book className="w-10 h-10 text-green-400" />
            <h1 className="text-4xl font-bold text-green-400 font-mono">DOKUMENTATSIYA</h1>
          </div>
          <p className="text-gray-400 text-lg">
            Butcher Toolkit — To'liq foydalanuvchi qo'llanmasi
          </p>
        </div>

        <div className="space-y-8">
          <section className="bg-gray-900/50 border border-green-500/20 rounded-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <AlertTriangle className="w-6 h-6 text-red-400" />
              <h2 className="text-2xl font-bold text-red-400 font-mono">MUHIM ESLATMA</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Bu vositalar penetratsion test va xavfsizlik auditlari uchun mo'ljallangan.
              Ularni faqat <span className="text-green-400 font-bold">ruxsat olingan tizimlarda</span> va
              yuridik chegaralar ichida ishlating.
            </p>
            <p className="text-red-400 font-bold">
              Noloyiq yoki ruxsatsiz foydalanish — noqonuniy!
            </p>
          </section>

          <section className="bg-gray-900/50 border border-green-500/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-green-400 mb-6 font-mono">1. UMUMIY KO'RINISH</h2>
            <div className="space-y-4 text-gray-300">
              <p className="leading-relaxed">
                Butcher — bash asosida yozilgan pentest toolkit bo'lib, quyidagi funksiyalarni taqdim etadi:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start space-x-3">
                  <Terminal className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span>Interfaol menyu (EN/RU/UZ tillari)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Globe className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span>Web pentest: subdomain enumeration, port scanning, vulnerability scanning</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FileCode className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span>WebCopier — saytni wget bilan klonlash</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Terminal className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span>BITF — ffuf asosida fuzzing (multi-FUZZ qo'llab-quvvatlanadi)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span>MITM / BITM — bettercap bilan ARP spoofing va DNS spoofing</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Lock className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span>Physical — fayllarni ko'rish/ko'chirish va malware tahlili</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Wifi className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span>R.I.P.B — Tor/torsocks bilan anonim skanerlash</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="bg-gray-900/50 border border-green-500/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-green-400 mb-6 font-mono">2. TALABLAR</h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="text-lg font-bold text-green-400 mb-3">Tizim:</h3>
                <ul className="space-y-2 ml-6 list-disc">
                  <li>Linux (Debian/Ubuntu tavsiya qilinadi)</li>
                  <li>bash, sudo</li>
                  <li>Root huquqlari ba'zi modullar uchun</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-green-400 mb-3">Paketlar:</h3>
                <div className="bg-black/50 p-4 rounded border border-green-500/30 font-mono text-sm">
                  <p>git, nikto, ffuf, nmap, whatweb, wpscan,</p>
                  <p>wget, bettercap, torsocks, jq, aircrack-ng</p>
                </div>
                <p className="mt-2 text-sm text-gray-400">
                  settings.sh bu paketlarni tekshiradi va o'rnatadi
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gray-900/50 border border-green-500/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-green-400 mb-6 font-mono">3. FAYL TUZILISHI</h2>
            <div className="bg-black/50 p-6 rounded border border-green-500/30 font-mono text-sm text-gray-300">
              <pre className="whitespace-pre-wrap">
{`/path/to/butcher/
├─ setup.sh         # asosiy launcher
├─ settings.sh      # o'rnatish/tekshiruv skripti
├─ physical.sh      # physical menyusi
├─ tools/
│   ├─ RIPB.sh
│   ├─ BITF.sh
│   ├─ dns.sh
│   └─ ...
├─ WebPentest/
│   ├─ SubdomainResult/
│   ├─ PortScanResult/
│   └─ VulnerabilityScanResult/
└─ WebClones/`}
              </pre>
            </div>
          </section>

          <section className="bg-gray-900/50 border border-green-500/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-green-400 mb-6 font-mono">4. ISHGA TUSHIRISH</h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="text-lg font-bold text-green-400 mb-3">Setup.sh ni ishlatish:</h3>
                <div className="bg-black/50 p-4 rounded border border-green-500/30 font-mono text-sm">
                  <p className="text-green-400">$ cd /path/to/butcher</p>
                  <p className="text-green-400">$ ./setup.sh</p>
                </div>
              </div>
              <div className="bg-yellow-900/20 border border-yellow-500/30 rounded p-4">
                <p className="text-yellow-400 font-bold mb-2">Parol:</p>
                <p className="text-gray-300">
                  Skript birinchi navbatda sizdan parol so'raydi. Parol kiritilganda sha256sum orqali tekshiriladi.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-green-400 mb-3">Parolni o'zgartirish:</h3>
                <div className="bg-black/50 p-4 rounded border border-green-500/30 font-mono text-sm space-y-2">
                  <p className="text-gray-400"># Yangi parol hash yaratish:</p>
                  <p className="text-green-400">$ echo -n 'yangi_parolingiz' | sha256sum</p>
                  <p className="text-gray-400"># Natijani STORED_HASH ga joylashtiring</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gray-900/50 border border-green-500/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-green-400 mb-6 font-mono">5. FUNKSIYALAR</h2>

            <div className="space-y-6">
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-bold text-green-400 mb-3 font-mono">5.1 WebCopier</h3>
                <p className="text-gray-300 mb-3">Saytni wget bilan klonlash:</p>
                <ol className="space-y-2 ml-6 list-decimal text-gray-300">
                  <li>Menyuda WebCopier ni tanlang</li>
                  <li>Domenni kiriting (example.com)</li>
                  <li>HTTPS/HTTP avtomatik tekshiriladi</li>
                  <li>Natija: WebClones/&lt;domain&gt;_&lt;timestamp&gt;/</li>
                </ol>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-bold text-green-400 mb-3 font-mono">5.2 Subdomain Enumeration</h3>
                <p className="text-gray-300 mb-3">Subdomenlarni aniqlash:</p>
                <ol className="space-y-2 ml-6 list-decimal text-gray-300">
                  <li>Web Hacking → Subdomain Enumeration</li>
                  <li>Domen kiriting (example.com)</li>
                  <li>Wordlist: ./tools/sublist.txt</li>
                  <li>dig + curl status tekshirish</li>
                  <li>Natija: WebPentest/SubdomainResult/</li>
                </ol>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-bold text-green-400 mb-3 font-mono">5.3 Port Scanning</h3>
                <p className="text-gray-300 mb-3">Nmap bilan port skanerlash:</p>
                <div className="bg-black/50 p-4 rounded border border-green-500/30 font-mono text-sm text-gray-300 mb-3">
                  <p>- nmap -sT -Pn opsiyalari</p>
                  <p>- RIPB: torsocks orqali anonim skan</p>
                  <p>- Natija: WebPentest/PortScanResult/</p>
                </div>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-bold text-green-400 mb-3 font-mono">5.4 Vulnerability Scanning</h3>
                <p className="text-gray-300 mb-3">Zaifliklarni aniqlash:</p>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="bg-black/50 p-3 rounded border border-green-500/30">
                    <p className="text-green-400 font-bold">1) Nikto</p>
                    <p className="text-sm text-gray-400">Web server scanner</p>
                  </div>
                  <div className="bg-black/50 p-3 rounded border border-green-500/30">
                    <p className="text-green-400 font-bold">2) Nmap Scripts</p>
                    <p className="text-sm text-gray-400">Vuln detection</p>
                  </div>
                  <div className="bg-black/50 p-3 rounded border border-green-500/30">
                    <p className="text-green-400 font-bold">3) WhatWeb</p>
                    <p className="text-sm text-gray-400">Tech fingerprinting</p>
                  </div>
                  <div className="bg-black/50 p-3 rounded border border-green-500/30">
                    <p className="text-green-400 font-bold">4) WPScan</p>
                    <p className="text-sm text-gray-400">WordPress scanner</p>
                  </div>
                </div>
                <p className="text-gray-300">Natija: WebPentest/VulnerabilityScanResult/</p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-bold text-green-400 mb-3 font-mono">5.5 BITF (Fuzzing)</h3>
                <p className="text-gray-300 mb-3">ffuf bilan web discovery:</p>
                <div className="bg-black/50 p-4 rounded border border-green-500/30 font-mono text-sm text-gray-300">
                  <p className="text-gray-400"># URL misoli:</p>
                  <p className="text-green-400">example.com/&#123;BUTCH&#125;</p>
                  <p className="text-gray-400 mt-2"># &#123;BUTCH&#125; → FUZZ ga almashtiriladi</p>
                  <p className="text-gray-400"># Multi-FUZZ qo'llab-quvvatlanadi</p>
                </div>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-bold text-green-400 mb-3 font-mono">5.6 MITM / BITM</h3>
                <p className="text-gray-300 mb-3">Bettercap bilan tarmoq hujumlari:</p>
                <ul className="space-y-2 ml-6 list-disc text-gray-300">
                  <li>Tarmoqda qurilmalarni skan qilish</li>
                  <li>ARP spoofing orqali trafik ushlash</li>
                  <li>DNS spoofing domain hijacking</li>
                  <li>net.sniff — paketlarni ko'rish</li>
                </ul>
                <div className="bg-red-900/20 border border-red-500/30 rounded p-3 mt-3">
                  <p className="text-red-400 text-sm">
                    ⚠️ Faqat ruxsat olingan tarmoqlarda ishlating!
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gray-900/50 border border-green-500/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-green-400 mb-6 font-mono">6. QOIDA VA MASLAHATLAR</h2>
            <div className="space-y-4">
              <div className="bg-black/50 p-4 rounded border border-green-500/30">
                <h3 className="text-green-400 font-bold mb-2">✓ Root huquqlari</h3>
                <p className="text-gray-300 text-sm">
                  Physical, MITM, va WiFi modullari uchun sudo/root kerak
                </p>
              </div>
              <div className="bg-black/50 p-4 rounded border border-green-500/30">
                <h3 className="text-green-400 font-bold mb-2">✓ Wordlist fayllari</h3>
                <p className="text-gray-300 text-sm">
                  ./tools/ katalogida barcha wordlistlar mavjud bo'lishi kerak
                </p>
              </div>
              <div className="bg-black/50 p-4 rounded border border-green-500/30">
                <h3 className="text-green-400 font-bold mb-2">✓ Natijalar</h3>
                <p className="text-gray-300 text-sm">
                  Barcha natijalar WebPentest/ va WebClones/ da saqlanadi
                </p>
              </div>
              <div className="bg-black/50 p-4 rounded border border-green-500/30">
                <h3 className="text-green-400 font-bold mb-2">✓ Tor konfiguratsiyasi</h3>
                <p className="text-gray-300 text-sm">
                  R.I.P.B uchun torsocks va Tor to'g'ri sozlangan bo'lishi kerak
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gray-900/50 border border-green-500/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-green-400 mb-6 font-mono">7. XAVFSIZLIK</h2>
            <div className="space-y-4 text-gray-300">
              <div className="bg-red-900/20 border border-red-500/30 rounded p-4">
                <h3 className="text-red-400 font-bold mb-3">QONUNIY MAS'ULIYAT:</h3>
                <ul className="space-y-2 ml-6 list-disc">
                  <li>Faqat ruxsat olingan tizimlarda ishlang</li>
                  <li>Penetration testing shartnomalari imzolang</li>
                  <li>Barcha testlarni hujjatlashtirib boring</li>
                  <li>Zarar yetkazmaslik tamoyiliga rioya qiling</li>
                  <li>Ma'lumotlarni xavfsiz saqlang</li>
                </ul>
              </div>
              <div className="bg-yellow-900/20 border border-yellow-500/30 rounded p-4">
                <h3 className="text-yellow-400 font-bold mb-3">AXLOQIY KODEKS:</h3>
                <p>
                  Siz topgan zaifliklarni faqat tizim egalariga xabar bering.
                  Uchinchi shaxslarga oshkor qilmang. Xavfsizlik tadqiqoti — mas'uliyatli faoliyat.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-green-900/20 to-gray-900/50 border border-green-500/30 rounded-lg p-8">
            <div className="text-center">
              <Terminal className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-400 mb-3 font-mono">
                Tayyor bo'ldingizmi?
              </h3>
              <p className="text-gray-300 mb-6">
                Butcher Toolkit bilan professional xavfsizlik testlarini boshlang
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
