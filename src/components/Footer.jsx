import React from 'react';

export default function Footer() {
	return (
		<footer>
			<div className='footer'>
				<a href='#' className='logo'>
					QPICK
				</a>

				<ul className='contacts'>
					<li>
						<a href=''>Избранное</a>
					</li>
					<li>
						<a href=''>Корзина</a>
					</li>
					<li>
						<a href=''>Контакты</a>
					</li>
				</ul>

				<div className='footer_conditions'>
					<a href='' className=''>
						Условия сервиса
					</a>
					<div className='footer_conditions_imgs'>
						<a href=''>
							<img src='./images/conditions_footer/Lang.svg'></img>
						</a>
						<a href=''>
							<img src='./images/conditions_footer/Рус.svg'></img>
						</a>
						<a href=''>
							<img src='./images/conditions_footer/Eng.svg'></img>
						</a>
					</div>
				</div>

				<div className='social_networks_ICONS'>
					<a href='' className='social_networks_icon'>
						<img
							className='icon'
							src='./images/social_networks_ICONS/VK.svg'></img>
					</a>

					<a href='' className='social_networks_icon'>
						<img
							className='icon'
							src='./images/social_networks_ICONS/Telegram.svg'></img>
					</a>

					<a href='' className='social_networks_icon'>
						<img
							className='icon'
							src='./images/social_networks_ICONS/Whatsapp.svg'></img>
					</a>
				</div>
			</div>
		</footer>
	);
}
