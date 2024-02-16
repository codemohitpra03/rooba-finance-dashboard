import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import { changeCondition } from '../store/conditionSlice'
const disabled = ({annotations}) =>{
	return (<div className='p-[20px] flex flex-col justify-between border-y-[1px]'>
	<div className='flex items-center space-x-5'>
		<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect x="0.5" y="0.888672" width="19" height="18" fill="white" stroke="#b9b9b9"/>
		</svg>

		<p className='text-xl font-bold text-badgebg'>{annotations.text}</p>
	</div>
	<button className='w-[169px] h-[52px] opacity-[30%] bg-buttonbg text-buttontext self-end'>
		{annotations.buttonText}
	</button>
</div>)
}

const incomplete = ({annotations,future}) =>{
	
	console.log(future);
	const dispatch = useDispatch()
	return (<div className='p-[20px] flex flex-col justify-between border-y-[1px]'>
	<div className='flex items-center space-x-5'>
		<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect x="0.5" y="0.88916" width="19" height="18" fill="white" stroke="black"/>
		</svg>
		<p className='text-xl font-bold'>{annotations.text}</p>
	</div>
	<button onClick={()=>{
		dispatch(changeCondition(future))
	}} className='w-[169px] h-[52px] bg-buttonbg text-buttontext self-end'>
		{annotations.buttonText}
	</button>
</div>)
}

const complete = ({annotations}) =>{
	return (<div className='p-[20px] flex flex-col justify-between border-y-[1px]'>
	<div className='flex items-center justify-between'>
		<div className='flex items-start space-x-5'>
			<div className='relative h-5 w-5'>
				<svg className='absolute z-10' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect x="0.5" y="0.888672" width="19" height="18" fill="white" stroke="black"/>
				</svg>
				<svg className='absolute z-20' width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M9.1207 19.8887L0.0957031 10.8637L2.35195 8.60742L9.1207 15.3762L23.6478 0.849091L25.904 3.10534L9.1207 19.8887Z" fill="#5BB663"/>
				</svg>

			</div>
			<div>
				<>
				
					<p className='text-xl'>{annotations.text1}</p>
					<p className='text-buttonbg opacity-80 text-sm'>{annotations.text2}</p>
				</>
				<p className='font-bold text-[32px] text-buttonbg'>
					{annotations.text3}
				</p>
			</div>
			
		</div>
		<div className='self-start'>
			{annotations.date}
		</div>
	</div>
	<button className='flex items-center justify-center space-x-2 w-[169px] h-[52px]  text-buttonbg border-buttonbg border-[1px] self-end'>
		<p>{annotations.buttonText}</p>
		<svg width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M0 10.3887V9.38867H8V10.3887H0ZM4 8.38867L0.5 3.88867H2.5V0.388672H5.5V3.88867H7.5L4 8.38867ZM4 6.76367L5.45 4.88867H4.5V1.38867H3.5V4.88867H2.55L4 6.76367Z" fill="#4375FB"/>
		</svg>

	</button>
</div>)
}

const Steps = ({condition,annotations,future}) => {
	
	
	if(condition === "incomplete")return incomplete({condition,annotations,future})
	if(condition === "disabled")return disabled({annotations})
	if(condition === "complete")return complete({condition,annotations,future})
}

export default Steps