import { useState, useRef, useEffect } from 'react';

export default function CustomSelect({
  currency,
  currencyOptions,
  onCurrencyChange,
  currencyDisable,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (event) => {
      if (ref.current && !ref.current.contains(event.target)) setIsOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        disabled={currencyDisable}
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 hover:border-gray-300 transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {currency}
        <span
          className={`text-gray-400 text-xs transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        >
          ▾
        </span>
      </button>

      {isOpen && (
        <ul className="absolute z-50 mt-2 left-0 min-w-full bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden max-h-44 overflow-y-auto">
          {currencyOptions.map((option) => (
            <li
              key={option}
              onClick={() => {
                onCurrencyChange && onCurrencyChange(option);
                setIsOpen(false);
              }}
              className={`px-0.5 py-2 text-sm cursor-pointer transition-colors duration-100
                ${
                  option === currency
                    ? 'bg-blue-50 text-blue-600 font-semibold'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
