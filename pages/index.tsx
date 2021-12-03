import React from 'react'
import { products } from '../dataMocks/products';

import { ShoppingCart, ShoppingCartButton } from '../components/ShoppingCart/ShoppingCart'
import { Product, ProductGrid } from '../components/ProductCard/ProductCard';
import { useRecoilState } from 'recoil';
import { addToCart, cartState } from '../store/atoms';

const Page = () => {
	const [cart, setCart] = useRecoilState(cartState);
	return (
		<div>
			<h1>Hello World</h1>
			<ShoppingCart title="shopping cart" />
			<ShoppingCartButton />
			<ProductGrid>
				{products.map((product: any) =>
					<Product
						key={product.id}
						onAddToCart={() => addToCart(cart, setCart, product)}
						product={product}
					/>)}
			</ProductGrid>
		</div>
	)
}

export default Page
