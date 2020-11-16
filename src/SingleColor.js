import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index, hex, alpha, type}) => {
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join(',');
  const rgbValue = `rgb(${bcg})`;
  const hexValue = `#${hex}`;

  const copyToClip = (val)=>{
    setAlert(true);
    navigator.clipboard.writeText(val);
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 1000)
    return () => clearTimeout(timeout)
  }, [alert])

return <article className={`color ${index > 6 && 'color-light'}`} style={{backgroundColor:`rgb(${bcg})`}}>
    <p className={`precent-value ${index > 6 && 'color-light'}`}>{weight}%</p>
    <p className='color-value' onClick={()=>copyToClip(hexValue)}>{hexValue}</p>
    <p className='color-value' onClick={()=>copyToClip(rgbValue)}>{rgbValue}</p>
    <p className='color-value'>alpha : {alpha}</p>
    <p className='color-value'>{type}</p>
    <div className='alert-container'>
    {alert && <p className='alert'>COPIED TO CLIPBOARD</p>}
    </div>
  </article>
}

export default SingleColor
