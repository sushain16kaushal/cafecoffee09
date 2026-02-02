import React from 'react'

export default function Contact() {
    return (
        <>
          <h1 className='text-center text-3xl text-red-500 mt-5'>Get in touch with CoffeeHut</h1>
          <div className='contact-section mt-7 flex flex-col items-center  gap-2'>
            <h2 className='text-center text-2xl text-red-400'>Sumbit Form</h2>
            <div className='form mt-4 '></div>
            <div className=' flex justify-center gap-2 mb-3'>
            <h2>Name :- </h2><input  className='rounded text-center border border-red-300 outline-none '  placeholder='enter your name' />
            </div>
             <div className=' flex justify-center gap-2 mb-3'>
            <h2>Email :- </h2><input className='rounded text-center border border-red-300 outline-none'  placeholder='enter your email' />
            </div>
             <div className=' flex justify-center gap-2 mb-3'>
            <h2>Subject :- </h2><input className='rounded text-center border border-red-300 outline-none'  placeholder='enter your subject' />
            </div>
             <div className=' flex gap-2 mb-3'>
            <h2>Message :- </h2><input className='rounded  border border-red-300 outline-none w-2xl h-15'  placeholder='enter your text' />
            </div>
            <button onClick={()=> alert('form sumbitted')} className='button rounded-3xl text-center px-3 py-2 bg-red-300 hover:cursor-pointer hover:bg-red-600 '>Sumbit</button>
          </div>
            <div className="max-w-md mx-auto mt-4 bg-red-400 shadow-md rounded-xl p-6 text-center hover:shadow-xl hover:translate-y-1.5">
  <h2 className="text-2xl font-semibold  mb-4">Contact Information</h2>

  <p className="mb-2">
    <span className="font-medium">Phone:</span> +91 98765 43210
  </p>

  <p className="mb-2">
    <span className="font-medium">Email:</span> hello@coffeehut.com
  </p>

  <p className="mb-2">
    <span className="font-medium">Address:</span>  
    123 Coffee Street, Your City, India
  </p>

  <p className="mt-4 text-sm text-gray-600">
    Open Daily: 8:00 AM – 10:00 PM
  </p>
</div>

        </>
    )
}


