import React from 'react'
import landscaping from '../assets/landscaping.jpg'

const Services = () => {
    return (
            <div className='grid justify-center gap-16 md:grid-cols-2'>
                <div className='flex justify-end '>
                    <div className="max-w-md rounded overflow-hidden shadow-2xl ">
                        <img className="w-full h-64" src={landscaping} alt="landscaping"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-center text-xl mb-2">
                                Renovation
                            </div>
                            <p className="text-gray-700 text-center text-base">
                                        Large or small, let Nevis Group manage and complete your renovation. Nevis has relationships with interior designers, kitchen and bathroom suppliers, joinery manufacturers, the list goes on. Tell Nevis what you want to achieve and leave the rest to us.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-start">
                    <div className="max-w-md rounded overflow-hidden shadow-2xl ">
                        <img className="w-full h-64" src={landscaping} alt="landscaping"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-center text-xl mb-2">
                                Commercial Builds and Shop Fit-outs
                            </div>
                            <p className="text-gray-700 text-center text-base">
                                Nevis' crew has built a number of Queenstown's commercial spaces. Examples include the Avis/Budget depot, Party Plus warehouse and Limousine South offices and yard. Shop fitouts include Gibbston Valley Wine's Arrowtown premises and The Meat Preachers restuarant.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end">
                    <div className="max-w-md rounded overflow-hidden shadow-2xl ">
                        <img className="w-full h-64" src={landscaping} alt="landscaping"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-center text-xl mb-2">
                                Landscaping and Exterior Builds
                            </div>
                            <p className="text-gray-700 text-center text-base">
                                Get our best landscaping ideas for your backyard and front yard, including landscaping design, garden ideas, flowers, and garden design.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-start">
                    <div className="max-w-md rounded overflow-hidden shadow-2xl ">
                        <img className="w-full h-64" src={landscaping} alt="landscaping"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-center text-xl mb-2">
                                New Residential Builds
                            </div>
                            <p className="text-gray-700 text-center text-base">
                                Fancy a spa pool canti-levered over the Shotover River? No problem. Or perhaps a deck for entertaining? Retaining walls, schist, the Nevis crew love working outside.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Services
