import React from 'react'

const ButtonComp = (props) => {
  return (
    <>
      <div className={`relative overflow-hidden w-48 h-16 py-4 px-12 cursor-pointer text-lg font-semibold bg-[--primaryTxt] border-[--primaryTxt] border-2 rounded-full ${props.addClass} ${props.btnClass ?? ''}`}>
        <div className={`absolute h-0 w-full left-0 top-0 transition-all duration-700 ease-in-out ${props.btnBGClass ?? ''}`}></div>
        <p className={`absolute text-white transition-all ${props.btnTxtClass ?? ''}`}>{props.txt}</p>
      </div>
    </>
  )
}

export default ButtonComp