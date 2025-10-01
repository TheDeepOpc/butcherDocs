import { useEffect, useRef, useState } from 'react';
import { Terminal, Shield, Wifi, Globe, Lock, Code, Webhook } from 'lucide-react';

export default function HomePage({ userName, userSurname }) {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  // terminal typing states
  const [promptName, setPromptName] = useState(''); // prompt user (typing)
  const [commandText, setCommandText] = useState('');
  const [showOutput, setShowOutput] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [outputLines, setOutputLines] = useState([]); // NEW: multiple output lines

  // derive displayed greeting
  const fullName = [userName, userSurname].filter(Boolean).join(' ').trim();
  const GREETING_TARGET = fullName ? `Salom ${fullName}` : 'Salom Butcher';
  const PROMPT_NAME = userName && userName.trim() ? userName.trim() : 'root';
  const COMMAND = `echo "${GREETING_TARGET}"`;

  // messages to show after typing finishes
  const genericOutputs = [
    `${GREETING_TARGET}`,
    `yoki Butcher, hacktoolda butun boshli arsenal undan maqsadli hujumlarni `,
    `qilishingiz mumkin`
  ];

  const butcherOutputs = [
    `Alias detected: Butcher`,
    `Welcome back... Butcher.`,
    `hack tool orqali faqat buzish mumkin — sizning arsenal butun tizimni silkitishga yetadi.`
  ];

  // features (unchanged)
  const features = [
    { icon: Globe, title: 'The Butch', description: 'Subdomenlarni aniqlash, portlarni skanerlash, zaifliklarni aniqlash' },
    { icon: Wifi, title: 'BlindNet', description: 'Tarmoqlarga hujum qilish imkoniyatlari' },
    { icon: Shield, title: 'B.I.T.M', description: 'Tarmoqni ushlash uchun bettercap yordamida ARP spoofing va DNS spoofing qilish ' },
    { icon: Lock, title: 'fizik hujumlar', description: 'Fizik zararli dasturlar orqali maqsadli hujumlar qilish' },
    { icon: Webhook, title: 'Spidey WebSint', description: 'tarmoq havolalarini fuzz qilish imkoniyati' },
    { icon: Code, title: 'R.I.P.B', description: 'Server Loglariga sening haqiqiy manzilingni yozmaydi orniga soxta ip manzil jonatadi' },
  ];

  // ---------- Matrix canvas effect (keeps your previous code) ----------
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const letters = '01ӘҒҚЎҲабвгдеёжзийклмнопрстуфхцчшщъыьэюяABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz0123456789＠＃＄％＆＊（）＝＋';
    const fontSize = Math.max(12, Math.floor(Math.min(width, height) / 80));
    let columns = Math.floor(width / fontSize) + 1;
    const drops = new Array(columns).fill(1);

    ctx.font = `${fontSize}px monospace`;

    const INTERVAL_MS = 35;
    let lastTime = performance.now();
    let acc = 0;

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      const newColumns = Math.floor(width / fontSize) + 1;
      if (newColumns > drops.length) {
        for (let i = drops.length; i < newColumns; i++) drops[i] = Math.floor(Math.random() * 100);
      } else {
        drops.length = newColumns;
      }
      columns = newColumns;
      ctx.font = `${fontSize}px monospace`;
    };
    window.addEventListener('resize', handleResize);

    const draw = (now) => {
      const delta = now - lastTime;
      lastTime = now;
      acc += delta;

      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillStyle = `rgba(180, 255, 180, ${Math.random() * 0.9 + 0.4})`;
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        ctx.fillStyle = `rgba(0, 140, 60, 0.6)`;
        if (drops[i] - 1 > 0) {
          ctx.fillText(letters.charAt(Math.floor(Math.random() * letters.length)), i * fontSize, (drops[i] - 1) * fontSize);
        }
      }

      if (acc >= INTERVAL_MS) {
        const steps = Math.floor(acc / INTERVAL_MS);
        acc -= steps * INTERVAL_MS;
        for (let s = 0; s < steps; s++) {
          for (let i = 0; i < drops.length; i++) {
            drops[i] += 1;
            if (drops[i] * fontSize > height && Math.random() > 0.975) {
              drops[i] = 0;
            }
          }
        }
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, width, height);
    lastTime = performance.now();
    acc = 0;
    animationRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // ---------- Typing animation for prompt name and command ----------
  useEffect(() => {
    let nameIdx = 0;
    let cmdIdx = 0;
    let nameTimer = null;
    let cmdTimer = null;
    let outputTimer = null;

    // reset outputLines when retyping
    setOutputLines([]);
    setShowOutput(false);

    nameTimer = setInterval(() => {
      setPromptName((prev) => {
        const next = PROMPT_NAME.slice(0, nameIdx + 1);
        nameIdx++;
        if (nameIdx >= PROMPT_NAME.length) {
          clearInterval(nameTimer);
          setTimeout(() => {
            // start typing command
            cmdTimer = setInterval(() => {
              setCommandText((prevCmd) => {
                const nextCmd = COMMAND.slice(0, cmdIdx + 1);
                cmdIdx++;
                if (cmdIdx >= COMMAND.length) {
                  clearInterval(cmdTimer);
                  // after small delay, show multiple output lines
                  outputTimer = setTimeout(() => {
                    const finalOutputs = (PROMPT_NAME.toLowerCase() === 'butcher' || !fullName) ? butcherOutputs : genericOutputs;
                    setOutputLines(finalOutputs);
                    setShowOutput(true);
                  }, 420);
                }
                return nextCmd;
              });
            }, 40);
          }, 220);
        }
        return next;
      });
    }, 120);

    // blinking cursor
    const blink = setInterval(() => setCursorVisible((v) => !v), 500);

    return () => {
      clearInterval(nameTimer);
      clearInterval(cmdTimer);
      clearTimeout(outputTimer);
      clearInterval(blink);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [PROMPT_NAME, COMMAND, fullName]);

  return (
    <div className="min-h-screen bg-black text-gray-100 relative overflow-hidden">
      {/* Matrix canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0 pointer-events-none" style={{ mixBlendMode: 'screen' }} />
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/60 to-black/80 z-10 pointer-events-none"></div>

      <div className="relative z-20 pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header + features */}
          <div className="text-center mb-20">
            <div className="inline-block mb-6 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full">
              <span className="text-green-400 font-mono text-sm">v1.7.1</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 font-mono">
              <span className="text-green-400">BUTCHER <p style={{ fontSize: '17px' }}>Hacktool by TheDeepOpc</p></span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">Hacktool for Web, Physical, Network, and Wireless Hacking.</p>
          </div>

          <div id="features" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-green-500/20 rounded-lg p-6 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105">
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

          {/* Terminal block with typing effect */}
          <div className="max-w-4xl mx-auto mb-10 px-4">
            <div
              className="bg-black border border-green-800/30 rounded-lg p-4 text-[#66ff66] text-sm shadow-inner font-semibold"
              style={{ fontFamily: `'VT323', 'Courier New', monospace`, lineHeight: '1.6' }}
            >
              {/* prompt line */}
              <div className="mb-1 select-none">
                <span className="text-[#338833]">┌──(</span>
                <span className="text-[#99cc99]">{promptName || (cursorVisible ? '_' : ' ')}</span>
                <span className="text-[#338833]">㉿</span>
                <span className="text-[#66ff66]">butcher</span>
                <span className="text-[#338833]">)-[~]</span>
              </div>

              {/* command typing line */}
              <div className="mb-1">
                <span className="text-[#338833]">└─</span>
                <span className="text-[#66ff66]">$</span>
                <span className="ml-2 text-[#99ff99]">{commandText}</span>
                <span className="ml-1 text-[#99ff99]">{!showOutput && cursorVisible ? <span className="inline-block w-3">█</span> : null}</span>
              </div>

              {/* output: now shows multiple lines */}
              <div>
                {showOutput ? (
                  outputLines.map((line, i) => (
                    <div key={i} className="text-[#99ff99]">
                      {line}
                    </div>
                  ))
                ) : (
                  <div className="text-[#4f7f4f]"> </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>

      <footer className="relative border-t border-green-500/30 bg-black/50 py-8 z-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500 font-mono text-sm">© Butcher — hack the fiction, not real systems.</p>
        </div>
      </footer>
    </div>
  );
}
