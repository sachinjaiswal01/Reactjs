import { React,useState,useEffect } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [products, setProducts] = useState([]);
  const [error , setError] = useState(false);
  const [loading , SetLoading] = useState(false);
  const [search ,setSearch] = useState('')

  useEffect(() => {
    const controller = new AbortController(); // for Race condition (avoid) 

    ;(async ()=>{
      try {
        SetLoading(true)
        setError(false)
        const response = await axios.get('./api/products?search='+search,{
          signal:controller.signal
        })

        console.log(response.data);
        setProducts(response.data) 
        SetLoading(false)
      } catch (error) {
        if(axios.isCancel(error)){
          console.log('Request canceled', error.message)
          return;
        }
        setError(true);
        SetLoading(false)
      }
    })()

    //cleanup methode.
    return ()=>{
      controller.abort()
    }
  },[search])

  if(error){
    return <h1>Somethinf wents Wrong!</h1>
  }
  if(loading){
    return <h1>Loading...</h1>
  }

  return (
    <>
      <h1> handle api in Reactjs</h1>
      <input type="text" placeholder='Seacrh...'
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      />

      

      <h2>Number of products are :{products.length}</h2>
      <button 
        >
      </button>
    </>
  )
}

export default App
