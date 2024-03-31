import React from 'react';

class CartPage extends React.Component {
	render() {
		const { items } = this.props; // Получаем список товаров из пропсов

		return (
			<div className='CartPage'>
				<h2 className='CartPage_title'>Корзина</h2>

				{/* Ваш код для отображения содержимого корзины */}
				<ul>
					{items.map((item) => (
						<li key={item.id}>
							{item.title} - {item.cost} ₽
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default CartPage;
