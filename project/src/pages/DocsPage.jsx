import React, { useState } from 'react';
import { Wifi, Shield, Ghost, Menu, Globe, Wrench, FileCode, Search, User } from 'lucide-react';

export default function DocsPage() {
  const tools = [
    {
      id: 'Web Hacking',
      label: 'Web Hacking',
      icon: Globe,
      description: `Web Hacking moduli — 3ta bolimdan iborat bolib unda Subdomainlarni izlash Ochiq portlarni aniqlash va zaifliklarni aniqlash mumkin `,
      use_cases: [
        "Subdomain bu Asosiy domen ichidagi kichik bo‘lim.",
        "Portlar: Tarmoqqa xizmatlarni ulash nuqtasi.",
        "Zaifliklar: Xujumga ochiq tizim kamchiliklari."
      ],
      recommended_tools: ["butcher avtomatlashtirgan"],
      commands: [
        { purpose: "Web Hackingni tanlang", cmd: `
1) Web Hacking
2) Physical Hacking
3) WI-FI hacking
4) MITM (BITM)
5) WebCopier
6) R.I.P.B
7) Spidey Websint
8) Chiqish
kali-Butcher>_ : 1

          
          ` },
        { purpose: "Subdomainlarni tekshirish", cmd: `
Web Hacking

1) Subdomain aniqlash
2) Port skanerlash
3) Zaifliklarni aniqlash
4) Back
kali-Butcher>_ Enter choice [1-4]: 1

Subdomain aniqlash

root-Butcher>_ Maqsadli domenni kiriting (example.com): apple.com
Subdomain aniqlash natijalari

[OK] www.apple.com -> www-apple-com.v.aaplimg.com. (Status: 200) ✅
[DNS ONLY] autodiscover.apple.com -> mailpex.apple.com. (Status: 000) ❌
[DNS ONLY] mobile.apple.com -> mobile.apple.com.akadns.net. (Status: 000) ❌
[OK] beta.apple.com -> beta.v.aaplimg.com. (Status: 200) ✅
[OK] support.apple.com -> prod-support.apple-support.akadns.net. (Status: 200) ✅
[OK] shop.apple.com -> shop.lb-apple.com.akadns.net. (Status: 200) ✅
[DNS ONLY] lists.apple.com -> 17.32.208.205 (Status: 000) ❌




          
          ` },
        { purpose: "Portlarni tekshirish", cmd: `
Web Hacking

1) Subdomain aniqlash
2) Port skanerlash
3) Zaifliklarni aniqlash
4) Back
kali-Butcher>_ Enter choice [1-4]: 2

root-Butcher>_ Enter target IP/domain: apple.com # yoki ip raqamini kiriting
Scanning ports on apple.com...
torsocks -> nmap failed: WARN: you enabled following architectures: amd64 i386 but you 
have installed libtorsocks only for those archs: amd64. The best what you can do is to 
install libtorsocks for all enabled architectures. If you run torsocks with an executable 
from a missing architecture, the connections went directly into the internet and are
NOT redirected via Tor.
Falling back: running nmap without torsocks in TCP-connect mode (-sT -Pn).
Starting Nmap 7.95 ( https://nmap.org ) at 2025-10-02 02:02 +05
Nmap scan report for apple.com (17.253.144.10)
Host is up (0.020s latency).
Other addresses for apple.com (not scanned): 2620:149:af0::10
rDNS record for 17.253.144.10: apple.com.py
Not shown: 97 filtered tcp ports (no-response)
PORT    STATE  SERVICE
135/tcp closed msrpc
139/tcp closed netbios-ssn
445/tcp closed microsoft-ds

Nmap done: 1 IP address (1 host up) scanned in 2.27 seconds

Results saved to: WebPentest/PortScanResult/apple.com.txt
root-Butcher>_ Press Enter to continue...  # menuga otish uchun random tugmani bosing


          
          
          ` },
        { purpose: "Zaifliklarni tekshirish uchun", cmd: `
1) Subdomain aniqlash
2) Port skanerlash
3) Zaifliklarni aniqlash
4) Back
kali-Butcher>_ Enter choice [1-4]: 3          

Zaifliklarni aniqlash

1) Nikto                    # nikto yordamida zaifliklarni qidiradi
2) Nmap (Vuln scripts)      # nmap yordamida zaifliklarni qidiradi     
3) WhatWeb                  # whatWeb framework yordamida zaifliklarni qidiradi
4) WPScan                   # Wordpress saytlarni zaifliklarini qidiradi
root-Butcher>_ Select tool: 1
root-Butcher>_ Enter target domain (example.com): apple.com # zaiflik topmoqchi bolgan domain yoki 
subdomain kiritiladi

Running Nikto on apple.com...
WARN: you enabled following architectures: amd64 i386 but you have installed libtorsocks only 
for those archs: amd64. The best what you can do is to install libtorsocks for all enabled
architectures. If you run torsocks with an executable from a missing architecture,
the connections went directly into the internet and are NOT redirected via Tor.
- Nikto v2.5.0
---------------------------------------------------------------------------
+ Target IP:          17.253.144.10
+ Target Hostname:    apple.com
+ Target Port:        80
+ Start Time:         2025-10-02 02:08:53 (GMT5)
---------------------------------------------------------------------------
+ Server: No banner retrieved
+ /: Retrieved via header: http/1.1 deber5-edge-bx-021.ts.apple.com (acdn/260.16276).
+ /: The anti-clickjacking X-Frame-Options header is not present.
 See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
+ /: Uncommon header 'cdnuuid' found, with contents: d3920bb2-da3d-4562-a204-7ee3f772ad0f-9267101789.
+ /: The X-Content-Type-Options header is not set. This could allow the user agent
 to render the content of the site in a different fashion to the MIME type.
  See: https://www.netsparker.com/web-vulnerability-scanner/vulnerabilities/missing-content-type-header/
+ Root page / redirects to: https://www.apple.com/
^C
Results saved to: WebPentest/VulnerabilityScanResult/apple.com_20251002_020852.txt




          ` }
      ],
      output_dir: "barcha butcher qilgan natijalar Web Pentest Folderida saqlanadi Report uchun",
      artifacts: [
        "./WebPentest/subdomains.txt",
        "./WebPentest/Port Scaning result.txt",
        "./WebPentest/Vuln_results.txt"
      ]
    },

    {
      id: 'Physical Hacking',
      label: 'Physical Hacking',
      icon: Wrench,
      description: `BITM (Butcher In The Middle) — tarmoq segmentida trafikni ushlash, tahlil qilish va (faqat ruxsat bilan) minimal manipulyatsiya qilish uchun mo'ljallangan modul.`,
      use_cases: [
        "Internal network pentest — konfiguratsiyalarni tekshirish",
        "Unencrypted protokollarni identifikatsiyalash",
        "DNS/ARP konfiguratsiyasidagi zaifliklarni aniqlash (authorized)"
      ],
      recommended_tools: ["bettercap", "mitmproxy", "tcpdump", "wireshark", "nmap"],
      commands: [
        { purpose: "Host discovery (nmap)", cmd: "nmap -sn 192.168.1.0/24" },
        { purpose: "Passiv trafik yozib olish (tcpdump)", cmd: "sudo tcpdump -i <INTERFACE> -w ./WebPentest/MITM/capture_YYYYMMDD.pcap" },
        { purpose: "Bettercap interaktiv ishga tushirish", cmd: "sudo bettercap -iface <INTERFACE>" }
      ],
      output_dir: "./WebPentest/MITM/",
      artifacts: [
        "./WebPentest/MITM/capture_YYYYMMDD.pcap",
        "./WebPentest/MITM/http_requests_YYYYMMDD.log"
      ]
    },

    {
      id: 'Wifi Hacking',
      label: 'Wifi Hacking',
      icon: Wifi,
      description: `R.I.P.B — anonimlik va operatsion izlarni kamaytirish uchun yordamchi modul. Trafikni proxylash va log konfiguratsiyasini boshqarish imkoniyatini beradi (ammo butunlay iz yo'q qilinmaydi).`,
      use_cases: [
        "Operatsion izlarni kamaytirish (authorized lab testlari)",
        "Tor orqali servislar bilan sinov (ruxsat bilan)"
      ],
      recommended_tools: ["tor", "torsocks", "proxychains", "syslog-ng"],
      commands: [
        { purpose: "Tor orqali tekshirish (check)", cmd: "torsocks curl https://check.torproject.org/" },
        { purpose: "Dasturiy trafikni Tor orqali ishga tushirish", cmd: "torsocks <your-tool> --target example.test" },
        { purpose: "Proxy orqali CLI buyruq", cmd: "proxychains4 curl https://example.com" }
      ],
      output_dir: "./WebPentest/RIPB/",
      artifacts: [
        "./WebPentest/RIPB/run_YYYYMMDD.log",
        "./WebPentest/RIPB/notes_YYYYMMDD.txt"
      ]
    },
     {
      id: 'B.I.T.M (MITM)',
      label: 'B.I.T.M ',
      icon: User,
      description: `R.I.P.B — anonimlik va operatsion izlarni kamaytirish uchun yordamchi modul. Trafikni proxylash va log konfiguratsiyasini boshqarish imkoniyatini beradi (ammo butunlay iz yo'q qilinmaydi).`,
      use_cases: [
        "Operatsion izlarni kamaytirish (authorized lab testlari)",
        "Tor orqali servislar bilan sinov (ruxsat bilan)"
      ],
      recommended_tools: ["tor", "torsocks", "proxychains", "syslog-ng"],
      commands: [
        { purpose: "Tor orqali tekshirish (check)", cmd: "torsocks curl https://check.torproject.org/" },
        { purpose: "Dasturiy trafikni Tor orqali ishga tushirish", cmd: "torsocks <your-tool> --target example.test" },
        { purpose: "Proxy orqali CLI buyruq", cmd: "proxychains4 curl https://example.com" }
      ],
      output_dir: "./WebPentest/RIPB/",
      artifacts: [
        "./WebPentest/RIPB/run_YYYYMMDD.log",
        "./WebPentest/RIPB/notes_YYYYMMDD.txt"
      ]
    },
     {
      id: 'WebCopier',
      label: 'WebCopier',
      icon: FileCode,
      description: `R.I.P.B — anonimlik va operatsion izlarni kamaytirish uchun yordamchi modul. Trafikni proxylash va log konfiguratsiyasini boshqarish imkoniyatini beradi (ammo butunlay iz yo'q qilinmaydi).`,
      use_cases: [
        "Operatsion izlarni kamaytirish (authorized lab testlari)",
        "Tor orqali servislar bilan sinov (ruxsat bilan)"
      ],
      recommended_tools: ["tor", "torsocks", "proxychains", "syslog-ng"],
      commands: [
        { purpose: "Tor orqali tekshirish (check)", cmd: "torsocks curl https://check.torproject.org/" },
        { purpose: "Dasturiy trafikni Tor orqali ishga tushirish", cmd: "torsocks <your-tool> --target example.test" },
        { purpose: "Proxy orqali CLI buyruq", cmd: "proxychains4 curl https://example.com" }
      ],
      output_dir: "./WebPentest/RIPB/",
      artifacts: [
        "./WebPentest/RIPB/run_YYYYMMDD.log",
        "./WebPentest/RIPB/notes_YYYYMMDD.txt"
      ]
    },
      {
      id: 'R.I.P.B',
      label: 'R.I.P.B',
      icon: Ghost,
      description: `R.I.P.B — anonimlik va operatsion izlarni kamaytirish uchun yordamchi modul. Trafikni proxylash va log konfiguratsiyasini boshqarish imkoniyatini beradi (ammo butunlay iz yo'q qilinmaydi).`,
      use_cases: [
        "Operatsion izlarni kamaytirish (authorized lab testlari)",
        "Tor orqali servislar bilan sinov (ruxsat bilan)"
      ],
      recommended_tools: ["tor", "torsocks", "proxychains", "syslog-ng"],
      commands: [
        { purpose: "Tor orqali tekshirish (check)", cmd: "torsocks curl https://check.torproject.org/" },
        { purpose: "Dasturiy trafikni Tor orqali ishga tushirish", cmd: "torsocks <your-tool> --target example.test" },
        { purpose: "Proxy orqali CLI buyruq", cmd: "proxychains4 curl https://example.com" }
      ],
      output_dir: "./WebPentest/RIPB/",
      artifacts: [
        "./WebPentest/RIPB/run_YYYYMMDD.log",
        "./WebPentest/RIPB/notes_YYYYMMDD.txt"
      ]
    },
    {
      id: 'Spidey Websint',
      label: 'Spidey Websint',
      icon: Search,
      description: `R.I.P.B — anonimlik va operatsion izlarni kamaytirish uchun yordamchi modul. Trafikni proxylash va log konfiguratsiyasini boshqarish imkoniyatini beradi (ammo butunlay iz yo'q qilinmaydi).`,
      use_cases: [
        "Operatsion izlarni kamaytirish (authorized lab testlari)",
        "Tor orqali servislar bilan sinov (ruxsat bilan)"
      ],
      recommended_tools: ["tor", "torsocks", "proxychains", "syslog-ng"],
      commands: [
        { purpose: "Tor orqali tekshirish (check)", cmd: "torsocks curl https://check.torproject.org/" },
        { purpose: "Dasturiy trafikni Tor orqali ishga tushirish", cmd: "torsocks <your-tool> --target example.test" },
        { purpose: "Proxy orqali CLI buyruq", cmd: "proxychains4 curl https://example.com" }
      ],
      output_dir: "./WebPentest/RIPB/",
      artifacts: [
        "./WebPentest/RIPB/run_YYYYMMDD.log",
        "./WebPentest/RIPB/notes_YYYYMMDD.txt"
      ]
    }
  ];

  const [selectedId, setSelectedId] = useState(tools[0].id);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const selected = tools.find(t => t.id === selectedId);

  return (
    <>
      <div style={{ paddingTop: "100px" }} className="docs">
        <div className="container m-auto min-h-screen bg-black text-gray-100 flex flex-col pt-5">
          {/* Header */}
          <header className="flex items-center justify-between px-4 mb-4">
            <h1 className="text-2xl text-green-400 font-mono font-bold">DOKUMENTATSIYA</h1>
            <button className="lg:hidden p-2" onClick={() => setSidebarOpen(!sidebarOpen)}>
              <Menu className="w-6 h-6 text-green-400" />
            </button>
          </header>

          <div className="flex flex-1 overflow-hidden">
            {/* Sidebar */}
            <aside style={{ borderRadius: "12px" }} className={`bg-gray-900/90 w-64 border-r border-green-500/20 h-full overflow-y-auto fixed lg:static z-40 transform lg:translate-x-0 transition-transform duration-200 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
              <ul className="p-4 space-y-2">
                {tools.map(tool => {
                  const Icon = tool.icon;
                  const active = tool.id === selectedId;
                  return (
                    <li key={tool.id}>
                      <button
                        onClick={() => { setSelectedId(tool.id); setSidebarOpen(false); }}
                        className={`w-full text-left flex items-start space-x-3 px-3 py-2 rounded-md ${active ? 'bg-green-800/30' : 'hover:bg-white/5'}`}
                      >
                        <Icon className="w-7 h-7 text-green-300 mt-1" />
                        <div>
                          <div className="font-mono font-semibold text-gray-100">{tool.label}</div>
                          <div className="text-sm text-gray-400">{tool.use_cases[0]}</div>
                        </div>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </aside>

            {/* Overlay for mobile */}
            {sidebarOpen && <div onClick={() => setSidebarOpen(false)} className="fixed inset-0 bg-black/50 lg:hidden z-30"></div>}

            {/* Main content */}
            <main className="flex-1 p-6 overflow-y-auto ml-0 lg:ml-64">
              <h2 className="text-xl font-bold text-green-400 font-mono mb-3">{selected.label}</h2>

              <section className="mb-4">
                <h3 className="text-green-300 font-semibold mb-1">Tavsif</h3>
                <p className="text-gray-300">{selected.description}</p>
              </section>

              <section className="mb-4">
                <h3 className="text-green-300 font-semibold mb-1">Use cases</h3>
                <ul className="list-disc ml-6 text-gray-300">
                  {selected.use_cases.map((u, i) => <li key={i}>{u}</li>)}
                </ul>
              </section>

              <section className="mb-4">
                <h3 className="text-green-300 font-semibold mb-1">Tavsiya etilgan vositalar</h3>
                <div className="text-gray-300">{selected.recommended_tools.join(', ')}</div>
              </section>

              <section className="mb-4">
                <h3 className="text-green-300 font-semibold mb-1">Buyruqlar (commands)</h3>
                <div className="bg-gray-800 p-3 rounded">
                  {selected.commands.map((c, i) => (
                    <div key={i} className="mb-3">
                      <div className="text-sm text-yellow-300 font-semibold">{c.purpose}</div>
                      <pre className="bg-black/40 p-2 rounded text-sm text-gray-200">{c.cmd}</pre>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-4">
                <h3 className="text-green-300 font-semibold mb-1">Natija katalogi va artefaktlar</h3>
                <div className="text-gray-300">Output dir: <span className="font-mono">{selected.output_dir}</span></div>
                <ul className="list-disc ml-6 text-gray-300 mt-2">
                  {selected.artifacts.map((a, i) => <li key={i} className="font-mono">{a}</li>)}
                </ul>
              </section>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
