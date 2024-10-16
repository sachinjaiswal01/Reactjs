import React, { useId } from 'react';

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  // Handle amount change with error catching
  const handleAmountChange = (e) => {
    try {
      const value = Number(e.target.value);
      if (isNaN(value)) {
        throw new Error("Invalid amount");
      }
      onAmountChange && onAmountChange(value);
    } catch (error) {
      console.error("Error in amount change:", error);
      // Optionally, set an error state here
    }
  };

  // Handle currency change with error catching
  const handleCurrencyChange = (e) => {
    try {
      const value = e.target.value;
      onCurrencyChange && onCurrencyChange(value);
    } catch (error) {
      console.error("Error in currency change:", error);
      // Optionally, set an error state here
    }
  };

  // Ensure amount is a valid number or default to 0
  const displayAmount = isNaN(amount) ? '' : amount;

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className='w-1/2'>
        <label htmlFor={amountInputId} className='text-black/40 mb-2 inline-block'>
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder='Amount'
          disabled={amountDisable}
          value={displayAmount}
          onChange={handleAmountChange}
        />
      </div>
      <div className='w-1/2 flex flex-wrap justify-end text-right'>
        <p className='text-black/40 mb-2 w-full'>
          Currency Type
        </p>
        <select
          className='rounded-lg p-2 bg-gray-100 cursor-pointer outline-none font-bold'
          value={selectCurrency}
          onChange={handleCurrencyChange}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
