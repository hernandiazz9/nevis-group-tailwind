import React from 'react'
import bgImg from '../assets/bg.jpg'
import Services from './Services';
import Team from './Team';


const Home = ({setScroll}) => {

    const controlScroll = e =>{
        console.log(e.target.scrollTop);
        if(e.target.scrollTop > 100){
            setScroll(true)
        }else if(e.target.scrollTop < 100)
            setScroll(false)
      }

    return (
        <>
        <main onScroll={controlScroll}>
            <article className="parallax-container ">
                <header className="parallax">
                    <div className="video-wrapper ">
                        <div className=" hidden  md:-mt-48 md:block  text-white   uppercase video-title   md:p-8 ">
                            <h1 className='text-white tracking-wider text-4xl pb-4 text-center font-bold'> 
                                WELCOME TO NEVIS GROUP 
                            </h1>
                            <p className=' tracking-widest text-white text-5xl text-center font-extrabold pb-4'>
                                BUILDING IN CENTRAL OTAGO SINCE 2007 
                            </p>
                            <p className=' text-white tracking-wider text-xl text-center'>Queenstown based bespoke builders and project managers.  Specialising in commercial and residential builds, renovations and landscaping.  Friendly client focused team focusing on efficiency and value for money.</p>
                        </div>
                       
                        <img src={bgImg} alt="." className=" hidden md:block  md:h-full md:w-full"/>
                    </div>     
                        {/* home en modo celular */}
                    <div style={{backgroundImage: "url(" +  bgImg  + ")"}} className='w-full flex justify-center  py-64 bg-cover bg-fixed h-64 bg-no-repeat  bg-center md:hidden'>
                        <div className=" max-w-sm -mt-24 ">
                            <h1 className='text-white text-2xl pb-4 text-center font-semibold'> 
                                WELCOME TO NEVIS GROUP 
                            </h1>
                            <p className=' text-white text-4xl text-center font-bold'>
                                BUILDING IN CENTRAL OTAGO SINCE 2007 
                            </p>
                            <p className=' text-white font-medium text-center text-lg'>Queenstown based bespoke builders and project managers.  Specialising in commercial and residential builds, renovations and landscaping.  Friendly client focused team focusing on efficiency and value for money.</p>
                        </div>
                    </div>
                    
                </header>

                <div className="  w-full content leading-normal">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <Services/>
                    <Team/>
                    
                </div>
        
            </article>
        </main>
        </>
    )
}

export default Home
