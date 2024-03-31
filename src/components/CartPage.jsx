import React from 'react';

class CartPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			quantities: {}, // объект для хранения количества товаров
		};
		this.handleQuantityChange = this.handleQuantityChange.bind(this);
	}

	handleQuantityChange(itemId, delta) {
		// Функция для изменения количества товаров
		const { quantities } = this.state;
		const newQuantities = { ...quantities };

		newQuantities[itemId] = (newQuantities[itemId] || 0) + delta;

		if (newQuantities[itemId] < 0) {
			newQuantities[itemId] = 0;
		}

		this.setState({ quantities: newQuantities });
	}

	render() {
		const { items } = this.props; // Получаем список товаров из пропсов
		const { quantities } = this.state;

		// Вычисляем финальную сумму
		const finalCost = Object.keys(quantities).reduce((acc, itemId) => {
			const item = items.find((item) => item.id === parseInt(itemId));
			const quantity = quantities[itemId];
			return acc + item.cost * quantity;
		}, 0);

		return (
			<div className='CartPage'>
				<h2 className='CartPage_title'>Корзина</h2>

				{/* Ваш код для отображения содержимого корзины */}
				<div className='CartPage_div'>
					<ul className='CartPage_list'>
						{items.map((item) => (
							<li key={item.id}>
								<div className='CartPage_item'>
									<div className='CartPage_item_left'>
										<div className='CartPage_item_image__with_add_reduce'>
											<div className='CartPage_item_image'>
												<img
													src={
														'./images/headphones/' +
														item.img
													}
													alt={item.title}
												/>
											</div>
											<div className='CartPage_item_quantity'>
												<button
													className='item_btn_reduce'
													onClick={() =>
														this.handleQuantityChange(
															item.id,
															-1
														)
													}>
													-
												</button>
												<span className='item_quantity'>
													{quantities[item.id] || 0}
												</span>
												<button
													className='item_btn_add'
													onClick={() =>
														this.handleQuantityChange(
															item.id,
															+1
														)
													}>
													+
												</button>
											</div>
										</div>

										<div className='CartPage_item_and_cost'>
											<h3>{item.title}</h3>
											<p>{item.cost} ₽</p>
										</div>
									</div>

									<div className='CartPage_item_right'>
										{/* Иконка мусорки */}

										{/* Суммарная цена для этого товара */}
										<span>
											{quantities[item.id] * item.cost ||
												0}{' '}
											₽
										</span>
									</div>
								</div>
							</li>
						))}
					</ul>

					{/* Правая часть с финальной стоимостью */}
					<div className='Final_cost_div'>
						<div className='final_cost'>
							<span>ИТОГО</span>
							<span>₽ {finalCost}</span>
						</div>
						<div className='btn_finally_buy_div'>
							<button className='btn_finally_buy'>
								<span>Перейти к оформлению</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CartPage;
