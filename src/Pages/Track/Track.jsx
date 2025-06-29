import React from 'react'
import Navbar from '../../layouts/Navbar'
import Footer from '../../layouts/Footer'

export default function Track() {
    return (
        <div>
            <Navbar />
            <main className="py-12  min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-5">
                    {/** Hero Section */}
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
                        <div className="space-y-4">
                            <h1 className="text-5xl font-bold ">Select A</h1>
                            <h1 className="text-5xl font-bold ">Technology</h1>
                            <h1 className="text-5xl font-bold text-[#1E7CE8] ">To start Practicing</h1>
                            <p className="text-gray-700 max-w-2xl mx-auto">
                                Choose from our carefully curated technologies and start your learning journey with questions tailored to your skill level.
                            </p>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded inline-flex items-center gap-2">
                                Let's Practice
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                            </button>
                        </div>

                        {/* Hero Images */}
                        <div className="image">

                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>

    )
}
