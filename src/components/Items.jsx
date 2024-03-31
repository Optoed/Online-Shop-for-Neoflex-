import React, { Component } from 'react';

import Item from './Item';

export class Items extends Component {
	render() {
		const { items, addToCart } = this.props;

		return (
			<main className='main'>
				{items.map((el) => (
					<Item key={el.id} item={el} addToCart={addToCart} />
				))}
			</main>
		);
	}
}

export default Items;
