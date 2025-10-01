import React, { useState } from 'react';

const GeometryProblems = () => {
  const [selected, setSelected] = useState(1);

  const Problem1 = () => (
    <div className="space-y-4">
      <div className="bg-slate-100 p-4 rounded-lg">
        <h3 className="font-bold text-lg mb-2">Знайти об'єм куба, ребро = 5 см.</h3>
        <p className="mb-2"><strong>Формула:</strong> V = a³</p>
        <p className="mb-2"><strong>Обчислення:</strong> 5³ = 5 · 5 · 5 = 25 · 5 = 125</p>
        <p className="text-green-700 font-bold"><strong>Відповідь:</strong> V = 125 см³ (Варіант В)</p>
      </div>
      <svg viewBox="0 0 300 300" className="w-full h-full">
        <defs>
          <linearGradient id="cubeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: '#60a5fa', stopOpacity: 0.8}} />
            <stop offset="100%" style={{stopColor: '#3b82f6', stopOpacity: 0.9}} />
          </linearGradient>
        </defs>
        <path d="M 100 150 L 100 50 L 200 50 L 200 150 Z" fill="url(#cubeGrad)" stroke="#1e40af" strokeWidth="2"/>
        <path d="M 200 50 L 250 80 L 250 180 L 200 150 Z" fill="#3b82f6" stroke="#1e40af" strokeWidth="2"/>
        <path d="M 100 150 L 200 150 L 250 180 L 150 180 Z" fill="#2563eb" stroke="#1e40af" strokeWidth="2"/>
        <line x1="100" y1="160" x2="200" y2="160" stroke="#ef4444" strokeWidth="2"/>
        <text x="150" y="180" textAnchor="middle" fill="#dc2626" fontWeight="bold" fontSize="16">a = 5 см</text>
      </svg>
    </div>
  );

  const Problem2 = () => (
    <div className="space-y-4">
      <div className="bg-slate-100 p-4 rounded-lg">
        <h3 className="font-bold text-lg mb-2">Прямокутний паралелепіпед: 6 см, 7 см, 9 см. Об'єм?</h3>
        <p className="mb-2"><strong>Формула:</strong> V = abc</p>
        <p className="mb-2"><strong>Обчислення:</strong> 6 · 7 = 42. Далі 42 · 9. Обчислимо: 42 · 9 = (40 · 9) + (2 · 9) = 360 + 18 = 378</p>
        <p className="text-green-700 font-bold"><strong>Відповідь:</strong> V = 378 см³ (Варіант В)</p>
      </div>
      <svg viewBox="0 0 400 280" className="w-full h-full">
        <defs>
          <linearGradient id="boxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: '#34d399', stopOpacity: 0.8}} />
            <stop offset="100%" style={{stopColor: '#10b981', stopOpacity: 0.9}} />
          </linearGradient>
        </defs>
        <path d="M 80 140 L 80 80 L 220 80 L 220 140 Z" fill="url(#boxGrad)" stroke="#059669" strokeWidth="2"/>
        <path d="M 220 80 L 290 110 L 290 170 L 220 140 Z" fill="#10b981" stroke="#059669" strokeWidth="2"/>
        <path d="M 80 140 L 220 140 L 290 170 L 150 170 Z" fill="#059669" stroke="#059669" strokeWidth="2"/>
        <line x1="75" y1="80" x2="75" y2="140" stroke="#dc2626" strokeWidth="2"/>
        <text x="60" y="110" fill="#dc2626" fontWeight="bold" fontSize="14">6 см</text>
        <line x1="80" y1="150" x2="220" y2="150" stroke="#dc2626" strokeWidth="2"/>
        <text x="150" y="168" textAnchor="middle" fill="#dc2626" fontWeight="bold" fontSize="14">7 см</text>
        <line x1="225" y1="140" x2="295" y2="170" stroke="#dc2626" strokeWidth="2"/>
        <text x="270" y="165" fill="#dc2626" fontWeight="bold" fontSize="14">9 см</text>
      </svg>
    </div>
  );

  const Problem3 = () => (
    <div className="space-y-4">
      <div className="bg-slate-100 p-4 rounded-lg">
        <h3 className="font-bold text-lg mb-2">Призма, основа — прямокутний трикутник з катетами 6 см і 8 см; висота призми 10 см.</h3>
        <p className="mb-2"><strong>Площа основи:</strong> S_осн = ½ · 6 · 8 = ½ · 48 = 24 см²</p>
        <p className="mb-2"><strong>Об'єм:</strong> V = S_осн · h = 24 · 10 = 240 см³</p>
        <p className="text-green-700 font-bold"><strong>Відповідь:</strong> 240 см³ (Варіант А)</p>
      </div>
      <svg viewBox="0 0 400 350" className="w-full h-full">
        <defs>
          <linearGradient id="prismGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor: '#f59e0b', stopOpacity: 0.8}} />
            <stop offset="100%" style={{stopColor: '#d97706', stopOpacity: 0.9}} />
          </linearGradient>
        </defs>
        <path d="M 200 80 L 120 180 L 280 180 Z" fill="url(#prismGrad)" stroke="#b45309" strokeWidth="2"/>
        <path d="M 200 80 L 250 110 L 250 210 L 200 180 Z" fill="#d97706" stroke="#b45309" strokeWidth="2" opacity="0.9"/>
        <path d="M 280 180 L 330 210 L 250 210 Z" fill="#b45309" stroke="#b45309" strokeWidth="2"/>
        <path d="M 120 180 L 170 210 L 330 210 L 280 180 Z" fill="#92400e" stroke="#b45309" strokeWidth="2"/>
        <line x1="120" y1="190" x2="280" y2="190" stroke="#dc2626" strokeWidth="2"/>
        <text x="200" y="210" textAnchor="middle" fill="#dc2626" fontWeight="bold" fontSize="14">8 см</text>
        <line x1="110" y1="180" x2="110" y2="120" stroke="#dc2626" strokeWidth="2"/>
        <text x="90" y="150" fill="#dc2626" fontWeight="bold" fontSize="14">6 см</text>
        <line x1="285" y1="180" x2="335" y2="210" stroke="#dc2626" strokeWidth="2"/>
        <text x="320" y="205" fill="#dc2626" fontWeight="bold" fontSize="14">h=10</text>
      </svg>
    </div>
  );

  const Problem4 = () => (
    <div className="space-y-4">
      <div className="bg-slate-100 p-4 rounded-lg">
        <h3 className="font-bold text-lg mb-2">Правильна чотирикутна піраміда: сторона основи 5 см, висота 3 см.</h3>
        <p className="mb-2"><strong>Площа основи:</strong> S_осн = 5² = 25 см²</p>
        <p className="mb-2"><strong>Об'єм:</strong> V = ⅓ S_осн · h = ⅓ · 25 · 3 = 75/3 = 25 см³</p>
        <p className="text-green-700 font-bold"><strong>Відповідь:</strong> 25 см³ (Варіант Б)</p>
      </div>
      <svg viewBox="0 0 400 350" className="w-full h-full">
        <defs>
          <linearGradient id="pyramidGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor: '#ec4899', stopOpacity: 0.8}} />
            <stop offset="100%" style={{stopColor: '#db2777', stopOpacity: 0.9}} />
          </linearGradient>
        </defs>
        <path d="M 200 80 L 280 220 L 120 220 Z" fill="url(#pyramidGrad)" stroke="#be185d" strokeWidth="2"/>
        <path d="M 200 80 L 280 220 L 310 235 L 230 95 Z" fill="#db2777" stroke="#be185d" strokeWidth="2" opacity="0.9"/>
        <path d="M 120 220 L 150 235 L 310 235 L 280 220 Z" fill="#9f1239" stroke="#be185d" strokeWidth="2"/>
        <line x1="120" y1="230" x2="280" y2="230" stroke="#dc2626" strokeWidth="2"/>
        <text x="200" y="250" textAnchor="middle" fill="#dc2626" fontWeight="bold" fontSize="14">a = 5 см</text>
        <line x1="195" y1="80" x2="195" y2="220" stroke="#dc2626" strokeWidth="2" strokeDasharray="4"/>
        <text x="175" y="150" fill="#dc2626" fontWeight="bold" fontSize="14">h = 3</text>
      </svg>
    </div>
  );

  const Problem5 = () => (
    <div className="space-y-4">
      <div className="bg-slate-100 p-4 rounded-lg">
        <h3 className="font-bold text-lg mb-2">Циліндр: висота 5 см, діаметр основи 6 см. Знайти об'єм.</h3>
        <p className="mb-2"><strong>Радіус:</strong> r = d/2 = 6/2 = 3 см</p>
        <p className="mb-2"><strong>Формула:</strong> V = πr²h</p>
        <p className="mb-2"><strong>Обчислення:</strong> r² = 3² = 9. Далі 9 · 5 = 45. Тож V = 45π см³</p>
        <p className="text-green-700 font-bold"><strong>Відповідь:</strong> 45π см³ (Варіант Б)</p>
      </div>
      <svg viewBox="0 0 400 350" className="w-full h-full">
        <defs>
          <linearGradient id="cylinderGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor: '#8b5cf6', stopOpacity: 0.8}} />
            <stop offset="100%" style={{stopColor: '#7c3aed', stopOpacity: 0.9}} />
          </linearGradient>
        </defs>
        <ellipse cx="200" cy="100" rx="80" ry="25" fill="#a78bfa" stroke="#6d28d9" strokeWidth="2"/>
        <rect x="120" y="100" width="160" height="140" fill="url(#cylinderGrad)" stroke="#6d28d9" strokeWidth="2"/>
        <ellipse cx="200" cy="240" rx="80" ry="25" fill="#7c3aed" stroke="#6d28d9" strokeWidth="2"/>
        <line x1="200" y1="100" x2="280" y2="100" stroke="#dc2626" strokeWidth="2"/>
        <text x="240" y="90" fill="#dc2626" fontWeight="bold" fontSize="14">r = 3 см</text>
        <line x1="110" y1="100" x2="110" y2="240" stroke="#dc2626" strokeWidth="2"/>
        <text x="85" y="170" fill="#dc2626" fontWeight="bold" fontSize="14">h = 5</text>
        <text x="200" y="280" textAnchor="middle" fill="#6d28d9" fontWeight="bold" fontSize="14">d = 6 см</text>
      </svg>
    </div>
  );

  const Problem6 = () => (
    <div className="space-y-4">
      <div className="bg-slate-100 p-4 rounded-lg">
        <h3 className="font-bold text-lg mb-2">Конус: висота 8 см, радіус 9 см. Об'єм?</h3>
        <p className="mb-2"><strong>Формула:</strong> V = ⅓πr²h</p>
        <p className="mb-2"><strong>Обчислення:</strong> r² = 9² = 81. Потім 81 · 8 = 648. Далі ⅓ · 648 = 216. Отже V = 216π см³</p>
        <p className="text-green-700 font-bold"><strong>Відповідь:</strong> 216π см³ (Варіант А)</p>
      </div>
      <svg viewBox="0 0 400 350" className="w-full h-full">
        <defs>
          <linearGradient id="coneGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor: '#06b6d4', stopOpacity: 0.8}} />
            <stop offset="100%" style={{stopColor: '#0891b2', stopOpacity: 0.9}} />
          </linearGradient>
        </defs>
        <ellipse cx="200" cy="240" rx="100" ry="30" fill="#0891b2" stroke="#0e7490" strokeWidth="2"/>
        <path d="M 100 240 Q 200 80 300 240" fill="url(#coneGrad)" stroke="#0e7490" strokeWidth="2"/>
        <line x1="200" y1="80" x2="300" y2="240" stroke="#0e7490" strokeWidth="2"/>
        <line x1="200" y1="80" x2="200" y2="240" stroke="#dc2626" strokeWidth="2" strokeDasharray="4"/>
        <text x="210" y="160" fill="#dc2626" fontWeight="bold" fontSize="14">h = 8 см</text>
        <line x1="200" y1="240" x2="300" y2="240" stroke="#dc2626" strokeWidth="2"/>
        <text x="250" y="230" fill="#dc2626" fontWeight="bold" fontSize="14">r = 9 см</text>
      </svg>
    </div>
  );

  const Problem7 = () => (
    <div className="space-y-4">
      <div className="bg-slate-100 p-4 rounded-lg">
        <h3 className="font-bold text-lg mb-2">Куля: радіус 6 см. Об'єм?</h3>
        <p className="mb-2"><strong>Формула:</strong> V = 4/3 πr³</p>
        <p className="mb-2"><strong>Обчислення:</strong> r³ = 6³ = 6 · 6 · 6 = 36 · 6 = 216. 4/3 · 216 = 4 · 72 = 288. Тому V = 288π см³</p>
        <p className="text-green-700 font-bold"><strong>Відповідь:</strong> 288π см³ (Варіант В)</p>
      </div>
      <svg viewBox="0 0 400 350" className="w-full h-full">
        <defs>
          <radialGradient id="sphereRadial">
            <stop offset="0%" style={{stopColor: '#fed7aa', stopOpacity: 1}} />
            <stop offset="70%" style={{stopColor: '#f97316', stopOpacity: 1}} />
            <stop offset="100%" style={{stopColor: '#c2410c', stopOpacity: 1}} />
          </radialGradient>
        </defs>
        <circle cx="200" cy="175" r="90" fill="url(#sphereRadial)" stroke="#9a3412" strokeWidth="2"/>
        <ellipse cx="200" cy="175" rx="90" ry="20" fill="none" stroke="#9a3412" strokeWidth="1.5" opacity="0.5"/>
        <line x1="200" y1="175" x2="290" y2="175" stroke="#dc2626" strokeWidth="2"/>
        <text x="245" y="165" fill="#dc2626" fontWeight="bold" fontSize="16">r = 6 см</text>
        <circle cx="200" cy="175" r="3" fill="#dc2626"/>
      </svg>
    </div>
  );

  const Problem8 = () => (
    <div className="space-y-4">
      <div className="bg-slate-100 p-4 rounded-lg">
        <h3 className="font-bold text-lg mb-2">Циліндр: об'єм 250 см³, висота 10 см. Знайти радіус основи.</h3>
        <p className="mb-2 text-sm">Тут важлива уточнення: у стандартних задачах об'єм записують як 250π. Якщо у вас точно записано 250 (без π), тоді радіус інший.</p>
        <p className="mb-2"><strong>Якщо V = 250π (найчастіший шкільний варіант):</strong></p>
        <p className="mb-2">V = πr²h ⇒ πr² · 10 = 250π ⇒ r² = 250π/(10π) = 250/10 = 25 ⇒ r = √25 = 5 см</p>
        <p className="mb-2"><strong>Якщо V = 250 (без π):</strong></p>
        <p className="mb-2">πr² · 10 = 250 ⇒ r² = 250/(10π) = 25/π ⇒ r = √(25/π) = 5/√π ≈ 2.82 см</p>
        <p className="text-green-700 font-bold"><strong>Відповідь (за припущенням):</strong> r = 5 см (Варіант Г)</p>
        <p className="text-sm text-gray-600">Оскільки серед варіантів є 5 см, припускаємо правильний варіант — V = 250π</p>
      </div>
      <svg viewBox="0 0 400 380" className="w-full h-full">
        <defs>
          <linearGradient id="cyl2Grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor: '#14b8a6', stopOpacity: 0.8}} />
            <stop offset="100%" style={{stopColor: '#0d9488', stopOpacity: 0.9}} />
          </linearGradient>
        </defs>
        <ellipse cx="200" cy="120" rx="70" ry="22" fill="#5eead4" stroke="#0f766e" strokeWidth="2"/>
        <rect x="130" y="120" width="140" height="100" fill="url(#cyl2Grad)" stroke="#0f766e" strokeWidth="2"/>
        <ellipse cx="200" cy="220" rx="70" ry="22" fill="#0d9488" stroke="#0f766e" strokeWidth="2"/>
        <line x1="200" y1="120" x2="270" y2="120" stroke="#dc2626" strokeWidth="2"/>
        <text x="235" y="110" fill="#dc2626" fontWeight="bold" fontSize="14">r = ?</text>
        <line x1="120" y1="120" x2="120" y2="220" stroke="#dc2626" strokeWidth="2"/>
        <text x="90" y="170" fill="#dc2626" fontWeight="bold" fontSize="14">h=10</text>
        <text x="200" y="260" textAnchor="middle" fill="#0f766e" fontWeight="bold" fontSize="16">V = 250 см³</text>
      </svg>
    </div>
  );

  const Problem9 = () => (
    <div className="space-y-4">
      <div className="bg-slate-100 p-4 rounded-lg">
        <h3 className="font-bold text-lg mb-2">Площа повної поверхні циліндра: h=3 см, діаметр=10 см</h3>
        <p className="mb-2"><strong>Радіус:</strong> r = 10/2 = 5 см</p>
        <p className="mb-2"><strong>Формула:</strong> S_пов = 2πr(r + h)</p>
        <p className="mb-2"><strong>Обчислення:</strong> r + h = 5 + 3 = 8. Потім 2πr(r + h) = 2π · 5 · 8 = 10π · 8 = 80π см²</p>
        <p className="text-green-700 font-bold"><strong>Відповідь:</strong> 80π см² (Серед варіантів відповідає 80π. Якщо у варіантах подано без π, слід перевірити формат завдання.)</p>
      </div>
      <svg viewBox="0 0 400 350" className="w-full h-full">
        <defs>
          <linearGradient id="cyl3Grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor: '#a855f7', stopOpacity: 0.8}} />
            <stop offset="100%" style={{stopColor: '#9333ea', stopOpacity: 0.9}} />
          </linearGradient>
        </defs>
        <ellipse cx="200" cy="110" rx="65" ry="20" fill="#c084fc" stroke="#7e22ce" strokeWidth="2"/>
        <rect x="135" y="110" width="130" height="80" fill="url(#cyl3Grad)" stroke="#7e22ce" strokeWidth="2"/>
        <ellipse cx="200" cy="190" rx="65" ry="20" fill="#9333ea" stroke="#7e22ce" strokeWidth="2"/>
        <rect x="50" y="250" width="300" height="60" fill="#e9d5ff" stroke="#7e22ce" strokeWidth="2" strokeDasharray="5"/>
        <text x="200" y="275" textAnchor="middle" fill="#7e22ce" fontSize="12">Розгортка бічної поверхні</text>
        <text x="200" y="295" textAnchor="middle" fill="#7e22ce" fontWeight="bold" fontSize="14">S = 80π см²</text>
        <line x1="200" y1="110" x2="265" y2="110" stroke="#dc2626" strokeWidth="2"/>
        <text x="232" y="100" fill="#dc2626" fontWeight="bold" fontSize="13">r = 5</text>
        <line x1="125" y1="110" x2="125" y2="190" stroke="#dc2626" strokeWidth="2"/>
        <text x="100" y="150" fill="#dc2626" fontWeight="bold" fontSize="13">h = 3</text>
      </svg>
    </div>
  );

  const Problem10 = () => (
    <div className="space-y-4">
      <div className="bg-slate-100 p-4 rounded-lg">
        <h3 className="font-bold text-lg mb-2">Радіус кулі 15 см. Точка А від центру на відстань 4 см — де вона?</h3>
        <p className="mb-2">Якщо відстань від центра = 4 і радіус = 15, то 4 &lt; 15 ⇒ точка <strong>усередині</strong> кулі.</p>
        <p className="text-green-700 font-bold"><strong>Відповідь:</strong> усередині кулі (Варіант В)</p>
      </div>
      <svg viewBox="0 0 400 350" className="w-full h-full">
        <defs>
          <radialGradient id="sphere2Radial">
            <stop offset="0%" style={{stopColor: '#fde047', stopOpacity: 1}} />
            <stop offset="70%" style={{stopColor: '#eab308', stopOpacity: 1}} />
            <stop offset="100%" style={{stopColor: '#a16207', stopOpacity: 1}} />
          </radialGradient>
        </defs>
        <circle cx="200" cy="175" r="80" fill="url(#sphere2Radial)" stroke="#854d0e" strokeWidth="2"/>
        <circle cx="240" cy="140" r="4" fill="#dc2626"/>
        <text x="250" y="138" fill="#dc2626" fontWeight="bold" fontSize="16">A</text>
        <circle cx="200" cy="175" r="4" fill="#1e40af"/>
        <text x="205" y="195" fill="#1e40af" fontWeight="bold" fontSize="14">O</text>
        <line x1="200" y1="175" x2="280" y2="175" stroke="#1e40af" strokeWidth="2" strokeDasharray="4"/>
        <text x="240" y="165" fill="#1e40af" fontWeight="bold" fontSize="13">R = 15</text>
        <line x1="200" y1="175" x2="240" y2="140" stroke="#dc2626" strokeWidth="2"/>
        <text x="210" y="153" fill="#dc2626" fontWeight="bold" fontSize="13">4 см</text>
      </svg>
    </div>
  );

  const Problem11 = () => (
    <div className="space-y-4">
      <div className="bg-slate-100 p-4 rounded-lg">
        <h3 className="font-bold text-lg mb-2">Повна поверхня конуса: радіус r = 3 см, твірна l у 3 рази більша за радіус ⇒ l = 3r = 9 см</h3>
        <p className="mb-2"><strong>Формула повної поверхні:</strong> S = πr(r + l)</p>
        <p className="mb-2"><strong>Обчислення:</strong> r + l = 3 + 9 = 12. Тоді S = π · 3 · 12 = 36π см²</p>
        <p className="text-green-700 font-bold"><strong>Відповідь:</strong> 36π см² (Варіант Г)</p>
      </div>
      <svg viewBox="0 0 400 350" className="w-full h-full">
        <defs>
          <linearGradient id="cone2Grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor: '#22d3ee', stopOpacity: 0.8}} />
            <stop offset="100%" style={{stopColor: '#06b6d4', stopOpacity: 0.9}} />
          </linearGradient>
        </defs>
        <ellipse cx="200" cy="240" rx="80" ry="25" fill="#06b6d4" stroke="#0e7490" strokeWidth="2"/>
        <path d="M 120 240 Q 200 100 280 240" fill="url(#cone2Grad)" stroke="#0e7490" strokeWidth="2"/>
        <line x1="200" y1="100" x2="280" y2="240" stroke="#0e7490" strokeWidth="2"/>
        <line x1="200" y1="240" x2="280" y2="240" stroke="#dc2626" strokeWidth="2"/>
        <text x="240" y="230" fill="#dc2626" fontWeight="bold" fontSize="14">r = 3 см</text>
        <line x1="200" y1="100" x2="280" y2="240" stroke="#15803d" strokeWidth="2" strokeDasharray="4"/>
        <text x="250" y="170" fill="#15803d" fontWeight="bold" fontSize="14">l = 9 см</text>
        <text x="250" y="190" fill="#15803d" fontSize="12">(l = 3r)</text>
      </svg>
    </div>
  );

  const Problem12 = () => (
    <div className="space-y-4">
      <div className="bg-slate-100 p-4 rounded-lg">
        <h3 className="font-bold text-lg mb-2">Діаметр сфери 10 см. Площа сфери?</h3>
        <p className="mb-2"><strong>Радіус:</strong> r = 10/2 = 5 см. <strong>Формула:</strong> S = 4πr²</p>
        <p className="mb-2"><strong>Обчислення:</strong> r² = 25. S = 4π · 25 = 100π см²</p>
        <p className="text-green-700 font-bold"><strong>Відповідь:</strong> 100π см² (Варіант Б)</p>
      </div>
      <svg viewBox="0 0 400 350" className="w-full h-full">
        <defs>
          <radialGradient id="sphere3Radial">
            <stop offset="0%" style={{stopColor: '#fca5a5', stopOpacity: 1}} />
            <stop offset="60%" style={{stopColor: '#ef4444', stopOpacity: 1}} />
            <stop offset="100%" style={{stopColor: '#991b1b', stopOpacity: 1}} />
          </radialGradient>
        </defs>
        <circle cx="200" cy="175" r="85" fill="url(#sphere3Radial)" stroke="#7f1d1d" strokeWidth="2.5"/>
        <ellipse cx="200" cy="175" rx="85" ry="20" fill="none" stroke="#7f1d1d" strokeWidth="1.5" opacity="0.5"/>
        <circle cx="200" cy="175" r="4" fill="#1e3a8a"/>
        <line x1="200" y1="175" x2="285" y2="175" stroke="#1e3a8a" strokeWidth="2"/>
        <text x="242" y="165" fill="#1e3a8a" fontWeight="bold" fontSize="15">r = 5 см</text>
        <text x="200" y="295" textAnchor="middle" fill="#7f1d1d" fontWeight="bold" fontSize="16">d = 10 см</text>
        <text x="200" y="315" textAnchor="middle" fill="#7f1d1d" fontWeight="bold" fontSize="14">S = 100π см²</text>
      </svg>
    </div>
  );

  const Problem13 = () => (
    <div className="space-y-4">
      <div className="bg-slate-100 p-4 rounded-lg">
        <h3 className="font-bold text-lg mb-2">Питання №13 (встановлення відповідності)</h3>
        <p className="mb-2">Потрібно зіставити перерізи з фігурами:</p>
        <ol className="list-decimal ml-5 space-y-1">
          <li><strong>Переріз циліндра площиною, паралельною площині основи</strong> → це круг (переріз паралельно основі дає коло). <strong>→ В: круг</strong></li>
          <li><strong>Переріз циліндра площиною, перпендикулярною до площини основи</strong> → якщо площина перпендикулярна і проходить через вісь — перерізом є прямокутник (висота × діаметр), або загалом еліпс/прямокутник у осьовому перерізі — стандартно <strong>прямокутник</strong>. <strong>→ А: прямокутник</strong></li>
          <li><strong>Переріз конуса площиною, що утворює з площиною основи кут 60°</strong> → якщо така площина проходить через вершину (типовий випадок задачі), то перерізом буде <strong>трикутник</strong>. <strong>→ Г: трикутник</strong></li>
          <li><strong>Осьовий переріз зрізаного конуса</strong> → осьовий переріз усіченого конуса — <strong>трапеція</strong>. <strong>→ Б: трапеція</strong></li>
        </ol>
        <p className="text-green-700 font-bold mt-2"><strong>Відповідність:</strong> 1→В, 2→А, 3→Г, 4→Б</p>
      </div>
      <svg viewBox="0 0 450 500" className="w-full h-full">
        <text x="225" y="25" textAnchor="middle" fill="#1e40af" fontWeight="bold" fontSize="18">Види перерізів</text>
        
        <g transform="translate(50, 50)">
          <ellipse cx="60" cy="30" rx="40" ry="12" fill="#93c5fd" stroke="#1e40af" strokeWidth="1.5"/>
          <rect x="20" y="30" width="80" height="70" fill="#60a5fa" stroke="#1e40af" strokeWidth="1.5"/>
          <ellipse cx="60" cy="100" rx="40" ry="12" fill="#3b82f6" stroke="#1e40af" strokeWidth="1.5"/>
          <ellipse cx="60" cy="65" rx="40" ry="12" fill="#ef4444" stroke="#dc2626" strokeWidth="2" opacity="0.7"/>
          <text x="60" y="130" textAnchor="middle" fontSize="11" fill="#1e40af">∥ основі → круг</text>
        </g>
        
        <g transform="translate(230, 50)">
          <ellipse cx="60" cy="30" rx="40" ry="12" fill="#93c5fd" stroke="#1e40af" strokeWidth="1.5"/>
          <rect x="20" y="30" width="80" height="70" fill="#60a5fa" stroke="#1e40af" strokeWidth="1.5"/>
          <ellipse cx="60" cy="100" rx="40" ry="12" fill="#3b82f6" stroke="#1e40af" strokeWidth="1.5"/>
          <rect x="35" y="30" width="50" height="70" fill="#ef4444" stroke="#dc2626" strokeWidth="2" opacity="0.6"/>
          <text x="60" y="130" textAnchor="middle" fontSize="11" fill="#1e40af">⊥ → прямокутник</text>
        </g>
        
        <g transform="translate(50, 200)">
          <ellipse cx="60" cy="100" rx="45" ry="13" fill="#06b6d4" stroke="#0e7490" strokeWidth="1.5"/>
          <path d="M 15 100 L 60 30 L 105 100" fill="#22d3ee" stroke="#0e7490" strokeWidth="1.5"/>
          <path d="M 30 100 L 60 45 L 90 100" fill="#ef4444" stroke="#dc2626" strokeWidth="2" opacity="0.6"/>
          <text x="60" y="130" textAnchor="middle" fontSize="11" fill="#0e7490">через вершину</text>
          <text x="60" y="145" textAnchor="middle" fontSize="11" fill="#0e7490">→ трикутник</text>
        </g>
        
        <g transform="translate(230, 200)">
          <ellipse cx="60" cy="100" rx="45" ry="13" fill="#06b6d4" stroke="#0e7490" strokeWidth="1.5"/>
          <path d="M 15 100 L 60 30 L 105 100" fill="#22d3ee" stroke="#0e7490" strokeWidth="1.5"/>
          <path d="M 35 70 L 85 70 L 95 100 L 25 100 Z" fill="#ef4444" stroke="#dc2626" strokeWidth="2" opacity="0.6"/>
          <text x="60" y="130" textAnchor="middle" fontSize="11" fill="#0e7490">60° кут з основою</text>
          <text x="60" y="145" textAnchor="middle" fontSize="11" fill="#0e7490">→ трикутник</text>
        </g>
        
        <g transform="translate(50, 350)">
          <ellipse cx="60" cy="100" rx="45" ry="13" fill="#f59e0b" stroke="#b45309" strokeWidth="1.5"/>
          <ellipse cx="60" cy="50" rx="25" ry="8" fill="#fbbf24" stroke="#b45309" strokeWidth="1.5"/>
          <line x1="35" y1="50" x2="15" y2="100" stroke="#b45309" strokeWidth="1.5"/>
          <line x1="85" y1="50" x2="105" y2="100" stroke="#b45309" strokeWidth="1.5"/>
          <rect x="20" y="50" width="80" height="50" fill="#ef4444" stroke="#dc2626" strokeWidth="2" opacity="0.5"/>
          <text x="60" y="130" textAnchor="middle" fontSize="11" fill="#b45309">осьовий переріз</text>
          <text x="60" y="145" textAnchor="middle" fontSize="11" fill="#b45309">→ трапеція</text>
        </g>
        
        <g transform="translate(230, 350)">
          <rect x="10" y="10" width="140" height="110" fill="#f3f4f6" stroke="#6b7280" strokeWidth="2" rx="8"/>
          <text x="80" y="35" textAnchor="middle" fontWeight="bold" fontSize="14" fill="#1f2937">Відповідність:</text>
          <text x="20" y="55" fontSize="12" fill="#374151">1 → В (круг)</text>
          <text x="20" y="72" fontSize="12" fill="#374151">2 → А (прямокутник)</text>
          <text x="20" y="89" fontSize="12" fill="#374151">3 → Г (трикутник)</text>
          <text x="20" y="106" fontSize="12" fill="#374151">4 → Б (трапеція)</text>
        </g>
      </svg>
    </div>
  );

  const Problem14 = () => (
    <div className="space-y-4">
      <div className="bg-slate-100 p-4 rounded-lg">
        <h3 className="font-bold text-lg mb-2">Осьовий переріз циліндра — прямокутник, площа якого 48 см². Площа основи циліндра 36 см². Обчислити висоту циліндра.</h3>
        <p className="mb-2 text-sm"><strong>Нотатка про π:</strong> часто площу основи записують як 36π (тобто площа круга = 36π). Якщо у вас точно написано 36 без π, це інша інтерпретація. Розглянемо стандартне шкільне припущення S_осн = 36π (тобто площа круга = 36π ⇒ r²=36 ⇒ r=6 см).</p>
        <p className="mb-2"><strong>Осьовий переріз — це прямокутник</strong> зі сторонами: висота h та діаметр 2r. Площа прямокутника S_пер = h · 2r.</p>
        <p className="mb-2">Дано S_пер = 48, r = 6 ⇒ h · 2r = 48 ⇒ h = 48/(12) = 4 см.</p>
        <p className="mb-2 text-sm">Якщо ж у вас у завданні написано 36 (без π), тоді це означає, що πr² = 36 ⇒ r² = 36/π ⇒ r = 6/√π ≈ 3.385 ... але це нестандартно. Оскільки серед відповідей є h=4 см, це вказує на стандартну інтерпретацію 36π.</p>
        <p className="text-green-700 font-bold"><strong>Відповідь (за стандартною інтерпретацією 36π):</strong> h = 4 см</p>
      </div>
      <svg viewBox="0 0 400 420" className="w-full h-full">
        <defs>
          <linearGradient id="cyl4Grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor: '#4ade80', stopOpacity: 0.8}} />
            <stop offset="100%" style={{stopColor: '#22c55e', stopOpacity: 0.9}} />
          </linearGradient>
        </defs>
        
        <text x="200" y="25" textAnchor="middle" fill="#15803d" fontWeight="bold" fontSize="16">Задача 14</text>
        
        <ellipse cx="200" cy="100" rx="60" ry="18" fill="#86efac" stroke="#15803d" strokeWidth="2"/>
        <rect x="140" y="100" width="120" height="80" fill="url(#cyl4Grad)" stroke="#15803d" strokeWidth="2"/>
        <ellipse cx="200" cy="180" rx="60" ry="18" fill="#22c55e" stroke="#15803d" strokeWidth="2"/>
        
        <rect x="155" y="100" width="90" height="80" fill="#fbbf24" stroke="#b45309" strokeWidth="2.5" opacity="0.7"/>
        <text x="200" y="145" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#78350f">Переріз S=48</text>
        
        <ellipse cx="200" cy="270" rx="60" ry="18" fill="#93c5fd" stroke="#1e40af" strokeWidth="2"/>
        <text x="200" y="275" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#1e3a8a">Основа S=36</text>
        
        <line x1="200" y1="100" x2="260" y2="100" stroke="#dc2626" strokeWidth="2"/>
        <text x="230" y="90" fill="#dc2626" fontWeight="bold" fontSize="13">r = 6</text>
        
        <line x1="130" y1="100" x2="130" y2="180" stroke="#dc2626" strokeWidth="2"/>
        <text x="105" y="140" fill="#dc2626" fontWeight="bold" fontSize="13">h = ?</text>
        
        <rect x="30" y="310" width="340" height="95" fill="#f0fdf4" stroke="#15803d" strokeWidth="1.5" rx="6"/>
        <text x="200" y="330" textAnchor="middle" fontSize="12" fill="#15803d">S_осн = πr² = 36π ⇒ r² = 36 ⇒ r = 6 см</text>
        <text x="200" y="350" textAnchor="middle" fontSize="12" fill="#15803d">S_пер = 2r·h = 48 ⇒ h = 48/(2r) = 48/12</text>
        <text x="200" y="375" textAnchor="middle" fontWeight="bold" fontSize="14" fill="#166534">Відповідь: h = 4 см</text>
        <text x="200" y="395" textAnchor="middle" fontSize="11" fill="#15803d">(стандартна інтерпретація 36π)</text>
      </svg>
    </div>
  );

  const Problem15 = () => (
    <div className="space-y-4">
      <div className="bg-slate-100 p-4 rounded-lg">
        <h3 className="font-bold text-lg mb-2">Умова: висота конуса h = √3 см; висота утворює кут 30° з твірною l. Знайти радіус основи r.</h3>
        <p className="mb-2"><strong>Аналіз:</strong> У прямокутному трикутнику (в осьовому перерізі) сторони: h — один катет, r — інший катет, l — гіпотенуза (твірна). Кут між висотою h і твірною l — це кут при вершині прямокутного трикутника поруч h. Отже</p>
        <p className="mb-2">cos 30° = h/l.</p>
        <p className="mb-2"><strong>Кроки:</strong></p>
        <ol className="list-decimal ml-5 space-y-1 text-sm">
          <li>cos 30° = √3/2.</li>
          <li>l = h/cos 30° = (√3)/(√3/2) = √3 · 2/√3 = 2 (записуємо детально: √3/(√3/2) = √3 · 2/√3 = 2).</li>
          <li>За теоремою Піфагора: l² = r² + h² ⇒ r² = l² − h².</li>
          <li>Обчислимо: l² = 2² = 4. h² = (√3)² = 3. Тоді r² = 4 − 3 = 1 ⇒ r = 1 см.</li>
        </ol>
        <p className="text-green-700 font-bold"><strong>Відповідь:</strong> r = 1 см</p>
      </div>
      <svg viewBox="0 0 400 450" className="w-full h-full">
        <defs>
          <linearGradient id="cone3Grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor: '#c084fc', stopOpacity: 0.8}} />
            <stop offset="100%" style={{stopColor: '#a855f7', stopOpacity: 0.9}} />
          </linearGradient>
        </defs>
        
        <text x="200" y="25" textAnchor="middle" fill="#7e22ce" fontWeight="bold" fontSize="16">Задача 15 - Конус</text>
        
        <ellipse cx="200" cy="250" rx="80" ry="24" fill="#a855f7" stroke="#6b21a8" strokeWidth="2"/>
        <path d="M 120 250 Q 200 80 280 250" fill="url(#cone3Grad)" stroke="#6b21a8" strokeWidth="2"/>
        <line x1="200" y1="80" x2="280" y2="250" stroke="#6b21a8" strokeWidth="2"/>
        
        <line x1="200" y1="80" x2="200" y2="250" stroke="#dc2626" strokeWidth="2.5" strokeDasharray="5"/>
        <text x="215" y="165" fill="#dc2626" fontWeight="bold" fontSize="14">h = √3</text>
        
        <line x1="200" y1="80" x2="280" y2="250" stroke="#15803d" strokeWidth="2.5"/>
        <text x="250" y="155" fill="#15803d" fontWeight="bold" fontSize="14">l</text>
        
        <line x1="200" y1="250" x2="280" y2="250" stroke="#1e40af" strokeWidth="2"/>
        <text x="240" y="240" fill="#1e40af" fontWeight="bold" fontSize="14">r = ?</text>
        
        <path d="M 200 230 Q 210 235 200 250" fill="none" stroke="#ea580c" strokeWidth="2"/>
        <text x="215" y="245" fill="#ea580c" fontWeight="bold" fontSize="13">30°</text>
        
        <circle cx="200" cy="250" r="3" fill="#dc2626"/>
        <circle cx="200" cy="80" r="3" fill="#6b21a8"/>
        
        <rect x="20" y="300" width="360" height="135" fill="#faf5ff" stroke="#7e22ce" strokeWidth="1.5" rx="6"/>
        <text x="200" y="320" textAnchor="middle" fontSize="12" fill="#6b21a8">cos 30° = h/l ⇒ √3/2 = √3/l ⇒ l = 2</text>
        <text x="200" y="340" textAnchor="middle" fontSize="12" fill="#6b21a8">За теоремою Піфагора: l² = r² + h²</text>
        <text x="200" y="360" textAnchor="middle" fontSize="12" fill="#6b21a8">r² = l² − h² = 4 − 3 = 1</text>
        <text x="200" y="385" textAnchor="middle" fontWeight="bold" fontSize="15" fill="#581c87">Відповідь: r = 1 см</text>
        <text x="200" y="405" textAnchor="middle" fontSize="11" fill="#6b21a8">Утворює кут 30° з твірною l</text>
        <text x="200" y="425" textAnchor="middle" fontSize="11" fill="#6b21a8">(l — гіпотенуза трикутника)</text>
      </svg>
    </div>
  );

  const Problem16 = () => (
    <div className="space-y-4">
      <div className="bg-slate-100 p-4 rounded-lg">
        <h3 className="font-bold text-lg mb-2">Умова (інтерпретація): твірна (бічна ребро) зрізаного конуса s = 4√2 см (у тексті може бути помилка «412» → тут допускаємо 4√2), і твірна утворює з площиною більшої основи кут 45°. Радіус меншої основи r_м = 3 см. Знайти площу осьового перерізу (вона є трапецією).</h3>
        <p className="mb-2"><strong>Пояснення моделі:</strong> Осьовий переріз усіченого конуса — симетрична трапеція з малою основою 2r_м, великою основою 2R (R — радіус більшої основи) і висотою H (вертикальна відстань між основами трапеції). Бічна сторона трапеції = твірна s, а кут між твірною і площиною більшої основи дорівнює 45°. Це означає, що твірна нахилена під кутом 45° до площини основи: її вертикальна складова (по висоті) і горизонтальна складова (по радіусу) рівні (оскільки sin 45 = cos 45).</p>
        <p className="mb-2"><strong>Кроки:</strong></p>
        <ol className="list-decimal ml-5 space-y-1 text-sm">
          <li>Розкладемо твірну s на вертикальну і горизонтальну компоненти: H = s·sin 45°, Δ = s·cos 45°. Для s = 4√2 та sin 45° = cos 45° = √2/2: H = 4√2 · √2/2 = 4√2 · √2 / 2 = 4·2/2 = 4. Δ = 4√2 · √2/2 = 4 (те саме число).</li>
          <li>Горизонтальна компонента Δ — це різниця між R і r_м: R − r_м = Δ ⇒ R = r_м + Δ = 3 + 4 = 7 см.</li>
          <li>Тепер бокові сторони трапеції в осьовому перерізі: мала основа = 2r_м = 2·3 = 6 см, велика основа = 2R = 2·7 = 14 см, висота трапеції H = 4 см.</li>
          <li>Площа трапеції: S = (b₁+b₂)/2 · H = (6+14)/2 · 4 = 20/2 · 4 = 10·4 = 40 см².</li>
        </ol>
        <p className="text-green-700 font-bold"><strong>Відповідь:</strong> площа осьового перерізу = 40 см²</p>
      </div>
      <svg viewBox="0 0 420 480" className="w-full h-full">
        <defs>
          <linearGradient id="trapGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor: '#fde047', stopOpacity: 0.8}} />
            <stop offset="100%" style={{stopColor: '#facc15', stopOpacity: 0.9}} />
          </linearGradient>
        </defs>
        
        <text x="210" y="25" textAnchor="middle" fill="#854d0e" fontWeight="bold" fontSize="16">Задача 16 - Усічений конус</text>
        
        <ellipse cx="200" cy="250" rx="90" ry="26" fill="#facc15" stroke="#854d0e" strokeWidth="2"/>
        <ellipse cx="200" cy="120" rx="50" ry="15" fill="#fde047" stroke="#854d0e" strokeWidth="2"/>
        <line x1="110" y1="120" x2="110" y2="250" stroke="#854d0e" strokeWidth="2"/>
        <line x1="250" y1="120" x2="290" y2="250" stroke="#854d0e" strokeWidth="2"/>
        <path d="M 110 120 L 110 250 L 290 250 L 250 120 Z" fill="url(#trapGrad)" stroke="#854d0e" strokeWidth="2" opacity="0.8"/>
        
        <path d="M 150 120 L 110 250 L 290 250 L 250 120 Z" fill="#f97316" stroke="#9a3412" strokeWidth="2.5" opacity="0.6"/>
        <text x="200" y="190" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#7c2d12">Переріз S=40</text>
        
        <line x1="200" y1="250" x2="290" y2="250" stroke="#dc2626" strokeWidth="2"/>
        <text x="245" y="240" fill="#dc2626" fontWeight="bold" fontSize="13">R = 7</text>
        
        <line x1="200" y1="120" x2="250" y2="120" stroke="#dc2626" strokeWidth="2"/>
        <text x="225" y="110" fill="#dc2626" fontWeight="bold" fontSize="13">r_м = 3</text>
        
        <line x1="100" y1="120" x2="100" y2="250" stroke="#15803d" strokeWidth="2"/>
        <text x="75" y="185" fill="#15803d" fontWeight="bold" fontSize="13">H = 4</text>
        
        <path d="M 270 230 Q 275 240 290 250" fill="none" stroke="#ea580c" strokeWidth="2"/>
        <text x="275" y="245" fill="#ea580c" fontWeight="bold" fontSize="12">45°</text>
        
        <text x="200" y="280" textAnchor="middle" fontSize="12" fill="#854d0e">s = 4√2, r_м = 3 см</text>
        
        <rect x="15" y="300" width="390" height="165" fill="#fefce8" stroke="#854d0e" strokeWidth="1.5" rx="6"/>
        <text x="210" y="320" textAnchor="middle" fontSize="11" fill="#713f12">Твірна s = 4√2. sin 45° = cos 45° = √2/2</text>
        <text x="210" y="340" textAnchor="middle" fontSize="11" fill="#713f12">H = s·sin 45° = 4√2 · √2/2 = 4</text>
        <text x="210" y="360" textAnchor="middle" fontSize="11" fill="#713f12">Δ = s·cos 45° = 4√2 · √2/2 = 4 (горизонт. компонента)</text>
        <text x="210" y="380" textAnchor="middle" fontSize="11" fill="#713f12">R − r_м = Δ ⇒ R = r_м + Δ = 3 + 4 = 7 см</text>
        <text x="210" y="400" textAnchor="middle" fontSize="11" fill="#713f12">S = (b₁+b₂)/2 · H = (6+14)/2 · 4 = 10·4 = 40 см²</text>
        <text x="210" y="425" textAnchor="middle" fontWeight="bold" fontSize="14" fill="#713f12">Відповідь: площа перерізу = 40 см²</text>
        <text x="210" y="445" textAnchor="middle" fontSize="10" fill="#854d0e">(мала основа 2r_м=6, велика 2R=14, висота H=4)</text>
      </svg>
    </div>
  );

  const problems = [
    { num: 1, title: "Куб (ребро 5 см)", component: Problem1 },
    { num: 2, title: "Паралелепіпед (6×7×9)", component: Problem2 },
    { num: 3, title: "Призма (трикутна основа)", component: Problem3 },
    { num: 4, title: "Піраміда (основа 5, h=3)", component: Problem4 },
    { num: 5, title: "Циліндр (d=6, h=5)", component: Problem5 },
    { num: 6, title: "Конус (r=9, h=8)", component: Problem6 },
    { num: 7, title: "Куля (радіус 6 см)", component: Problem7 },
    { num: 8, title: "Циліндр (V=250, h=10)", component: Problem8 },
    { num: 9, title: "Повна поверхня циліндра", component: Problem9 },
    { num: 10, title: "Точка в кулі", component: Problem10 },
    { num: 11, title: "Повна поверхня конуса", component: Problem11 },
    { num: 12, title: "Площа сфери", component: Problem12 },
    { num: 13, title: "Перерізи фігур", component: Problem13 },
    { num: 14, title: "Висота циліндра (переріз)", component: Problem14 },
    { num: 15, title: "Радіус основи конуса", component: Problem15 },
    { num: 16, title: "Переріз усіченого конуса", component: Problem16 },
  ];

  const CurrentProblem = problems[selected - 1].component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-800 mb-6 text-center">
          Геометричні задачі - Повна інформація
        </h1>
        
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 mb-6">
          {problems.map((p) => (
            <button
              key={p.num}
              onClick={() => setSelected(p.num)}
              className={`px-3 py-2 rounded-lg font-semibold transition-all ${
                selected === p.num
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white text-slate-700 hover:bg-blue-50 shadow'
              }`}
            >
              №{p.num}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-xl p-6">
          <h2 className="text-xl font-semibold text-slate-700 mb-4">
            Питання №{selected}: {problems[selected - 1].title}
          </h2>
          <div className="bg-slate-50 rounded-lg p-4 border-2 border-slate-200">
            <CurrentProblem />
          </div>
        </div>

        <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
          <p className="text-sm text-blue-900">
            <strong>Підказка:</strong> Кожна задача містить умову, формулу, повне рішення з обчисленнями та відповідь. 
            Натискайте на номери задач для перемикання. Рисунки допомагають візуалізувати геометричні фігури.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GeometryProblems;
