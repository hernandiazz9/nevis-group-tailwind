import React from 'react'
import bgImg from '../assets/bg.jpg'


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
                        <h1 className=" hidden md:block p-4 text-white text-1xl uppercase video-title   md:p-8 md:text-5xl">
                        BUILDING IN CENTRAL OTAGO SINCE 2007
                        <p style={{fontSize: '27px'}}>Queenstown based bespoke builders and project managers.  Specialising in commercial and residential builds, renovations and landscaping.  Friendly client focused team focusing on efficiency and value for money.</p>
                        </h1>
                        <img src={bgImg} alt="." className=" hidden md:block  md:h-full md:w-full"/>
                        <div style={{backgroundImage: "url(" +  bgImg  + ")"}} className='w-full flex justify-center  py-64 bg-cover bg-fixed h-64 bg-no-repeat bg-center md:hidden'>
                            <div className=" max-w-xs -mt-8 ">
                                <p className='bg-black bg-opacity-75 text-white'>
                                    BUILDING IN CENTRAL OTAGO SINCE 2007
                                </p>
                                <p className='bg-black bg-opacity-75 text-white'>Queenstown based bespoke builders and project managers.  Specialising in commercial and residential builds, renovations and landscaping.  Friendly client focused team focusing on efficiency and value for money.</p>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="bg-white content leading-normal py-12 px-4 md:px-12">
                    <div className="mx-auto max-w-md">
                    <p className="mb-4 md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem error iure quo ea dolore, iste ad assumenda ducimus sunt. Rerum nulla ipsum unde exercitationem ea atque explicabo tempore perferendis delectus?</p>
                    <p className="mb-4 md:text-xl">Laudantium cumque mollitia maxime, magni pariatur blanditiis laborum quisquam. Iure veniam deserunt debitis minus animi at fugiat doloremque a tempore obcaecati adipisci voluptate molestiae, amet odio, unde velit! Dolore, molestiae.</p>
                    <p className="mb-4 md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem error iure quo ea dolore, iste ad assumenda ducimus sunt. Rerum nulla ipsum unde exercitationem ea atque explicabo tempore perferendis delectus?</p>
                    <p className="md:text-xl">Laudantium cumque mollitia maxime, magni pariatur blanditiis laborum quisquam. Iure veniam deserunt debitis minus animi at fugiat doloremque a tempore obcaecati adipisci voluptate molestiae, amet odio, unde velit! Dolore, molestiae.</p>
                    </div>
                </div>
        
            </article>
        </main>
        </>
    )
}

export default Home
