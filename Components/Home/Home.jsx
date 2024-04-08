import React from 'react'
import ButtonComp from '../_miniAssets/ButtonComp'
import 'remixicon/fonts/remixicon.css'
import 'react-tooltip/dist/react-tooltip.css'
import ToolTip from '../_miniAssets/ToolTip'

const Home = () => {

    return (
        <>
            <div id='homeBG'>
                {/* <img src="'/public/bg-light.jpg" alt="Not available" srcset="" /> */}
            </div>
            <section id='home' className='relative w-full h-[100vh] flex justify-around gap-12 pt-[10vh] overflow-hidden'>
                <div className="home-in w-1/2 h-[85%] flex flex-col justify-center gap-6 pr-10" id="home-in1">
                    <p className='text-[--primaryTxt] text-5xl font-semibold stroke-[4rem] stroke-red-600 mb-4 ' >Hello, I'm</p>
                    <h1 className='text-7xl font-bold ' >Ayush Kumar</h1>
                    <h4 className='text-3xl font-semibold' >A <span className='text-[#1cbe59]'>Creative Designer</span> from <span id='indiaTxt'>INDIA</span></h4>
                    <p className='text-[#6f6b80] text-xl my-6' >I am a full stack web developer with experience in building responsive websites and applications using JavaScript frameworks like ReactJS, NodeJs, Express etc.</p>

                    <div className='foot-home-in flex items-center'>
                        <ButtonComp txt={"About Me"} addClass={"mr-12"} />
                        <div id='social-media' className='text-4xl flex gap-6 '>
                            <a href='https://www.linkedin.com/in/krayush1109/' target='_blank' className="ri-linkedin-box-fill"></a>
                            <a id='github' href='https://github.com/krayush1109' target='_blank' className="ri-github-fill"></a>
                            <ToolTip />
                        </div>
                    </div>
                </div>
                <div className="home-in w-1/2 h-[85%]  flex justify-center items-center " id="home-in2">
                    <div id='avatarBG' className='h-[20vmax] w-[20vmax] overflow-hidden rounded-full shadow-pink-200 shadow-md' >

                        {/* <img src="/avatar.png" alt="Image NA" srcset="" /> */}
                    </div>
                </div>

                <div id="downArrow" className='w-12 h-12 rounded-full bg-black opacity-40 backdrop:blur-md absolute bottom-12 left-1/2 animate-bounce flex justify-center items-center'>
                    <i id='downArrow' className="ri-arrow-down-line  text-4xl text-white "></i>
                </div>
            </section>
        </>
    )
}

export default Home