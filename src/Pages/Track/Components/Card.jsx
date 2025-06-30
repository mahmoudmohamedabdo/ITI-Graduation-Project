import React from 'react'
import reactLogo from '../../../assets/Images/reactLogo.png'
import nextArrow from '../../../assets/Images/nextArrow.png'
import Learning from '../../../assets/Images/LearningArrow.png'

export default function Card() {
    return (
        <div className="card w-96 bg-base-100 shadow-md text-center rounded-xl p-4">
            <div className="card-body">
              
                <div className="flex flex-col items-center mb-4">
                    <img src={reactLogo} alt="React Logo" className="w-20 h-20 mb-3" />
                    <h2 className="text-xl font-semibold text-[#2563EB]">React</h2>
                </div>

                <div className="text-sm text-gray-600 mb-4">
                    <p>Component-based JavaScript library for</p>
                    <p>building user interfaces</p>
                </div>

                <div className="flex justify-center gap-2 mb-5">
                    <button className="btn rounded-full h-fit px-4 py-1 text-blue-600 bg-blue-100 text-xs">2 skill Levels</button>
                    <button className="btn rounded-full h-fit px-4 py-1 text-gray-600 bg-gray-100 text-xs font-light">7 questions</button>
                </div>

                <div className="mt-6">
                    <button className='btn rounded-4xl h-fit px-3 py-2  text-[#2563EB] bg-[#DBEAFE] '>
                         <img src={Learning} alt="" /> 
                         Start Practicing 
                         <img src={nextArrow} alt="" />
                    </button>
                    
                </div>
            </div>
        </div>
    )
}
