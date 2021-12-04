import React from 'react'
import { products } from '../dataMocks/products';

import { ShoppingCart, ShoppingCartButton } from '../components/ShoppingCart/ShoppingCart'
import { Product, ProductGrid } from '../components/ProductCard/ProductCard';
import { Carousel } from '../components/Carousel/Carousel';

const Page = () => {
	return (
		<div>
			<Carousel>
				<div className='slide' style={{ backgroundColor: 'red' }}>
					<p>slide 1</p>
				</div>
				<div className='slide' style={{ backgroundColor: 'blue' }}>
					<p>slide 2</p>
				</div>
				<div className='slide'>
					<p>slide 3</p>
				</div>
			</Carousel>
			<ShoppingCart title="shopping cart" />
			<ShoppingCartButton />
			<ProductGrid>
				{products.map((product: any) =>
					<Product
						key={product.id}
						product={product}
					/>)}
			</ProductGrid>
		</div>
	)
}

export default Page
