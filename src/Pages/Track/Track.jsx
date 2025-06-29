import React from 'react'
import Navbar from '../../layouts/Navbar'
import Footer from '../../layouts/Footer'
import learn from '../../assets/Images/Learning.png'

export default function Track() {
    return (
        <div>
            <Navbar />
            <main className="py-12 min-h-screen bg-gray-50">

                {/* Hero Section*/}
                <div className="bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col lg:flex-row justify-between items-center gap-8">
                        <div className="space-y-4">
                            <h1 className="text-5xl font-bold">Select A</h1>
                            <h1 className="text-5xl font-bold">Technology</h1>
                            <h1 className="text-5xl font-bold text-[#1E7CE8]">To start Practicing</h1>
                            <p className="text-gray-700 max-w-2xl">
                                Choose from our carefully curated technologies and start your learning journey with questions tailored to your skill level.
                            </p>
                        </div>

                        {/* Hero Image */}
                        <div className="image">
                            <img src={learn} alt="Learning" />
                        </div>
                    </div>
                </div>

                {/*Details Section */}
                <div className="bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col lg:flex-row justify-between items-center gap-8">
                       
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    )
}
