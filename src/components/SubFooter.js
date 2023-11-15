import React from 'react'

const SubFooter = () => {
  return (
    <div className='w-full   bg-gradient-to-r from-[#2E2E2E] to-[#000000]'>
        <div className="mr-5 flex items-center justify-between">
             <img
                    src="./images/Group1.png"
                    alt="iphone"
                    className="w-[400px]  h-[500px]"
             />
        
        <div className='flex flex-col items-center justify-center'>
            <p className='text-[72px] text-white font-thin'>Big Summer <span className='font-normal'>Sale</span></p>
            <p className='text-[16px] text-[#787878]'>Commodo fames vitae vitae leo mauris in. Eu consequat</p>
            <button className="w-[120px] h-[45px] text-sm  text-white border-[1px] mt-7 rounded-md"
              >Shop Now</button>
        </div>
        <img
                    src="./images/Group2.png"
                    alt="iphone"
                    className="w-[400px]  h-[500px]"
             />


        </div>
    </div>
  )
}

export default SubFooter
