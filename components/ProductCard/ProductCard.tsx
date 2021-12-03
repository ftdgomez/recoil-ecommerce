import React from 'react';
import { useRecoilState } from 'recoil';
import { cartState, addToCart, removeFromCart, toggleCart } from '../../store/atoms';
import styles from './ProductCard.module.scss'
const { productCard, grid, cartButtons } = styles;

export interface ProductProps {
	product: any | {
		id?: string,
		name?: string,
		price?: number,
		picture?: string,
		description?: string,
		stock?: number,
		category?: string,
		tags?: string[],
		rating?: number,
		reviewsQty?: number,
	},
	onRemoveFromCart?: (id: string) => void,
}

export const Product = ({
	product,
}: ProductProps) => {
	const [cart, setCart] = useRecoilState(cartState);
	const { name, price } = product;
	return (
		<div className={productCard}>
			<img src={product.picture} alt={name} />
			<h3>{name}</h3>
			<p>{price}</p>
			{cart.items.some((item: any) => item.id === product.id) ?
				<div className={cartButtons}>
					<button>More</button>
					<button onClick={() => removeFromCart(cart, setCart, product)}>remove</button>
					<button>less</button>
				</div>
				: <button onClick={() => addToCart(cart, setCart, product)}>Add To Cart</button>
			}
		</div>
	);
}


export interface ProductGridProps {
	children: React.ReactNode
}

export const ProductGrid = ({
	children
}: ProductGridProps) => {
	return (
		<div className={grid}>
			{children}
		</div>
	)
}
