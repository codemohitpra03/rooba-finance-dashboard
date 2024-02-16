import React from 'react'



const Marker = ({number,active}) => {
  return (
    <div className=''>
        <div className='flex items-center justify-around'>

            {active && <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="6" cy="6" r="6" fill="black"/>
                <path d="M3.36267 5.41741L4.52785 7.35938L9.18856 4.64062" stroke="#4374FB" strokeWidth="1.5"/>
            </svg>}
            <p className={`${active ? "text-black" : "text-markerdisabled"}`}>{number}</p>
        </div>
        <div>

            <svg width="30" height="3" viewBox="0 0 30 3" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="30" height="2.49805" fill={`${active ? "black" : "rgba(0, 0, 0, 0.25)"}`}/>
            </svg>
        </div>

    </div>
  )
}

export default Marker