import { useId } from 'react';
import CustomSelect from './CustomSelect';

export default function InputBox({
  label,
  amount,
  onAmountChange,
  currency = 'usd',
  onCurrencyChange,
  currencyOptions = [],
  amountDisable = false,
  currencyDisable = false,
  className = '',
}) {
  const amountInputId = useId();

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          min="0"
          placeholder="Amount"
          disabled={amountDisable}
          id={amountInputId}
          value={amount}
          onChange={(event) =>
            onAmountChange && onAmountChange(Number(event.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <CustomSelect
          currency={currency}
          currencyOptions={currencyOptions}
          onCurrencyChange={onCurrencyChange}
          currencyDisable={currencyDisable}
        />
      </div>
    </div>
  );
}
