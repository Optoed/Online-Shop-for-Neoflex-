import React from 'react';

import { FaRegHeart } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';

import { useState } from 'react';

import { Link } from 'react-router-dom';

export default function Header() {
	// let [cartOpen, setCartOpen] = useState(false);

	return (
		<header>
			<div className=' pt-3 pb-2 flex justify-between flex-container'>
				<Link to='/' className='logo text-3xl'>
					QPICK
				</Link>

				<div className=' float-right flex'>
					<Link to='/favourites' className='mr-4 favourite-button'>
						<FaRegHeart
							size={24}
							className='favourite-button text-gray-500 hover:text-red-500 transition-colors ease-in-out duration-300'
						/>
					</Link>

					<Link to='/cart' className='ml-4 '>
						<IoCartOutline
							// onClick={() => setCartOpen((cartOpen = !cartOpen))}
							size={28}
							className='shop-cart-button	text-gray-500 hover:text-emerald-500 transition-colors ease-in-out duration-300'
						/>

						{/* Если нажата корзина, то открываем страницу с корзиной */}
						{/* {cartOpen && <div className='shop-cart'></div>} */}
					</Link>
				</div>
			</div>
		</header>
	);
}
