import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';

class App extends React.Component {
	// Товары
	constructor(props) {
		super(props);
		this.state = {
			items: [
				{
					id: 1,
					title: 'Apple BYZ S852I',
					cost: 2927,
					old_cost: 3527,
					rate: 4.7,
					img: 'image.jpg',
				},
				{
					id: 2,
					title: 'Apple EarPods',
					cost: 2327,
					// old_cost: 3527,
					rate: 4.5,
					img: 'image (1).jpg',
				},
				{
					id: 3,
					title: 'Apple EarPods',
					cost: 2327,
					// old_cost: 3527,
					rate: 4.5,
					img: 'image (2).jpg',
				},
				{
					id: 4,
					title: 'Apple BYZ S852I',
					cost: 2927,
					// old_cost: 3527,
					rate: 4.7,
					img: 'image (3).jpg',
				},
				{
					id: 5,
					title: 'Apple EarPods',
					cost: 2327,
					// old_cost: 3527,
					rate: 4.5,
					img: 'image (4).jpg',
				},
				{
					id: 6,
					title: 'Apple EarPods',
					cost: 2327,
					// old_cost: 3527,
					rate: 4.5,
					img: 'image (5).jpg',
				},
			],

			items2: [
				{
					id: 7,
					title: 'Apple AirPods',
					cost: 9527,
					// old_cost: 3527,
					rate: 4.7,
					img: 'image (6).jpg',
				},
				{
					id: 8,
					title: 'GERLAX GH-04',
					cost: 6527,
					// old_cost: 3527,
					rate: 4.7,
					img: 'image (7).jpg',
				},
				{
					id: 9,
					title: 'GERLAX GH-04',
					cost: 7527,
					// old_cost: 3527,
					rate: 4.7,
					img: 'image (8).jpg',
				},
			],
		};
	}

	render() {
		return (
			<div className='wrapper w-3/4 mx-auto'>
				<Header />

				<div className='items_title'>Наушники</div>
				<Items items={this.state.items} />

				<div className='items_title'>Беспроводные наушники</div>
				<Items items={this.state.items2} />

				<Footer />
			</div>
		);
	}
}

export default App;
