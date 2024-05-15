import React from 'react'
import {testimonials} from '../constants/index'
const Testimonial = () => {
return (
<div className='mt-20 tracking-wide'>
    <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20'>
        What People
        <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>
            {" "}
            are Saying
        </span>
    </h2>

    <div className='flex flex-wrap justify-center'>
        {testimonials.map((test,index) => (
        <div key={index} className='w-full sm:w-1/2 lg:w-1/3 px-3 py-2'>
            <div className='bg-neutral rounded-md p-6 text-md border'>
                <p> {test.text} </p>
                <div className='flex mt-8 items-start'>
                    <img
                    className='w-12 h-12 mr-6 rounded-full border border-neutral-300'
                     src={test.image}
                      alt={test.user} />

                      <div className=''>
                        <h6>{test.user}</h6>
                        <span className="text-sm italic font-normal text-neutral-600">{test.company}</span>
                      </div>

                </div>
            </div>
            <div>

            </div>
        </div>
        ))}

    </div>
</div>
)
}

export default Testimonial