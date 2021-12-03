import React from 'react';
import { useRecoilState } from 'recoil';
import { cartState, removeFromCart, toggleCart } from '../../store/atoms';
import { Drawer } from '../Drawer/Drawer';
import styles from './ShoppingCart.module.scss';

const { cartItem } = styles;


export interface ShoppingCartProps {
	title: string,
}

export const ShoppingCart = ({
	title
}: ShoppingCartProps) => {
	const [cart, setCart] = useRecoilState(cartState);

	return (
		<Drawer
			title={title}
			isOpen={cart.show}
			onClose={() => toggleCart(cart, setCart)}
			direction="right"
		>
			{
				cart.items.map((item: any, index: number) => (
					<ShoppingCartItem product={item} key={index} />
				))
			}
		</Drawer>
	);
}

// export interface ShoppingCartContentProps {

// }


// export const ShoppingCartContent = () => {
// 	return (

// 	);
// };

export interface ShoppingCartItemProps {
	product: any | {
		name: string;
		price: number;
		quantity: number;
		id: string;
		picture: string;
	}
}

export const ShoppingCartItem = ({ product }: ShoppingCartItemProps) => {
	const [cart, setCart] = useRecoilState(cartState);
	const { name, price, quantity, picture } = product;

	return (
		<div className={cartItem}>
			<div>
				<img src={picture} alt={name} />
			</div>
			<main>
				<h3>{name}</h3>
				<p>{quantity} x {price}</p>
				<p>total: {(quantity * price).toFixed(2)}</p>
				<p>
					<span onClick={() => removeFromCart(cart, setCart, product)}>
						Remover
					</span>
				</p>
			</main>

		</div>
	);
};

// export interface ShoppingCartButtonProps {

// }

export const ShoppingCartButton = () => {
	const [cart, setCart] = useRecoilState(cartState);

	return (
		<button
			onClick={() => toggleCart(cart, setCart)}
		>shopping cart - products: {cart.items.length}</button>
	);
};
