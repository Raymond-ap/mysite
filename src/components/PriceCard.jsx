import React from 'react'

const PricingCard = ({background, item}) => {
    return <div className={`py-5 shadow-xl w-full rounded-md ${background}`}>
        <div className='px-3'>
            <p className={`${background && "text-white"} font-bold text-base`}>{item?.category}</p>
            <div className='mt-3'>
            <span className={`${background ? "text-white": "text-cyan-500"} font-bold text-3xl`}>{item?.price}</span>
            <span className={`${background && "text-white"} text-gray-200 text-base`}>/month</span>
            </div>
            <p className={` font-normal text-sm text-gray-200 my-3`}>{item?.description}</p>
        </div>
        <div className='h-0.5 bg-gray-50'/>
        <div className='px-3'>
        {item.features.map((item, index ) => {
            return <p key={index} className={`${background ? "text-white" : "text-gray-500"} font-medium my-4 text-sm`}>{item}</p>
        })}
        </div>
        <div className='px-3 mt-3'>
        <button className={`${background ? "bg-white hover:bg-white text-cyan-500" : "bg-cyan-500 hover:bg-cyan-600 text-white"}  w-full font-medium py-1 px-4 rounded-md`}>
            {background ? "Selected" : "Select"}
        </button>
        </div>
    </div>
}

export default PricingCard