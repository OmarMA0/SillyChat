import React from 'react'

const InputComponent = ({LabelString = "" , value , onChange , type = "text"}) => {
  return (
    <>
    <label className='flex justify-start mb-2'>{LabelString}</label>
    <input type = {type}  value = {value} onChange={onChange}
    className='rounded-lg border bg-[#463f3a] border-[#bcb8b1] text-[#f4f3ee] p-2.5 mb-4 ' ></input>
    </>
)
}

export default InputComponent