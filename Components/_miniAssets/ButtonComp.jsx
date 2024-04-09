import React from 'react'

const ButtonComp = (props) => {
  return (
    <>
      {/* <button className={`py-4 px-12 cursor-pointer text-lg font-semibold text-white hover:text-black bg-[--primaryTxt] hover:bg-white border-[--primaryTxt] border-2 rounded-full ${props.addClass} `} >{props.txt}</button> */}

      <div id='btnComp' className={`relative overflow-hidden w-48 h-16  py-4 px-12 cursor-pointer text-lg font-semibold bg-[--primaryTxt] border-[--primaryTxt] border-2 rounded-full ${props.addClass} `} >

        <div id="btnBG" className='absolute h-0 w-full left-0 top-0 transition-all duration-700 ease-in-out '></div>
        <p id='btnTxt' className=' absolute text-white transition-all' >{props.txt}</p>
      </div>
    </>
  )
}

export default ButtonComp