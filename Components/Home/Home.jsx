import React from 'react'
import ButtonComp from '../_miniAssets/ButtonComp'
import 'remixicon/fonts/remixicon.css'
import 'react-tooltip/dist/react-tooltip.css'
import ToolTip from '../_miniAssets/ToolTip'


const Home = () => {

    return (
        <section id='home' className='relative w-full h-[90vh] flex justify-around gap-12 px-[11rem]'>
            <div className="home-in w-1/2 h-[85%] flex flex-col justify-center gap-6 pr-10" id="home-in1">
                <p className='text-[--primaryTxt] text-5xl font-semibold stroke-[4rem] stroke-red-600 mb-4 ' >Hello, I'm</p>
                <h1 className='text-7xl font-bold ' >Ayush Kumar</h1>
                <h4 className='text-3xl font-semibold' >A <span className='text-[#1cbe59]'>Creative Designer</span> from <span id='indiaTxt'>INDIA</span></h4>
                <p className='text-[#6f6b80] text-xl my-6' >I am a full stack web developer with experience in building responsive websites and applications using JavaScript frameworks like ReactJS, NodeJs, Express etc.</p>

                <div className='foot-home-in flex items-center'>
                    <ButtonComp txt={"About Me"} addClass={"mr-12"} />
                    <div id='social-media' className='text-4xl flex gap-6 '>
                        <a href='https://www.linkedin.com/in/krayush1109/' target='_blank' className="ri-linkedin-box-fill"></a>
                        <a href='https://github.com/krayush1109' target='_blank' className="ri-github-fill"></a>
                        <ToolTip />
                    </div>
                </div>
            </div>
            <div className="home-in w-1/2 h-[85%]  flex justify-center items-center " id="home-in2">
                <div id='avatarBG' className='h-1/2 w-1/2 overflow-hidden rounded-full bg-[--primaryTxt] bg-green-600 shadow-pink-200 shadow-md' >

                    <img src="/avatar.png" alt="Image NA" srcset="" />
                </div>
            </div>



        </section>
    )
}

export default Home