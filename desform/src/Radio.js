import React from 'react'

const Radio = ( { pergunta, options, value, onChange, id, active } ) => {


if (active === false) return null 

  return (
    <div>
      <fieldset>
        <legend>{pergunta}</legend>
        {options.map((option) => (
          <label key={option} style={{display: 'flex', marginTop: 10}}>
            <input 
            type='radio'
            id={id}
            value={option}
            checked={value === option}
            onChange={onChange}
            />
            {option}
          </label>
        ))}
      </fieldset>
    </div>

)
}

export default Radio