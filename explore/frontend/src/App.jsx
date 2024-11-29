import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  })

  return (
    <>
    <div style={{ textAlign: 'center', padding: '1px', fontFamily: 'Arial, sans-serif' }}>
    <h1>Full Stack Jokes</h1>
    <p>JOKES: {jokes.length}</p>
  
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px',
        marginTop: '20px',
      }}
    >
      {jokes.map((joke, index) => (
        <div
          key={joke.id}
          style={{
            border: '1px solid #ddd',
            borderRadius: '10px',
            padding: '15px',
            backgroundColor: '#292929',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.2s',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <h3 style={{ margin: '0', color: '#999' }}>{joke.title}</h3>
          <p style={{ marginTop: '10px', color: '#ddd' }}>{joke.content}</p>
        </div>
      ))}
    </div>
  </div>
  
    </>
  )
}

export default App
