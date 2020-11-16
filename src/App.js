import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color,setColor] = useState('');
  const [error,setError] = useState(false);
  const [list, setList] =useState(new Values('#1db38d').all(10));

  const handleSubmit=(e)=>{
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors)
    } catch (error) {
      setError(true)
    }

  }

  return <>
  <section className='container'>
    <div className='title'>
    <h2>Color Genarator</h2>
    </div>
    <form onSubmit={handleSubmit}>
      <input type='text' value={color} onChange={(e)=>setColor(e.target.value)} className={error && 'error'} placeholder='#1db38d'></input>
      <button type='submit' className='btn'>Genarate</button>  
    </form> 
  </section>
  <section className='colors'>
    {list.map((color, index)=>{
      console.log(color);
      return <SingleColor key={index} {...color} index={index} hex={color.hex}/>
    })}
  </section>
  </>
}

export default App
