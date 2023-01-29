import React from 'react'

const Packages = () => {
  return (
    <div className="bg-yellow-100 h-full">
      <h1 className="text-2xl text-center font-bold py-5">Packages</h1>
      <h3 className='text-center text-lg font-semibold pb-5'>
        Prices are determined based on artist, as well as other factors such as client requests, changes, etc.
      </h3>
      <div className="flex flex-row flex-wrap justify-evenly mx-10">
        <div className="border-2 border-solid border-black my-5 cursor-pointer hover:bg-green-200">
          <h2 className="font-bold text-lg underline text-center pt-3">
            Date Night
          </h2>
          <h4 className='mx-4'>
            This simple option is for those that would like a small touch up.  
          </h4>
          <h3 className="py-1 font-bold pl-5">Includes:</h3>
          <div className="pl-6 pb-3">
            <p>- Blush around the cheeks.</p>
            <p>- Eyebrow detailing</p>
            <p>- Lip gloss or Lip balm</p>
          </div>
        </div>
        <div className="border-2 border-solid border-black my-5 cursor-pointer hover:bg-blue-200">
          <h2 className="font-bold text-lg text-center pt-3"><span className='underline pr-2'>Beautiful</span> (Most Popular)</h2>
          <h4 className='mx-4'>
            This option is best for those that would like a bit more spice to their look.
          </h4>
          <h3 className="py-1 font-bold pl-5">Includes:</h3>
          <div className="pl-6 pb-3">
            <p>- All included in lower tiers</p>
            <p>- Concealer</p>
            <p>- Lipstick and/or Lip liner</p>
          </div>
        </div>
        <div className="border-2 border-solid border-black my-5 cursor-pointer hover:bg-purple-300">
          <h2 className="font-bold text-lg underline text-center pt-3">Exotic</h2>
          <h4 className='mx-4'>
            The best of the best! This ultimate package is for those that would like a full make over. 
          </h4>
          <h3 className="py-1 font-bold pl-5">Includes:</h3>
          <div className="pl-6 pb-3">
            <p>- All included in lower tiers</p>
            <p>- Finishing mist</p>
            <p>- Mascara and/or Lash curling</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Packages