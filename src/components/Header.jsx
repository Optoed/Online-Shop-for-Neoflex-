import React from 'react';

import { FaRegHeart } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';

export default function Header() {
	return (
		<header>
			<div className=' pt-3 pb-2 flex justify-between flex-container'>
				<a href='#' className='logo text-3xl'>
					QPICK
				</a>

				<div className=' float-right flex'>
					<button className='mr-4'>
						<FaRegHeart
							size={24}
							className='text-gray-500 hover:text-red-500 transition-colors ease-in-out duration-300'
						/>
					</button>

					<button className='ml-4'>
						<IoCartOutline
							size={28}
							className='text-gray-500 hover:text-emerald-500 transition-colors ease-in-out duration-300'
						/>
					</button>
				</div>
			</div>
		</header>
	);
}
