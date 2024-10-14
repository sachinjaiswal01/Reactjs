import { useState,useCallback,useEffect,useRef } from 'react'

function App() {
  const [length ,setLength] = useState(8);
  const [numberAllowed , setNumberAllowed] = useState(false);
  const [charAllowed ,setCharAllowed] = useState(false);
  const [password ,setPassword] = useState("")

  //useRef hook
   const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%^&*(){}~`"

    for(let i=1;i<=length;i++){
      let char = Math.floor((Math.random() * str.length +1))

      pass += str.charAt(char);

    }
    setPassword(pass)

  } ,[length,numberAllowed,charAllowed,setPassword])

  const copyPasswordToClipboard =useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  } , [length ,numberAllowed ,charAllowed ,passwordGenerator])
  
  return (
    <>
      <div className="w-3/5 max-w-md mx-auto shadow-lg rounded-lg px-6 py-5 my-10 text-orange-500 bg-gray-800">
      <h1 
      className="text-white text-center text-2xl font-semibold mb-5 bg-white/10 backdrop-blur-md p-4 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-white/20"
    >
      Password Generator
    </h1>
    
        <div className="flex shadow-md rounded-lg overflow-hidden mb-6">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-3 bg-gray-700 text-white placeholder-gray-400"
            placeholder="Your generated password"
            readOnly
            ref={passwordRef}
          />
          <button
  onClick={copyPasswordToClipboard}
  className="outline-none bg-blue-700 hover:bg-blue-600 active:bg-blue-800 text-white px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 active:scale-95"
>
  Copy
</button>

        </div>
  
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-white gap-4 mb-4">
          <div className="flex items-center gap-x-2 w-full">
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className="cursor-pointer accent-orange-500 w-full"
              onChange={(e) => { setLength(e.target.value); }}
            />
            <label className="whitespace-nowrap hover:text-orange-500 transition duration-300 ease-in-out">Length: <span className="font-bold">{length}</span></label>
          </div>
  
          <div className="flex items-center gap-x-2 w-full justify-center">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => setNumberAllowed((prev) => !prev)}
              className="accent-orange-500 cursor-pointer "
            />
            <label htmlFor="numberInput" className="cursor-pointer hover:text-orange-500 transition duration-300 ease-in-out">Include Numbers</label>
          </div>
  
          <div className="flex items-center gap-x-2 w-full justify-end">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => setCharAllowed((prev) => !prev)}
              className="accent-orange-500 cursor-pointer"
            />
            <label htmlFor="characterInput" className="cursor-pointer hover:text-orange-500 transition duration-300 ease-in-out">Include Special Characters</label>
          </div>
        </div>
      </div>
    </>
  );
  
}

export default App
