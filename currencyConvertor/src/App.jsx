import { useState } from 'react'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from ,setFrom]     = useState('usd') 
  const [to , setTo]        = useState("inr")
  const [convertedAmount ,setConvertedAmount] = useState(0)

  const CurrencyInfo = useCurrencyInfo(from)

  const options = Object.keys(CurrencyInfo || {});

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  

const convert = () => {
  const exchangeRate = CurrencyInfo[to]; // Get the exchange rate for the target currency

  console.log('Currency Info:', CurrencyInfo);
  console.log('Exchange Rate for', to, ':', exchangeRate);

  // Check if the exchange rate exists
  if (exchangeRate) {
      setConvertedAmount(amount * exchangeRate); // Perform the conversion
  } else {
      console.error('Exchange rate not available for conversion');
      setConvertedAmount(0); // Optionally reset to zero if conversion fails
  }
};

  
  return (
    <div
    className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{
      backgroundImage:`url('https://images.pexels.com/photos/6120218/pexels-photo-6120218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
    }}>
    <div className='w-full max-w-xl max-h-max  border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
      <form
      onSubmit={(e)=>{
        e.preventDefault();
        convert()
      }}
      >
      <div className='w-full mb-1'>
      <InputBox
        label="From"
        amount={amount}
        currencyOptions={options}
        onCurrencyChange={(currency)=>
          setFrom(currency)}
        selectCurrency ={from}
        onAmountChange={(amount)=>setAmount(amount)}
      />
      </div>
      <div className='relative w-full h-0.5'>
        <button 
                type="button"
                className='absolute left-1/2 -translate-x-1/2
                -translate-y-1/2 border-2 border-white  rounded-md text-white px-2 py-0.5  bg-rose-400  font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-rose-800 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#be123c;] hover:[text-shadow:2px_2px_2px_#fda4af]'
                onClick={swap}
        >
          swap
        </button>
      </div>
      <div className='w-full mt-1 mb-4'>
        <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency)=> setTo(currency)}
                selectCurrency ={to}
                // amountDisable
                // onAmountChange={(amount)=>setAmount(amount)}
        />
      </div>
        <button type='submit'
                className='w-full px-8 z-30 py-4 bg-rose-400 rounded-md text-white relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-rose-800 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#be123c;] hover:[text-shadow:2px_2px_2px_#fda4af] text-2xl'
        > 
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </form>
    </div>
    </div>
  )
}

export default App
