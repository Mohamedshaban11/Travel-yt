import React from 'react';

const SelectsCards = (props) => {
  return (
        <div className=' relative'>
            <img className=' w-full h-full object-cover' src={props.bg} alt="/" />
            <div className=' absolute bg-gray-900/30 top-0 left-0 w-full h-full'>
                <p className=' absolute left-4 bottom-4 text-4xl text-white '>{props.text}</p>
            </div>
        </div>
  )
}

export default SelectsCards