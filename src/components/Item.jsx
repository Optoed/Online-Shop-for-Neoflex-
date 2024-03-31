import React, { Component } from 'react';

import { IoIosStar } from 'react-icons/io';

export class Item extends Component {
	render() {
		return (
			<div className='div_item'>
				<div className='item'>
					{/* <div className=''> */}
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

							<button className='item_btn_buy'>
								<span>Купить</span>
							</button>
						</div>
					</div>
					{/* </div> */}
				</div>
			</div>
		);
	}
}

export default Item;
