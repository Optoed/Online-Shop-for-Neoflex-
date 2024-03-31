import React, { Component } from 'react';

import { IoIosStar } from 'react-icons/io';

export class Item extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isAddedToCart: false, // Флаг, указывающий, добавлен ли товар в корзину
		};
	}

	handleAddToCart = () => {
		// Вызываем функцию addToCart, которая передана через пропсы из родительского компонента
		// В этой функции мы передаем товар, который нужно добавить в корзину (this.props.item)
		// Допустим, что addToCart принимает товар и обновляет состояние корзины в родительском компоненте
		this.props.addToCart(this.props.item);
		// После успешного добавления товара в корзину меняем состояние isAddedToCart на true
		this.setState({ isAddedToCart: true });
	};

	render() {
		const { item } = this.props;
		const { isAddedToCart } = this.state;

		return (
			<div className='div_item'>
				<div className='item'>
					<div className='img_div'>
						<img
							className='img'
							src={'./images/headphones/' + this.props.item.img}
							alt=''
						/>
					</div>

					<div className='item_description'>
						<div className='item_title_and_cost'>
							<h2>{this.props.item.title}</h2>
							<div className='div_cost'>
								<p>{this.props.item.cost} ₽</p>
								{this.props.item.old_cost && (
									<p className='old_cost'>
										{this.props.item.old_cost} ₽
									</p>
								)}
							</div>
						</div>

						<div className='item_rate_and_buy'>
							<div className='rate_with_ico'>
								<IoIosStar size={20} color='#FFCE7F' />
								<p>{this.props.item.rate}</p>
							</div>

							<button
								className='item_btn_buy'
								onClick={this.handleAddToCart}
								disabled={isAddedToCart}>
								<span>Купить</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Item;
