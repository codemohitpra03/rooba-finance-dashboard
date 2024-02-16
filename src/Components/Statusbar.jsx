import React, { useEffect } from 'react'


const Statusbar = ({width}) => {
    useEffect(() => {
      document.getElementById('progress').style.width = width
    })
    
  return (
    <div className='w-[273px] flex bg-statusgray'>
        <div id='progress' className={`h-[5px]  bg-buttonbg`}></div>
    </div>
  )
}

export default Statusbar