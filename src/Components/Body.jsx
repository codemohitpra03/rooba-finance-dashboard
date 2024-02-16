import React from 'react'
import Arrow from './Arrow'
import Statusbar from './Statusbar'
import Steps from './Steps'
import { useSelector } from 'react-redux'

const zero_obj = {
	condition:"incomplete", 
	annotations:{text:"Complete Profile",buttonText:"Complete"},
	future:{
		"zero":"complete",
		"one":"incomplete",
		"two":"disabled",
		"three":"disabled",
	}

}

const one_obj = {
	condition:"disabled", 
	annotations:{text:"Step 1",buttonText:"Pay"},
	

}
const two_obj = {
	condition:"disabled", 
	annotations:{text:"Step 2",buttonText:"Pay"},
	

}
const three_obj = {
	condition:"disabled", 
	annotations:{text:"Step 3",buttonText:"Complete"},
	

}
const four_obj = {
	condition:"disabled", 
	annotations:{text:"Step 4",buttonText:"Complete"},
	

}
const five_obj = {
	condition:"disabled", 
	annotations:{text:"Step 5",buttonText:"Complete"},
	

}

const one_obj_incomplete = {
	condition:"incomplete", 
	annotations:{text:"Step 1",buttonText:"Pay"},
	future:{
		"zero":"complete",
		"one":"complete",
		"two":"incomplete",
		"three":"disabled",
	}

}
const two_obj_incomplete = {
	condition:"incomplete", 
	annotations:{text:"Step 2",buttonText:"Pay"},
	future:{
		"zero":"complete",
		"one":"complete",
		"two":"complete",
		"three":"incomplete",
	}

}
const three_obj_incomplete = {
	condition:"incomplete", 
	annotations:{text:"Step 3",buttonText:"Complete"},
	future:{
		"zero":"complete",
		"one":"complete",
		"two":"complete",
		"three":"complete",
	}

}

const zero_obj_complete = {
	condition:"complete", 
	annotations:{text1:"Complete Profile",text2:"Good job!",text3:"Complete",date:"12/12/2023",buttonText:"Download"},
}
const one_obj_complete = {
	condition:"complete", 
	annotations:{text1:"Step 1",text2:"5% of total amount",text3:"Rs 1,00,000",date:"14/12/2023",buttonText:"Receipt"},
}
const two_obj_complete = {
	condition:"complete", 
	annotations:{text1:"Step 2",text2:"",text3:"Complete",date:"15/12/2023",buttonText:"Download"},
}
const three_obj_complete = {
	condition:"complete", 
	annotations:{text1:"Step 3",text2:"We will get back to you in 3 months",text3:"Complete",date:"16/12/2023",buttonText:"Download"},
}

const Body = () => {
	const conditionState = useSelector(store=>store.condition)
	console.log(conditionState);
  return (
    <div className='overflow-y-auto h-[calc(170vh-200px)] p-[20px] md:p-[60px] pb-0 space-y-0 border-t-[1px]'>
		<div className='flex items-center space-x-1'>
			<p className='text-stack font text-sm'>jMarket</p>
			<Arrow/>
			<p className='text-stack font text-sm'>Category 1</p>
			<Arrow/>
			<p className='text-stack font text-sm'>Theme park site</p>
			<Arrow/>
		</div>
		
		<div>
			<img className='md:w-[995px] md:h-[371px] my-5' src="https://s3-alpha-sig.figma.com/img/8db1/b8f9/7c651d4ef97790863ac970ede2600f3f?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qlhfv0TVTql9Elkb9utIhkE86DqDhDZKDswzEZt8CLiM45aDMxc90Sdr1RMIA-PBUSR-qXwsB3vtMqd0uj0WcLKeSD~JjJIwtQUJzPp1SXVCveeNPrZa-HN2lcG5uDU8~KiPnFd7aRxVdQNBV0YYc7qttx3Ar59Q-DHxoUF~LgcbqnWgjYLxIa3114h0lGrlwFpoBLZb3mrSxH5byI6VZ4zfavGlwziKGcm2Rv4M5Gelzgsc22NZYd6a-QxIwZea5JZdVLpVX2Y0rNAO2s9g3eLZ-QPmtnmjfLHIn8drB2LZeF0KhPyfLY4lYZUkH2B2OTUe7ntA0QHNTYh13kuBCA__" alt="" />
		</div>

		<div className='grid h-fit grid-rows-[1fr_1/2fr] md:grid-rows-[auto_auto] lg:grid-cols-[1fr_1fr] p-[15px] md:p-[30px] border-b-[1px] border-t-[2px] border-l-[2px] border-r-[2px] '>
			<div className='space-y-8'>
				<p className='font-bold text-4xl'>Theme Park Site</p>
				<div className='space-y-2'>
					<div className='flex items-center space-x-1'>
						<svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M7 12.5H9V9.5H12V7.5H9V4.5H7V7.5H4V9.5H7V12.5ZM8 17.85C10.0333 15.9833 11.5417 14.2875 12.525 12.7625C13.5083 11.2375 14 9.88333 14 8.7C14 6.88333 13.4208 5.39583 12.2625 4.2375C11.1042 3.07917 9.68333 2.5 8 2.5C6.31667 2.5 4.89583 3.07917 3.7375 4.2375C2.57917 5.39583 2 6.88333 2 8.7C2 9.88333 2.49167 11.2375 3.475 12.7625C4.45833 14.2875 5.96667 15.9833 8 17.85ZM8 20.5C5.31667 18.2167 3.3125 16.0958 1.9875 14.1375C0.6625 12.1792 0 10.3667 0 8.7C0 6.2 0.804167 4.20833 2.4125 2.725C4.02083 1.24167 5.88333 0.5 8 0.5C10.1167 0.5 11.9792 1.24167 13.5875 2.725C15.1958 4.20833 16 6.2 16 8.7C16 10.3667 15.3375 12.1792 14.0125 14.1375C12.6875 16.0958 10.6833 18.2167 8 20.5Z" fill="#1C1B1F"/>
						</svg>
						<p className='text-graytext'>Address of the site</p>	
					</div>
					<div className='grid grid-cols-[90px_90px] w-[80vw]  md:w-auto md:flex md:items-center md:justify-between'>
						<div className=' m-1 ml-0 md:m-0 bg-badgebg h-[16px] w-[79px] flex items-center justify-around'>
							<svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M5.03329 11.1333L8.48329 7.00001H5.81663L6.29996 3.21668L3.21663 7.66668H5.53329L5.03329 11.1333ZM3.33329 13.6667L3.99996 9.00001H0.666626L6.66663 0.333344H7.99996L7.33329 5.66668H11.3333L4.66663 13.6667H3.33329Z" fill="#1C1B1F"/>
							</svg>
							<p className='text-[10px] font-normal md:font-light text-badgetext'>Adult rides</p>
						</div>
						<div className='m-1 ml-0 md:m-0 bg-badgebg h-[16px] w-[79px] flex items-center justify-around'>
							<svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M5.99996 13.3333C4.52218 13.3333 3.26385 12.8222 2.22496 11.8C1.18607 10.7777 0.666626 9.53329 0.666626 8.06663C0.666626 7.36663 0.802737 6.69718 1.07496 6.05829C1.34718 5.4194 1.73329 4.85552 2.23329 4.36663L5.99996 0.666626L9.76663 4.36663C10.2666 4.85552 10.6527 5.4194 10.925 6.05829C11.1972 6.69718 11.3333 7.36663 11.3333 8.06663C11.3333 9.53329 10.8138 10.7777 9.77496 11.8C8.73607 12.8222 7.47774 13.3333 5.99996 13.3333ZM5.99996 12C7.11107 12 8.05551 11.6194 8.83329 10.8583C9.61107 10.0972 9.99996 9.16663 9.99996 8.06663C9.99996 7.5444 9.89996 7.04718 9.69996 6.57496C9.49996 6.10274 9.21107 5.68885 8.83329 5.33329L5.99996 2.53329L3.16663 5.33329C2.78885 5.68885 2.49996 6.10274 2.29996 6.57496C2.09996 7.04718 1.99996 7.5444 1.99996 8.06663C1.99996 9.16663 2.38885 10.0972 3.16663 10.8583C3.9444 11.6194 4.88885 12 5.99996 12Z" fill="#1C1B1F"/>
							</svg>

							<p className='text-[10px] font-normal md:font-light text-badgetext'>Family rides</p>
						</div>
						<div className='m-1 ml-0 md:m-0 bg-badgebg h-[16px] w-[79px] flex items-center justify-around'>
							<svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M2.66663 5C2.47774 5 2.3194 4.93611 2.19163 4.80834C2.06385 4.68056 1.99996 4.52222 1.99996 4.33334C1.99996 4.14445 2.06385 3.98611 2.19163 3.85834C2.3194 3.73056 2.47774 3.66667 2.66663 3.66667H4.66663C5.03329 3.66667 5.34718 3.79722 5.60829 4.05834C5.8694 4.31945 5.99996 4.63334 5.99996 5H2.66663ZM3.99996 11C4.55552 11 5.02774 10.8056 5.41663 10.4167C5.80551 10.0278 5.99996 9.55556 5.99996 9C5.99996 8.44445 5.80551 7.97222 5.41663 7.58334C5.02774 7.19445 4.55552 7 3.99996 7C3.4444 7 2.97218 7.19445 2.58329 7.58334C2.1944 7.97222 1.99996 8.44445 1.99996 9C1.99996 9.55556 2.1944 10.0278 2.58329 10.4167C2.97218 10.8056 3.4444 11 3.99996 11ZM13 11C13.2777 11 13.5138 10.9028 13.7083 10.7083C13.9027 10.5139 14 10.2778 14 10C14 9.72222 13.9027 9.48611 13.7083 9.29167C13.5138 9.09722 13.2777 9 13 9C12.7222 9 12.4861 9.09722 12.2916 9.29167C12.0972 9.48611 12 9.72222 12 10C12 10.2778 12.0972 10.5139 12.2916 10.7083C12.4861 10.9028 12.7222 11 13 11ZM3.99996 10C3.72218 10 3.48607 9.90278 3.29163 9.70834C3.09718 9.51389 2.99996 9.27778 2.99996 9C2.99996 8.72222 3.09718 8.48611 3.29163 8.29167C3.48607 8.09722 3.72218 8 3.99996 8C4.27774 8 4.51385 8.09722 4.70829 8.29167C4.90274 8.48611 4.99996 8.72222 4.99996 9C4.99996 9.27778 4.90274 9.51389 4.70829 9.70834C4.51385 9.90278 4.27774 10 3.99996 10ZM13.3333 7.68334C13.6222 7.73889 13.8611 7.81389 14.05 7.90834C14.2388 8.00278 14.4444 8.15556 14.6666 8.36667V4.33334C14.6666 3.96667 14.5361 3.65278 14.275 3.39167C14.0138 3.13056 13.7 3 13.3333 3H9.13329L8.43329 2.26667L9.36663 1.33334L8.89996 0.866669L6.53329 3.23334L7.03329 3.7L7.96663 2.76667L8.66663 3.46667V5C8.66663 5.36667 8.53607 5.68056 8.27496 5.94167C8.01385 6.20278 7.69996 6.33334 7.33329 6.33334H5.98329C6.23885 6.52222 6.4444 6.71667 6.59996 6.91667C6.75552 7.11667 6.91107 7.36667 7.06663 7.66667H7.33329C8.06663 7.66667 8.6944 7.40556 9.21663 6.88334C9.73885 6.36111 9.99996 5.73334 9.99996 5V4.33334H13.3333V7.68334ZM10.6833 9.66667C10.75 9.36667 10.8305 9.125 10.925 8.94167C11.0194 8.75834 11.1666 8.55556 11.3666 8.33334H7.26663C7.31107 8.58889 7.33329 8.81111 7.33329 9C7.33329 9.18889 7.31107 9.41111 7.26663 9.66667H10.6833ZM13 12.3333C12.3555 12.3333 11.8055 12.1056 11.35 11.65C10.8944 11.1944 10.6666 10.6444 10.6666 10C10.6666 9.35556 10.8944 8.80556 11.35 8.35C11.8055 7.89445 12.3555 7.66667 13 7.66667C13.6444 7.66667 14.1944 7.89445 14.65 8.35C15.1055 8.80556 15.3333 9.35556 15.3333 10C15.3333 10.6444 15.1055 11.1944 14.65 11.65C14.1944 12.1056 13.6444 12.3333 13 12.3333ZM3.99996 12.3333C3.07774 12.3333 2.29163 12.0083 1.64163 11.3583C0.991626 10.7083 0.666626 9.92222 0.666626 9C0.666626 8.07778 0.991626 7.29167 1.64163 6.64167C2.29163 5.99167 3.07774 5.66667 3.99996 5.66667C4.92218 5.66667 5.70829 5.99167 6.35829 6.64167C7.00829 7.29167 7.33329 8.07778 7.33329 9C7.33329 9.92222 7.00829 10.7083 6.35829 11.3583C5.70829 12.0083 4.92218 12.3333 3.99996 12.3333Z" fill="#1C1B1F"/>
							</svg>


							<p className='text-[10px] font-normal md:font-light text-badgetext'>Restaurants</p>
						</div>
						<div className='m-1 ml-0 md:m-0 bg-badgebg h-[16px] w-[79px] flex items-center justify-around'>
							<svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M0.333374 12V2L3.00004 0L5.00004 1.5L7.00004 0L9.00004 1.5L11 0L13.6667 2V12H0.333374ZM1.66671 10.6667H4.33337V2.66667L3.00004 1.66667L1.66671 2.66667V10.6667ZM5.66671 10.6667H8.33337V2.66667L7.00004 1.66667L5.66671 2.66667V10.6667ZM9.66671 10.6667H12.3334V2.66667L11 1.66667L9.66671 2.66667V10.6667Z" fill="#1C1B1F"/>
							</svg>
							<p className='text-[10px] font-normal md:font-light text-badgetext'>Premium</p>
						</div>
						
					</div>
				</div>


				<div className='px-[10px] py-[5px] w-[226px] border-[1px] border-[#4375FB] flex items-center space-x-2'>
					<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M1.59947 10.3333L0.666138 9.39995L8.39947 1.66662H3.99947V0.333282H10.6661V6.99995H9.3328V2.59995L1.59947 10.3333Z" fill="#4375FB"/>
					</svg>
					<p className='text-[#4375FB] text-[14px] underline'>View opportunity on polygon</p>
				</div>	

				<div className='grid grid-cols-2 md:flex md:items-center md:space-x-3'>
					<div className='w-[90px]'>
						<p className='text-xl font-medium md:font-normal'>200 Acres</p>
						<p className='text-graytext text-[11px] font-medium md:font-normal'>Area</p>
					</div>
					<div className='w-[90px]'>
						<p className='text-xl font-medium md:font-normal'>5 Lacks</p>
						<p className='text-graytext text-[11px] font-medium md:font-normal'>Starting price </p>
					</div>
					<div className='w-[90px]'>
						<p className='text-xl font-medium md:font-normal'>10 Days</p>
						<p className='text-graytext text-[11px] font-medium md:font-normal'>Remaining Days </p>
					</div>
					<div className='w-[90px]'>
						<p className='text-xl font-medium md:font-normal'>2.5 Years</p>
						<p className='text-graytext text-[11px] font-medium md:font-normal'>Next check</p>
					</div>
				</div>
			</div>
			<div className='mr-0 ml-auto md:m-0 md:flex md:flex-col md:space-y-1 lg:items-end '>
				<button className='bg-buttonbg h-[52px] mt-5 mb-3 w-[273px] text-buttontext'>Complete Profile</button>
				<button className='text-buttonbg  float-left mr-0 ml-auto md:m-0 border-buttonbg border-[1px] h-[52px] w-[136px] px-[31px] py-[17px] bg-mywhite flex items-center space-x-2'>
					<p className='text-sm'>Site Visit</p>
					<svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M1 -2.34446e-06L6 5L1 10L0.112499 9.1125L4.225 5L0.1125 0.887497L1 -2.34446e-06Z" fill="#4375FB"/>
					</svg>

				</button>
				<div className='mt-20 mb-10 md:mt-0 md:mb-0'>
					<div>
						<div className='lg:flex lg:items-center lg:justify-between'>
							<p className='text-buttonbg text-2xl font-bold'>Rs 20,00,000</p>
							<p className='text-graytext text-sm'>Rs 65.00,000</p>
						</div>
						<Statusbar width={"40%"}/>

					</div>
				</div>
			</div>
		</div>
		
		<div className='md:grid md:grid-cols-[1fr_1fr] border-t-[1px] border-l-[1px] border-r-[1px] m-0'>
			<div className='h-[100vh] grid md:grid-rows-[237px_237px_237px_305px_480px] overflow-y-auto'>
				<div className='p-[20px] space-y-4 border-[1px] border-r-0'>
					<p className='text-[32px]'>Overview</p>
					<p className='text-sm'>Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love!Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love!Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love.</p>
				</div>
				<div className='p-[20px] space-y-4 border-[1px] border-r-0'>
					<p className='text-[32px]'>Why ?</p>
					<p className='text-sm'>Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love!Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love!Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love.</p>
				</div>
				<div className='p-[20px] space-y-4 border-[1px] border-r-0'>
					<p className='text-[32px]'>What ?</p>
					<p className='text-sm'>Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love!Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love!Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love.</p>
				</div>
				<div className='p-[20px] space-y-4 border-[1px] border-r-0'>
					<p className='text-[32px]'>Landmarks</p>
					<div className='space-y-2'>
						<div className='space-y-2'>
							<div className='flex items-center justify-between'>
								<div className='flex items-center space-x-2'>
									<svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M6.5 21.7225V20.0975L8.5 18.4725V12.5141L0 15.2225V13.0558L8.5 7.63915V1.68082C8.5 1.22943 8.64583 0.845747 8.9375 0.529775C9.22917 0.213803 9.58333 0.0558167 10 0.0558167C10.4167 0.0558167 10.7708 0.213803 11.0625 0.529775C11.3542 0.845747 11.5 1.22943 11.5 1.68082V7.63915L20 13.0558V15.2225L11.5 12.5141V18.4725L13.5 20.0975V21.7225L10 20.6391L6.5 21.7225Z" fill="#4375FB"/>
									</svg>
									<p className='text-xl text-buttonbg'>Airport</p>
								</div>
								<div className='flex flex-col items-end'>
									<p className='text-xl'>100 km</p>
									<p className='text-[11px] text-graytext'>Airport 1</p>
								</div>
							</div>
							<hr />
						</div>

						<div className='space-y-2'>
							<div className='flex items-center justify-between'>
								<div className='flex items-center space-x-2'>
									<svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M6.5 21.7225V20.0975L8.5 18.4725V12.5141L0 15.2225V13.0558L8.5 7.63915V1.68082C8.5 1.22943 8.64583 0.845747 8.9375 0.529775C9.22917 0.213803 9.58333 0.0558167 10 0.0558167C10.4167 0.0558167 10.7708 0.213803 11.0625 0.529775C11.3542 0.845747 11.5 1.22943 11.5 1.68082V7.63915L20 13.0558V15.2225L11.5 12.5141V18.4725L13.5 20.0975V21.7225L10 20.6391L6.5 21.7225Z" fill="#4375FB"/>
									</svg>
									<p className='text-xl text-buttonbg'>Airport</p>
								</div>
								<div className='flex flex-col items-end'>
									<p className='text-xl'>25 km</p>
									<p className='text-[11px] text-graytext'>Green Which Terminla</p>
								</div>
							</div>
							<hr />
						</div>
						<div className='space-y-2'>
							<div className='flex items-center justify-between'>
								<div className='flex items-center space-x-2'>
									<svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M14 20.8058V17.5558H11V15.3891H14V12.1391H16V15.3891H19V17.5558H16V20.8058H14ZM14 9.97247V0.222473H16V9.97247H14ZM0 17.5558V0.222473H2V17.5558H0ZM7 4.55581V0.222473H9V4.55581H7ZM7 11.0558V6.72247H9V11.0558H7ZM7 17.5558V13.2225H9V17.5558H7Z" fill="#4375FB"/>
									</svg>

									<p className='text-xl text-buttonbg'>Highway</p>
								</div>
								<div className='flex flex-col items-end'>
									<p className='text-xl'>100 km</p>
									<p className='text-[11px] text-graytext'>Highway number 5</p>
								</div>
							</div>
							<hr />
						</div>
					</div>
				</div>
				<div className='p-[20px] space-y-4 border-[1px] border-r-0 flex flex-col'>
					<p className='text-[32px]'>Map</p>
					<img src="https://s3-alpha-sig.figma.com/img/2ad6/9205/afa2d250daa6beaca4c6c6ff81c7c832?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Db4NkSeF9vmvZanoJTTReeYrO9jZ6xaBOoeBQU8TTkmCTDHl3l2KZMlzlNj4~okeMAfWzbmXo~TrJa2f2Y8fuR02cPZjycW3yDaQFYFWs~hSTDc9HZAUeTaetM-t8NdSPV-nDNYga1h58z9G2RM4UD3Z~2-tCHhEeowqv8lS~FKf2H5N1~SeQ9iTaSJWPsp7ZfBHYGDDb4A3RtKn0OeV9fzn0MlzXh5lNDV0AY-aC5gM77wEflx26P37SjmLoSsZaWoC2LWUppjdIIeNp8eejD5jtV18yswktpDDtrNuCGiU6ebRfIDDm4LALkc~eISzdDlAum0zlx088OdnWJoGKg__" alt="" />
					<button className='flex items-center self-end justify-evenly h-[52px] w-[136px] border-[1px] border-buttonbg text-buttonbg text-[14px]'>
						Schedule a call 
						<svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M1 0.389158L6 5.38916L1 10.3892L0.112499 9.50166L4.225 5.38916L0.1125 1.27666L1 0.389158Z" fill="#4375FB"/>
						</svg>

					</button>
				</div>
				
				
			</div>

			<div className='overflow-y-auto h-[100vh] md:grid md:grid-rows-[repeat(6,200px)]'>
				{/* <Steps condition={"incomplete"} annotations={{text:"Complete Profile",buttonText:"Complete"}}/> */}
				{/* <Steps condition={"incomplete"}/> */}
				{(conditionState.condition.zero === "incomplete" && <Steps {...zero_obj} />) || (conditionState.condition.zero === "complete" && <Steps {...zero_obj_complete} />)}
				{(conditionState.condition.one === "disabled" && <Steps {...one_obj}/>) || (conditionState.condition.one === "incomplete" && <Steps {...one_obj_incomplete} />) || (conditionState.condition.one === "complete" && <Steps {...one_obj_complete} />)}
				{(conditionState.condition.two === "disabled" && <Steps {...two_obj}/>) || (conditionState.condition.two === "incomplete" && <Steps {...two_obj_incomplete} />) || (conditionState.condition.two === "complete" && <Steps {...two_obj_complete} />)}
				{(conditionState.condition.three === "disabled" && <Steps {...three_obj}/>) || (conditionState.condition.three === "incomplete" && <Steps {...three_obj_incomplete} />) || (conditionState.condition.three === "complete" && <Steps {...three_obj_complete} />)}
				<Steps {...four_obj} />
				<Steps {...five_obj} />
			</div>
		</div>
    </div>
  )
}

export default Body

