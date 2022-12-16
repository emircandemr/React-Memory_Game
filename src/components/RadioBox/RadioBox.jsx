import React from 'react'
import "./RadioBox.scss"

const RadioBox = ({name,selectedItem,onChange}) => {

    const isChecked = name === selectedItem 

  return (
    <div className='radio__container'>
        <label className="rad-label">
            <input type="radio" className="rad-input" id={name} name={name} value={name}
             checked={isChecked} onChange={onChange}  />
            <div className="rad-design"></div>
            <div className="rad-text">{name}</div>
        </label>
    </div>
  )
}

export default RadioBox